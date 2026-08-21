/**
 * Shared submission guards: validation, field caps, and a client-side rate
 * limiter.
 *
 * The rate limiter lives in localStorage, so it is a courtesy speed bump rather
 * than a security control — it stops accidental double-sends and casual noise,
 * not a determined bot. Real enforcement belongs on the server.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const isValidEmail = (value: string) => EMAIL_RE.test(value.trim());

/** Maximum stored length per field kind. */
export const FIELD_LIMITS = {
  name: 100,
  email: 255,
  password: 128,
  short: 500,
  long: 1000,
} as const;

/** Trim and cap a field before it leaves the browser. */
export const clampField = (value: string, max: number) => value.trim().slice(0, max);

/** Minimum gap between two submissions of the same form. */
const MIN_GAP_MS = 3_000;
/** Attempts allowed inside the rolling window. */
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 10 * 60_000;

const storageKey = (form: string) => `orakis:submits:${form}`;

/** Recent attempt timestamps, with anything outside the window dropped. */
function readAttempts(form: string): number[] {
  try {
    const raw = localStorage.getItem(storageKey(form));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const now = Date.now();
    return parsed.filter((t) => typeof t === 'number' && now - t < WINDOW_MS);
  } catch {
    // Private mode or a corrupt value: fail open rather than block the form.
    return [];
  }
}

function writeAttempts(form: string, attempts: number[]) {
  try {
    localStorage.setItem(storageKey(form), JSON.stringify(attempts));
  } catch {
    // Nothing to do — the limiter is best-effort.
  }
}

/** Records an attempt and reports whether this one may proceed. */
export function checkRateLimit(form: string): { ok: boolean; message: string } {
  const now = Date.now();
  const attempts = readAttempts(form);
  const last = attempts[attempts.length - 1];

  if (last !== undefined && now - last < MIN_GAP_MS) {
    return { ok: false, message: 'One moment — that was just sent.' };
  }
  if (attempts.length >= MAX_ATTEMPTS) {
    return { ok: false, message: 'Too many attempts. Please try again in a few minutes.' };
  }
  writeAttempts(form, [...attempts, now]);
  return { ok: true, message: '' };
}

export const HONEYPOT_NAME = 'company_website';

/** A real person never sees this field, so any value means a bot filled it. */
export const isHoneypotFilled = (value?: string) => !!(value && value.trim());
