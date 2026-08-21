import { useCallback, useState } from 'react';
import { MAX_USERS } from './plans';

export type Billing = 'monthly' | 'yearly';
export type Tier = 'standard' | 'max';

const clampUsers = (n: number) =>
  Math.min(MAX_USERS, Math.max(1, Number.isFinite(n) ? Math.round(n) : 1));

/** Shared pricing state: seat count, billing period and selected licence tier. */
export function usePricing() {
  // Yearly is the default; ?billing=monthly lets a campaign link land on monthly.
  const [billing, setBilling] = useState<Billing>(() =>
    new URLSearchParams(window.location.search).get('billing') === 'monthly' ? 'monthly' : 'yearly',
  );
  const [tier, setTier] = useState<Tier>('standard');
  const [users, setUsersRaw] = useState(1);

  const setUsers = useCallback((n: number) => setUsersRaw(clampUsers(n)), []);
  const step = useCallback((delta: number) => setUsersRaw((n) => clampUsers(n + delta)), []);

  return { billing, setBilling, tier, setTier, users, setUsers, step };
}
