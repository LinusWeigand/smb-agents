import { MAX_PRICE, STANDARD_PRICE } from './plans';
import { SITE_URL, siteUrl } from '../../lib/site';

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

/** Built from the live price constants, so the markup search engines read can
 *  never disagree with the prices on screen. */
export const PRICING_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Pricing', item: siteUrl('/pricing') },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#software`,
      name: 'Orakis',
      description:
        'Company brain for task and knowledge management. Free 7-day trial, Business plans per user, and custom Enterprise plans.',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: siteUrl('/pricing'),
      offers: [
        offer(
          'Free Trial',
          0,
          'Free for 7 days, no credit card required. Every feature unlocked, €5 AI usage included.',
        ),
        offer('Business – Standard license (monthly, per user)', STANDARD_PRICE.monthly),
        offer('Business – Standard license (billed yearly, per user)', STANDARD_PRICE.yearly),
        offer('Business – Pro license (monthly, per user)', MAX_PRICE.monthly),
        offer('Business – Pro license (billed yearly, per user)', MAX_PRICE.yearly),
      ],
    },
  ],
};
