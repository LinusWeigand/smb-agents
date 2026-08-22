import { useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { HoneypotField } from '../components/HoneypotField';
import { useToast } from '../components/ui/toast';
import { cn } from '../lib/utils';
import { useSeo } from '../lib/useSeo';
import { siteUrl } from '../lib/site';
import {
  FIELD_LIMITS, HONEYPOT_NAME, checkRateLimit, clampField, isHoneypotFilled, isValidEmail,
} from '../lib/formGuards';

/** Same-origin serverless function (api/demo_request.ts). Relative on purpose:
 *  a relative path cannot be undefined, which is the failure mode that shipped
 *  "undefined/auth/signup" to production on the previous backend. */
const DEMO_REQUEST_ENDPOINT = '/api/demo_request';

const COMPANY_SIZES = [
  { value: '1-20', label: '1–20 employees' },
  { value: '21-100', label: '21–100 employees' },
  { value: '101-500', label: '101–500 employees' },
  { value: '501-1000', label: '501–1000 employees' },
  { value: '1000+', label: '1000+ employees' },
];

type Fields = { email: string; name: string; company: string; painPoint: string; tools: string };
const EMPTY: Fields = { email: '', name: '', company: '', painPoint: '', tools: '' };

const LABEL = 'text-[13px] font-medium text-gray-600 font-sans';
const ERROR = 'text-xs text-red-500 mt-1 font-sans';

const fieldClass = (invalid?: string) =>
  cn(
    'h-10 w-full px-4 text-sm border rounded-[6px] text-[#171717] outline-none transition-colors bg-white placeholder:text-gray-400',
    'focus:border-gray-400 focus:ring-0',
    invalid ? 'border-red-400' : 'border-gray-200',
  );

export default function LetsTalk() {
  const { toast } = useToast();

  useSeo({
    title: "Let's Talk - Orakis",
    description:
      "Talk to the founder and see Orakis in action: goals, tasks, documents and knowledge in one place, with an AI that knows your team's context.",
    canonical: siteUrl('/lets-talk'),
  });
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const set = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    // Clear the error as soon as the user starts fixing that field.
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!values.email.trim()) next.email = 'Email is required';
    else if (!isValidEmail(values.email)) next.email = 'Please enter a valid email';
    if (!values.name.trim()) next.name = 'Name is required';
    if (!values.company.trim()) next.company = 'Please select a company size';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    /* A filled honeypot means a bot. Show the success state and send nothing —
       silently succeeding gives the bot no signal to adapt to. */
    if (isHoneypotFilled(honeypotRef.current?.value)) {
      setSubmitted(true);
      return;
    }

    if (!validate()) {
      toast({ title: 'Please fix the errors below', variant: 'destructive' });
      return;
    }

    const limit = checkRateLimit('demo_request');
    if (!limit.ok) {
      toast({ title: 'Please wait', description: limit.message, variant: 'destructive' });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(DEMO_REQUEST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: clampField(values.email, FIELD_LIMITS.email),
          name: clampField(values.name, FIELD_LIMITS.name),
          company: clampField(values.company, FIELD_LIMITS.name),
          challenge: clampField(values.painPoint, FIELD_LIMITS.long),
          tools: clampField(values.tools, FIELD_LIMITS.short),
          // Sent so the server can apply the same honeypot rule to callers
          // that skip the client entirely.
          [HONEYPOT_NAME]: honeypotRef.current?.value ?? '',
        }),
      });

      if (!res.ok) {
        // The server owns the real rate limit; surface its wording, not ours.
        const payload = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || 'Failed to submit demo request');
      }
      setValues(EMPTY);
      setSubmitted(true);
    } catch (err) {
      toast({
        title: 'Error submitting request',
        description: err instanceof Error && err.message !== 'Failed to submit demo request'
          ? err.message
          : 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-[560px]">
          <div className="mb-8 text-center">
            <h1
              className="font-display mb-2 text-[2.2rem] sm:text-4xl md:text-[64px]"
              style={{ color: '#171717', letterSpacing: '-0.02em', lineHeight: '1.1' }}
            >
              Let's talk
            </h1>
            <p className="font-sans text-base text-gray-500 max-w-sm mx-auto leading-relaxed">
              Share a bit about your work and we'll figure out together how Orakis fits in.
            </p>
          </div>

          <div
            className="bg-white border border-gray-200 rounded-2xl p-6"
            style={{ boxShadow: '0 1px 4px rgba(23,23,23,0.06)' }}
          >
            {submitted ? (
              <div className="text-center py-10 px-4">
                <div className="mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display text-lg text-[#171717] mb-1" style={{ fontWeight: 550 }}>
                  Your request was submitted!
                </h2>
                <p className="font-sans text-sm text-gray-500">
                  Thanks, we'll be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="relative flex flex-col gap-4">
                <HoneypotField inputRef={honeypotRef} />

                <div className="space-y-1">
                  <label htmlFor="demo-name" className={LABEL}>Your Name *</label>
                  <input
                    id="demo-name"
                    type="text"
                    placeholder="Full Name"
                    className={fieldClass(errors.name)}
                    value={values.name}
                    onChange={(e) => set('name', e.target.value)}
                  />
                  {errors.name && <p className={ERROR}>{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="demo-email" className={LABEL}>Work Email *</label>
                  <input
                    id="demo-email"
                    type="email"
                    placeholder="name@organization.com"
                    className={fieldClass(errors.email)}
                    value={values.email}
                    onChange={(e) => set('email', e.target.value)}
                  />
                  {errors.email && <p className={ERROR}>{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="demo-company" className={LABEL}>Company Size *</label>
                  <select
                    id="demo-company"
                    className={fieldClass(errors.company)}
                    value={values.company}
                    onChange={(e) => set('company', e.target.value)}
                  >
                    <option value="">Select...</option>
                    {COMPANY_SIZES.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                  {errors.company && <p className={ERROR}>{errors.company}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="demo-challenge" className={LABEL}>Biggest Challenge</label>
                  <textarea
                    id="demo-challenge"
                    rows={3}
                    placeholder="What's the biggest challenge you're hoping Orakis could solve?"
                    className={cn(fieldClass(), 'h-auto py-3 resize-none')}
                    value={values.painPoint}
                    onChange={(e) => set('painPoint', e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="demo-tools" className={LABEL}>Your Tools</label>
                  <textarea
                    id="demo-tools"
                    rows={2}
                    placeholder="e.g. Slack, Notion, HubSpot..."
                    className={cn(fieldClass(), 'h-auto py-3 resize-none')}
                    value={values.tools}
                    onChange={(e) => set('tools', e.target.value)}
                  />
                </div>

                <p className="font-sans text-xs text-gray-400">
                  By submitting, you agree to our{' '}
                  <Link
                    to="/privacy-policy"
                    className="text-gray-600 underline hover:text-gray-800 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="font-sans w-full h-10 rounded-[6px] bg-[#171717] text-white text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
                >
                  {submitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </Container>
  );
}
