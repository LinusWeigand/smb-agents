import { neon } from '@neondatabase/serverless';

/**
 * Neon connection, created per invocation.
 *
 * The serverless driver talks to Neon over HTTP rather than holding a TCP
 * pool, which is what makes it safe in a function that may be frozen or
 * discarded between requests — there is no connection to leak.
 */
export function db() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL is not set');
  return neon(url);
}
