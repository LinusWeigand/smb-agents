/**
 * Optional lead notification.
 *
 * Storing a lead is useless if nobody is told about it, but email should never
 * be the reason a submission fails. The row is already committed by the time
 * this runs, so every failure here is swallowed deliberately — a lead that is
 * saved but unannounced is recoverable; one that errored back to the visitor
 * is gone.
 *
 * No-ops entirely until RESEND_API_KEY is set, so the endpoints work today and
 * gain notifications later without a code change.
 */
export async function notify(subject: string, lines: string[]): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_TO ?? 'info@orakis.com';
  const from = process.env.LEAD_NOTIFY_FROM;
  if (!key || !from) return;

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text: lines.join('\n'),
      }),
    });
  } catch {
    // Intentionally silent — see above.
  }
}
