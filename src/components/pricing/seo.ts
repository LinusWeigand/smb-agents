import { MAX_PRICE, STANDARD_PRICE } from './plans';
import { SITE_URL, siteUrl } from '../../lib/site';
import type { Copy, Lang } from '../../copy';

const SIGN_UP = siteUrl('/sign-up');

const offer = (name: string, price: number, description?: string) => ({
  '@type': 'Offer',
  name,
  price: String(price),
  priceCurrency: 'EUR',
  availability: 'https://schema.org/InStock',
  url: SIGN_UP,
  ...(description ? { description } : {}),
});

/** Wording of the offer names, which are structured data rather than page copy
 *  and so are kept next to the graph that emits them. */
const OFFERS = {
  en: {
    freeTrial: 'Free Trial',
    freeTrialDescription:
      'Free for 7 days, no credit card required. Every feature unlocked, €5 AI usage included.',
    standardMonthly: 'Business – Standard license (monthly, per user)',
    standardYearly: 'Business – Standard license (billed yearly, per user)',
    proMonthly: 'Business – Pro license (monthly, per user)',
    proYearly: 'Business – Pro license (billed yearly, per user)',
    home: 'Home',
    application:
      'Company brain for task and knowledge management. Free 7-day trial, Business plans per user, and custom Enterprise plans.',
  },
  de: {
    freeTrial: 'Kostenlose Testphase',
    freeTrialDescription:
      '7 Tage kostenlos, ohne Kreditkarte. Alle Funktionen freigeschaltet, 5 € KI-Nutzung inklusive.',
    standardMonthly: 'Business – Standard-Lizenz (monatlich, pro Nutzer)',
    standardYearly: 'Business – Standard-Lizenz (jährliche Zahlung, pro Nutzer)',
    proMonthly: 'Business – Pro-Lizenz (monatlich, pro Nutzer)',
    proYearly: 'Business – Pro-Lizenz (jährliche Zahlung, pro Nutzer)',
    home: 'Startseite',
    application:
      'Firmengehirn für Aufgaben- und Wissensmanagement. 7 Tage kostenlos testen, Business-Tarife pro Nutzer und individuelle Enterprise-Tarife.',
  },
} as const;

/** Built from the live price constants, so the markup search engines read can
 *  never disagree with the prices on screen. */
export const pricingJsonLd = (t: Copy, lang: Lang) => {
  const o = OFFERS[lang];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: o.home, item: siteUrl('/') },
          { '@type': 'ListItem', position: 2, name: t.pricing.heading, item: siteUrl('/pricing') },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/#software`,
        name: 'Orakis',
        description: o.application,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        inLanguage: lang,
        url: siteUrl('/pricing'),
        offers: [
          offer(o.freeTrial, 0, o.freeTrialDescription),
          offer(o.standardMonthly, STANDARD_PRICE.monthly),
          offer(o.standardYearly, STANDARD_PRICE.yearly),
          offer(o.proMonthly, MAX_PRICE.monthly),
          offer(o.proYearly, MAX_PRICE.yearly),
        ],
      },
    ],
  };
};
