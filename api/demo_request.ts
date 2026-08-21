import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from './_lib/db.js';
import {
  FIELD_LIMITS, checkThrottle, clampField, clientHash, isBotSubmission, isValidEmail, parseBody,
} from './_lib/guards.js';
import { notify } from './_lib/notify.js';

/** POST /api/demo_request — the "Let's talk" form. */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = parseBody(req);

  /* A filled honeypot means a bot. Report success and store nothing: an error
     would tell it what to change next time. */
  if (isBotSubmission(body)) return res.status(200).json({ ok: true });

  const name = clampField(body.name, FIELD_LIMITS.name);
  const email = clampField(body.email, FIELD_LIMITS.email);
  const company = clampField(body.company, FIELD_LIMITS.name);
  const challenge = clampField(body.challenge, FIELD_LIMITS.long);
  const tools = clampField(body.tools, FIELD_LIMITS.short);

  const errors: Record<string, string> = {};
  if (!name) errors.name = 'Name is required';
  if (!email) errors.email = 'Email is required';
  else if (!isValidEmail(email)) errors.email = 'Please enter a valid email';
  if (!company) errors.company = 'Please select a company size';
  if (Object.keys(errors).length) {
    return res.status(400).json({ error: 'Invalid submission', errors });
  }

  try {
    const sql = db();

    const limit = await checkThrottle(sql, 'demo_request', clientHash(req));
    if (!limit.ok) return res.status(429).json({ error: limit.message });

    await sql`
      insert into demo_request (name, email, company, challenge, tools)
      values (${name}, ${email.toLowerCase()}, ${company}, ${challenge || null}, ${tools || null})
    `;

    await notify(`New demo request — ${name}`, [
      `Name:      ${name}`,
      `Email:     ${email}`,
      `Company:   ${company}`,
      `Challenge: ${challenge || '—'}`,
      `Tools:     ${tools || '—'}`,
    ]);

    return res.status(200).json({ ok: true });
  } catch (err) {
    // Log for the runtime logs; never leak connection details to the client.
    console.error('demo_request failed:', err);
    return res.status(500).json({ error: 'Could not submit right now. Please try again later.' });
  }
}
