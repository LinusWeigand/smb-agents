import { useCallback, useEffect, useRef } from 'react';
import NumberFlow from '@number-flow/react';
import { MAX_PRICE, MAX_USERS, PRICE_FORMAT, STANDARD_PRICE, yearlySaving } from './plans';
import type { Billing, Tier } from './usePricing';
import { localeOf, useLang, useT } from '../../lib/i18n';

/**
 * Sidebar calculator: seats, billing period, and the resulting monthly price.
 *
 * The stepper repeats while a button is held (a beat, then a steady tick) so
 * dragging a workspace up to 30 seats does not mean 30 clicks. The repeat is
 * torn down on a document-level mouseup/touchend rather than the button's own,
 * because the pointer has usually left the button by then.
 */
export function PriceControls({
  users, setUsers, step, billing, setBilling, tier,
}: {
  users: number;
  setUsers: (n: number) => void;
  step: (delta: number) => void;
  billing: Billing;
  setBilling: (b: Billing) => void;
  tier: Tier;
}) {
  const t = useT();
  const { lang } = useLang();
  const locale = localeOf(lang);
  const c = t.pricing.controls;
  const delayRef = useRef<number | null>(null);
  const repeatRef = useRef<number | null>(null);

  const stopRepeat = useCallback(() => {
    if (delayRef.current) { clearTimeout(delayRef.current); delayRef.current = null; }
    if (repeatRef.current) { clearInterval(repeatRef.current); repeatRef.current = null; }
  }, []);

  const startRepeat = useCallback(
    (delta: number) => {
      stopRepeat();
      delayRef.current = window.setTimeout(() => {
        repeatRef.current = window.setInterval(() => step(delta), 80);
      }, 350);
      const end = () => {
        stopRepeat();
        document.removeEventListener('mouseup', end);
        document.removeEventListener('touchend', end);
      };
      document.addEventListener('mouseup', end);
      document.addEventListener('touchend', end);
    },
    [step, stopRepeat],
  );

  useEffect(() => stopRepeat, [stopRepeat]);

  const perUser = tier === 'max' ? MAX_PRICE : STANDARD_PRICE;
  const price = Math.round(perUser[billing] * users * 100) / 100;
  const saving = yearlySaving(tier) * users;

  const STEP_BTN =
    'h-9 w-9 flex items-center justify-center rounded-[6px] border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 text-[16px] font-normal leading-none select-none';

  return (
    <aside className="w-full max-w-[360px] mx-auto min-[1060px]:w-[210px] min-[1060px]:max-w-none min-[1060px]:mx-0 shrink-0 flex flex-col gap-6">
      <div>
        <p className="mb-2 text-[13px] font-medium font-sans text-gray-700">{c.users}</p>
        <div className="flex items-center gap-2">
          <button
            aria-label={c.decreaseUsers}
            className={STEP_BTN}
            onClick={() => step(-1)}
            onMouseDown={() => startRepeat(-1)}
            onTouchStart={() => startRepeat(-1)}
          >
            −
          </button>
          <input
            type="number"
            min="1"
            max={MAX_USERS}
            aria-label={c.numberOfUsers}
            className="h-9 w-16 rounded-[6px] border border-gray-200 bg-white px-3 text-center text-sm font-sans text-gray-900 outline-none transition-colors focus:border-gray-400 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
          />
          <button
            aria-label={c.increaseUsers}
            className={STEP_BTN}
            onClick={() => step(1)}
            onMouseDown={() => startRepeat(1)}
            onTouchStart={() => startRepeat(1)}
          >
            +
          </button>
        </div>
      </div>

      <div>
        <p className="mb-2 text-[13px] font-medium font-sans text-gray-700">{c.billing}</p>
        <div className="relative grid h-9 w-full grid-cols-2 overflow-hidden rounded-[6px] border border-gray-200 bg-gray-100">
          <div
            className="pointer-events-none absolute inset-y-0 w-1/2 rounded-[6px] bg-[#171717] transition-[left] duration-200 ease-in-out"
            style={{ left: billing === 'monthly' ? '0%' : '50%' }}
          />
          {(['monthly', 'yearly'] as const).map((b) => (
            <button
              key={b}
              onClick={() => setBilling(b)}
              className={`relative z-10 h-full w-full rounded-[6px] text-[13px] font-medium transition-colors duration-200 ease-in-out cursor-pointer ${
                billing === b ? 'text-white' : 'text-gray-400'
              }`}
            >
              {b === 'monthly' ? c.monthly : c.yearly}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs font-sans text-blue-600">{c.yearlyHint}</p>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="mb-1 flex items-center justify-between gap-2 min-h-6">
          <p className="text-[11px] font-medium font-sans uppercase tracking-widest text-gray-400">
            {c.yourPrice}
          </p>
          {billing === 'yearly' && (
            <span className="inline-flex items-center shrink-0 rounded-[6px] bg-green-500/15 px-2 py-0.5 text-xs font-medium font-sans tabular-nums text-green-700">
              {c.save} €{saving.toLocaleString(locale)}
            </span>
          )}
        </div>
        <span className="inline-flex items-baseline font-sans text-2xl font-medium text-gray-900 tracking-[-0.02em]">
          €
          <NumberFlow value={price} format={PRICE_FORMAT} locales={locale} />
        </span>
        <p className="mt-1 text-[13px] font-sans text-gray-400">
          {billing === 'yearly' ? c.perMonthBilledYearly : c.perMonthBilledMonthly}
        </p>
      </div>
    </aside>
  );
}
