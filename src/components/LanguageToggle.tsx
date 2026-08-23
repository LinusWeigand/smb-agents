import { useLang } from '../lib/i18n';
import { cn } from '../lib/utils';

const OPTIONS = [
  { lang: 'de' as const, label: 'DE' },
  { lang: 'en' as const, label: 'EN' },
];

/**
 * DE / EN switch: plain text, no chrome. The active language is near-black and
 * a notch heavier; the other sits back at the same weight as the nav links.
 *
 * The choice is site-wide and persisted, so the same control drives the header
 * and the mobile menu; `size` only changes the metrics to match the row it
 * sits in.
 */
export function LanguageToggle({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  const { lang, setLang } = useLang();
  const big = size === 'lg';

  return (
    <div
      role="group"
      aria-label={lang === 'de' ? 'Sprache' : 'Language'}
      className={cn('inline-flex items-center', big ? 'h-12 gap-4' : 'h-9 gap-2')}
    >
      {OPTIONS.map((o) => {
        const active = lang === o.lang;
        return (
          <button
            key={o.lang}
            type="button"
            lang={o.lang}
            onClick={() => setLang(o.lang)}
            aria-pressed={active}
            className={cn(
              'font-sans transition-colors duration-150 cursor-pointer',
              big ? 'text-[15px]' : 'text-[13px]',
              active
                ? 'font-semibold text-[#171717]'
                : 'font-medium text-gray-400 hover:text-gray-600',
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
