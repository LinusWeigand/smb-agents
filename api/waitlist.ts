import { db } from './_lib/db';
import {
  FIELD_LIMITS, checkThrottle, clampField, clientHash, isValidEmail, json, readSubmission,
} from './_lib/guards';
import { notify } from './_lib/notify';

/** POST /api/waitlist — the plan modal on /pricing. */
export default async function handler(req: Request): Promise<Response> {
  const read = await readSubmission(req);
  if ('error' in read) return read.error;
  if (read.isBot) return json({ ok: true });

  const email = clampField(read.body.email, FIELD_LIMITS.email).toLowerCase();
  const plan = clampField(read.body.plan, FIELD_LIMITS.name);

  if (!email) return json({ error: 'Email is required' }, 400);
  if (!isValidEmail(email)) return json({ error: 'Please enter a valid email address.' }, 400);

  const sql = db();

  const limit = await checkThrottle(sql, 'waitlist', clientHash(req));
  if (!limit.ok) return json({ error: limit.message }, 429);

  /* Re-signing up is not an error. Keep the original created_at as the date
     they first joined, but move them to whichever plan they asked about last. */
  await sql`
    insert into waitlist (email, plan)
    values (${email}, ${plan || null})
    on conflict (email) do update set plan = excluded.plan
  `;

  await notify(`New waitlist signup — ${email}`, [
    `Email: ${email}`,
    `Plan:  ${plan || '—'}`,
  ]);

  return json({ ok: true });
}
