/**
 * Canonical origins for this deployment.
 *
 * Everything that emits an absolute URL — canonical tags, Open Graph, JSON-LD,
 * the link to the product app — reads from here, so moving domains is one
 * environment variable rather than a hunt through the codebase.
 *
 * Vite inlines VITE_* at build time, so changing these in Vercel needs a
 * redeploy to take effect.
 *
 * Note: public/robots.txt and public/sitemap.xml also carry absolute URLs and
 * are plain static files. Run `node scripts/sync-domain.mjs` after changing
 * VITE_SITE_URL to bring them into line.
 */
const strip = (url: string) => url.replace(/\/$/, '');

/** Public origin of the marketing site, including subdomain. */
export const SITE_URL = strip(
  import.meta.env.VITE_SITE_URL ?? 'https://www.limitless-stack.com',
);

/** Origin of the product app, linked from the header "Log in" button. */
export const APP_URL = strip(
  import.meta.env.VITE_APP_URL ?? 'https://app.limitless-stack.com',
);

/** Absolute URL for a path on the marketing site. */
export const siteUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
