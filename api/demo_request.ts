import { db } from './_lib/db';
import {
  FIELD_LIMITS, checkThrottle, clampField, clientHash, isValidEmail, json, readSubmission,
} from './_lib/guards';
import { notify } from './_lib/notify';

/** POST /api/demo_request — the "Let's talk" form. */
export default async function handler(req: Request): Promise<Response> {
  const read = await readSubmission(req);
  if ('error' in read) return read.error;

  /* A filled honeypot means a bot. Report success and store nothing: giving it
     an error tells it what to change next time. */
  if (read.isBot) return json({ ok: true });

  const name = clampField(read.body.name, FIELD_LIMITS.name);
  const email = clampField(read.body.email, FIELD_LIMITS.email);
  const company = clampField(read.body.company, FIELD_LIMITS.name);
  const challenge = clampField(read.body.challenge, FIELD_LIMITS.long);
  const tools = clampField(read.body.tools, FIELD_LIMITS.short);

  const errors: Record<string, string> = {};
  if (!name) errors.name = 'Name is required';
  if (!email) errors.email = 'Email is required';
  else if (!isValidEmail(email)) errors.email = 'Please enter a valid email';
  if (!company) errors.company = 'Please select a company size';
  if (Object.keys(errors).length) return json({ error: 'Invalid submission', errors }, 400);

  const sql = db();

  const limit = await checkThrottle(sql, 'demo_request', clientHash(req));
  if (!limit.ok) return json({ error: limit.message }, 429);

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

  return json({ ok: true });
}
