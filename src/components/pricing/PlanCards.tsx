import NumberFlow from '@number-flow/react';
import { CircleCheckBig, X } from 'lucide-react';
import {
  BUSINESS_FEATURES, ENTERPRISE_FEATURES, MAX_PRICE, STANDARD_PRICE, TRIAL_FEATURES,
  type Feature,
} from './plans';
import type { Billing, Tier } from './usePricing';

const CARD =
  'relative flex w-full max-w-[360px] flex-col overflow-hidden bg-white rounded-[6px] border border-gray-200 min-[1060px]:max-w-none min-[1060px]:flex-1';
const CTA =
  'w-full h-10 rounded-[6px] border border-gray-200 bg-white hover:bg-[#171717] hover:border-[#171717] hover:text-white transition-colors duration-200 cursor-pointer text-sm font-medium font-sans text-gray-700';

/** One feature line. A header renders as a lead-in; a string value renders on
 *  the right; `false` renders as a struck-out marker rather than a tick. */
function FeatureRow({ feature }: { feature: Feature }) {
  const { text, value, header } = feature;
  if (header) {
    return <p className="text-[13px] font-sans font-medium text-gray-700 pt-1">{text}</p>;
  }
  const marker =
    value === false ? (
      <span className="relative flex items-center justify-center w-3.5 h-3.5 rounded-full border border-gray-300 shrink-0">
        <X className="absolute w-2.5 h-2.5 text-gray-900" strokeWidth={2.5} />
      </span>
    ) : (
      <CircleCheckBig className="w-3.5 h-3.5 text-gray-900 shrink-0" strokeWidth={1.8} />
    );
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="flex items-center gap-2 flex-1 min-w-0">
        {marker}
        <p className="text-[13px] font-sans font-normal text-gray-500">{text}</p>
      </span>
      {typeof value === 'string' && (
        <span className="text-[13px] font-medium font-sans text-gray-700 shrink-0">{value}</span>
      )}
    </div>
  );
}

/** Licence option inside the Business card; selecting one drives the sidebar. */
function LicenceOption({
  label, price, note, selected, onSelect,
}: {
  label: string;
  price: number;
  note?: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full rounded-[6px] border p-4 text-left transition-colors cursor-pointer ${
        selected ? 'border-[#3B82F6] bg-blue-50/60' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="flex items-baseline justify-between gap-2">
        <span className="inline-flex items-baseline font-sans text-2xl font-medium text-gray-900 tracking-[-0.02em]">
          €
          <NumberFlow value={price} locales="de-DE" />
        </span>
        <span className="shrink-0 text-[13px] font-sans text-gray-500">{label}</span>
      </div>
      {note && <p className="mt-1 text-[13px] font-sans text-gray-500">{note}</p>}
      <p className="mt-1 text-[13px] font-sans text-gray-400">per user / month (excl. VAT)</p>
    </button>
  );
}

export function PlanCards({
  billing, tier, setTier, onStartTrial,
}: {
  billing: Billing;
  tier: Tier;
  setTier: (t: Tier) => void;
  onStartTrial: (plan: string) => void;
}) {
  return (
    <div className="relative z-10 flex w-full flex-1 flex-col items-center gap-4 min-[1060px]:flex-row min-[1060px]:items-stretch min-[1060px]:gap-0">
      {/* Free trial */}
      <div className={CARD}>
        <div className="relative p-5 flex flex-col gap-4">
          <div className="flex items-center gap-2 min-h-6">
            <p className="text-[16px] font-medium font-orbitron text-gray-900 tracking-[-0.01em]">
              Free Trial
            </p>
          </div>
          <div className="w-full rounded-[6px] border border-transparent py-4">
            <div className="flex items-baseline gap-2">
              <span className="font-sans text-2xl font-medium text-gray-900 tracking-[-0.02em]">Free</span>
            </div>
            <p className="mt-1 text-[13px] font-sans text-gray-400">
              Try it free for 7 days. No credit card required.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-2 px-5 py-4 flex-1">
          {TRIAL_FEATURES.map((f) => (
            <FeatureRow key={f.text} feature={f} />
          ))}
          {/* Opens the beta waitlist rather than navigating: sign-up is gated
              while Orakis is in closed beta. */}
          <button className={CTA} onClick={() => onStartTrial('Free Trial')}>
            Start free trial
          </button>
        </div>
      </div>

      {/* Business — the recommended tier, and the only card with a choice in it */}
      <div className={CARD}>
        <div className="relative p-5 flex flex-col gap-4">
          <div className="flex items-center gap-2 min-h-6">
            <p className="text-[16px] font-medium font-orbitron text-gray-900 tracking-[-0.01em]">
              Business
            </p>
            <span className="inline-block rounded-[6px] bg-blue-100 px-2 py-0.5 text-[11px] font-medium font-sans text-blue-600">
              Recommended
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <LicenceOption
              label="Standard license"
              price={STANDARD_PRICE[billing]}
              selected={tier === 'standard'}
              onSelect={() => setTier('standard')}
            />
            <LicenceOption
              label="Pro license"
              price={MAX_PRICE[billing]}
              note="5x higher usage limits"
              selected={tier === 'max'}
              onSelect={() => setTier('max')}
            />
          </div>
        </div>
        <div className="flex flex-col justify-end gap-2 px-5 py-4 flex-1">
          {BUSINESS_FEATURES.map((f) => (
            <FeatureRow key={f.text} feature={f} />
          ))}
        </div>
      </div>

      {/* Enterprise — quote only */}
      <div className={CARD}>
        <div className="relative p-5 flex flex-col gap-4">
          <div className="flex items-center gap-2 min-h-6">
            <p className="text-[16px] font-medium font-orbitron text-gray-900 tracking-[-0.01em]">
              Enterprise
            </p>
          </div>
          <div className="w-full rounded-[6px] border border-transparent py-4">
            <div className="flex items-baseline gap-2">
              <span className="font-sans text-2xl font-medium text-gray-900 tracking-[-0.02em]">
                Individual
              </span>
            </div>
            <p className="mt-1 text-[13px] font-sans text-gray-400">
              Roll out Orakis across your organization.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-2 px-5 py-4 flex-1">
          {ENTERPRISE_FEATURES.map((f) => (
            <FeatureRow key={f.text} feature={f} />
          ))}
          <a href="/lets-talk" className="block">
            <button className={CTA}>Let's talk</button>
          </a>
        </div>
      </div>
    </div>
  );
}
