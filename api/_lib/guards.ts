import { createHash } from 'node:crypto';
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
 * rate limiting we only ever need to know "same caller as before", never who
 * they are. The salt matters because the IPv4 space is small enough to brute
 * force an unsalted hash.
 */
export function clientHash(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for') ?? '';
  const ip = fwd.split(',')[0]?.trim() || 'unknown';
  const salt = process.env.THROTTLE_SALT ?? 'orakis-default-salt-set-THROTTLE_SALT';
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

  await sql`
    insert into submission_throttle (form, client_hash) values (${form}, ${hash})
  `;
  return { ok: true, message: '' };
}

export const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

/** Shared preamble: method check + JSON body parse + honeypot. */
export async function readSubmission(
  req: Request,
): Promise<{ error: Response } | { body: Record<string, unknown>; isBot: boolean }> {
  if (req.method !== 'POST') {
    return { error: json({ error: 'Method not allowed' }, 405) };
  }
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return { error: json({ error: 'Invalid JSON' }, 400) };
  }
  const pot = body[HONEYPOT_NAME];
  return { body, isBot: typeof pot === 'string' && pot.trim().length > 0 };
}
