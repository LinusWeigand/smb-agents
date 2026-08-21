import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from './_lib/db.js';
import {
  FIELD_LIMITS, checkThrottle, clampField, clientHash, isBotSubmission, isValidEmail, parseBody,
} from './_lib/guards.js';
import { notify } from './_lib/notify.js';

/** POST /api/waitlist — the plan modal on /pricing. */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = parseBody(req);
  if (isBotSubmission(body)) return res.status(200).json({ ok: true });

  const email = clampField(body.email, FIELD_LIMITS.email).toLowerCase();
  const plan = clampField(body.plan, FIELD_LIMITS.name);

  if (!email) return res.status(400).json({ error: 'Email is required' });
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  try {
    const sql = db();

    const limit = await checkThrottle(sql, 'waitlist', clientHash(req));
    if (!limit.ok) return res.status(429).json({ error: limit.message });

    /* Re-signing up is not an error. Keep the original created_at as the date
       they first joined, but move them to whichever plan they asked about last. */
    await sql`
      insert into waitlist (email, plan)
      values (${email}, ${plan || null})
      on conflict (email) do update set plan = excluded.plan
    `;

    await notify(`New waitlist signup — ${email}`, [`Email: ${email}`, `Plan:  ${plan || '—'}`]);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('waitlist failed:', err);
    return res.status(500).json({ error: 'Could not sign you up right now. Please try again later.' });
  }
}
