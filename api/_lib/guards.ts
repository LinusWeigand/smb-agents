import { createHash } from 'node:crypto';
import type { VercelRequest } from '@vercel/node';
import type { db } from './db.js';

/** Mirrors the client-side rule so both sides agree on what an email is. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const isValidEmail = (v: string) => EMAIL_RE.test(v.trim());

export const FIELD_LIMITS = { name: 100, email: 255, short: 500, long: 1000 } as const;

/** Trim and cap. Never trust a length the browser claims to have enforced. */
export const clampField = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

export const HONEYPOT_NAME = 'company_website';

/** Throttle window, matched to the browser-side limiter. */
const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 5;
const MIN_GAP_MS = 3_000;

/**
 * A stable, non-identifying key for the caller.
 *
 * We hash rather than store the IP: it is personal data under GDPR, and for
 * rate limiting we only need "same caller as before", never who they are. The
 * salt matters because the IPv4 space is small enough to brute force an
 * unsalted hash.
 */
export function clientHash(req: VercelRequest): string {
  const fwd = req.headers['x-forwarded-for'];
  const raw = Array.isArray(fwd) ? fwd[0] : fwd;
  const ip = (raw ?? '').split(',')[0]?.trim() || 'unknown';
  const salt = process.env.THROTTLE_SALT ?? 'neuroneus-default-salt-set-THROTTLE_SALT';
  return createHash('sha256').update(`${salt}:${ip}`).digest('hex');
}

export type Sql = ReturnType<typeof db>;

/**
 * Server-side rate limit. The browser-side one is a courtesy; this is the one
 * that actually holds, because it cannot be cleared from the client.
 */
export async function checkThrottle(
  sql: Sql,
  form: string,
  hash: string,
): Promise<{ ok: boolean; message: string }> {
  // Drop expired rows so the table stays small without a scheduled job.
  await sql`
    delete from submission_throttle
    where created_at < now() - make_interval(secs => ${WINDOW_MS / 1000})
  `;

  const rows = (await sql`
    select created_at
    from submission_throttle
    where form = ${form} and client_hash = ${hash}
    order by created_at desc
  `) as { created_at: string }[];

  const last = rows[0] ? new Date(rows[0].created_at).getTime() : null;
  if (last !== null && Date.now() - last < MIN_GAP_MS) {
    return { ok: false, message: 'One moment — that was just sent.' };
  }
  if (rows.length >= MAX_PER_WINDOW) {
    return { ok: false, message: 'Too many attempts. Please try again in a few minutes.' };
  }

  await sql`insert into submission_throttle (form, client_hash) values (${form}, ${hash})`;
  return { ok: true, message: '' };
}

/**
 * Vercel parses a JSON body for us, but only when the Content-Type says so —
 * anything else arrives as a raw string, so handle both.
 */
export function parseBody(req: VercelRequest): Record<string, unknown> {
  const raw = req.body;
  if (raw && typeof raw === 'object') return raw as Record<string, unknown>;
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw) as Record<string, unknown>;
    } catch {
      return {};
    }
  }
  return {};
}

/** A filled trap means a bot: no human ever sees that field. */
export const isBotSubmission = (body: Record<string, unknown>) => {
  const pot = body[HONEYPOT_NAME];
  return typeof pot === 'string' && pot.trim().length > 0;
};
