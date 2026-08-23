import NumberFlow from '@number-flow/react';
import { PRICE_FORMAT } from './plans';
import { localeOf, useLang } from '../../lib/i18n';

/**
 * A price with the euro sign on the side the reader's locale puts it:
 * "€24.00" in English, "24,00 €" in German.
 */
export function Money({ value, className }: { value: number; className?: string }) {
  const { lang } = useLang();
  const locale = localeOf(lang);
  const amount = <NumberFlow value={value} format={PRICE_FORMAT} locales={locale} />;

  return (
    <span className={className}>
      {lang === 'de' ? (
        <>
          {amount}
          {' €'}
        </>
      ) : (
        <>
          €{amount}
        </>
      )}
    </span>
  );
}

/** Same convention for a plain (non-animated) amount. */
export const formatMoney = (value: number, lang: 'en' | 'de') =>
  lang === 'de'
    ? `${value.toLocaleString('de-DE')} €`
    : `€${value.toLocaleString('en-US')}`;
