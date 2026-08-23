import { useEffect, useRef, useState } from 'react';
import { Check, X } from 'lucide-react';
import { HoneypotField } from '../HoneypotField';
import {
  FIELD_LIMITS, HONEYPOT_NAME, checkRateLimit, clampField, isHoneypotFilled, isValidEmail,
} from '../../lib/formGuards';
import { useT } from '../../lib/i18n';

/**
 * Beta waitlist capture, opened from the pricing CTA.
 *
 * Posts to the same-origin function in api/waitlist.ts. Re-submitting the same
 * address is not an error — the server upserts and just moves you to whichever
 * plan you asked about last.
 */
export function WaitlistModal({
  open, onClose, plan,
}: {
  open: boolean;
  onClose: () => void;
  plan: string;
}) {
  const t = useT();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const honeypotRef = useRef<HTMLInputElement>(null);

  // Reset on close so reopening never shows the previous attempt's state.
  useEffect(() => {
    if (open) return;
    setEmail('');
    setSubmitted(false);
    setSending(false);
    setError('');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const submit = async () => {
    if (sending) return;

    // Filled trap: show success, send nothing.
    if (isHoneypotFilled(honeypotRef.current?.value)) {
      setSubmitted(true);
      return;
    }
    if (!isValidEmail(email)) {
      setError(t.pricing.waitlist.invalidEmail);
      return;
    }
    const limit = checkRateLimit('waitlist');
    if (!limit.ok) {
      setError(limit.reason ? t.formGuards[limit.reason] : t.pricing.waitlist.genericError);
      return;
    }

    setError('');
    setSending(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: clampField(email, FIELD_LIMITS.email),
          plan,
          [HONEYPOT_NAME]: honeypotRef.current?.value ?? '',
        }),
      });
      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || t.pricing.waitlist.genericError);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.pricing.waitlist.genericError);
    } finally {
      setSending(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label={t.pricing.waitlist.dialogAria}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-2xl border border-gray-200 w-full max-w-md p-8 shadow-2xl">
        <button
          onClick={onClose}
          aria-label={t.pricing.waitlist.close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-[6px] text-gray-400 hover:text-gray-700 hover:bg-[#F2F2F2] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <h2
              className="font-display font-medium text-xl text-gray-900 mb-2"
              style={{ letterSpacing: '-0.02em' }}
            >
              {t.pricing.waitlist.doneHeading}
            </h2>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              {t.pricing.waitlist.doneBody}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2
                className="font-display font-medium text-2xl text-gray-900 mb-2"
                style={{ letterSpacing: '-0.02em' }}
              >
                {t.pricing.waitlist.heading}
              </h2>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                {t.pricing.waitlist.body}
              </p>
            </div>

            <div className="relative flex flex-col gap-3">
              <HoneypotField inputRef={honeypotRef} />
              <input
                type="email"
                placeholder={t.pricing.waitlist.emailPlaceholder}
                value={email}
                maxLength={FIELD_LIMITS.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') void submit();
                }}
                className="h-10 w-full px-4 text-sm border border-gray-200 rounded-[6px] text-gray-900 outline-none focus:border-gray-400 bg-white placeholder:text-gray-400 font-sans transition-colors"
                autoFocus
              />
              {error && <p className="font-sans text-xs text-red-500">{error}</p>}
            </div>

            <div className="mt-3">
              <button
                onClick={() => void submit()}
                disabled={sending}
                className="w-full h-10 rounded-[6px] border border-gray-200 bg-white hover:bg-[#171717] hover:border-[#171717] hover:text-white transition-colors duration-200 cursor-pointer text-sm font-medium font-sans text-gray-700"
              >
                {sending ? t.pricing.waitlist.sending : t.pricing.waitlist.submit}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
