import { useCallback, useEffect, useRef, useState } from 'react';

export type Tab = 'goals' | 'tasks';

/**
 * Drives the Goals/Tasks toggle.
 *
 * The board flips itself every `intervalMs` so a visitor who never touches it
 * still sees both views. Three things keep that from being obnoxious:
 *  - an IntersectionObserver only runs the timer while the demo is on screen,
 *  - `document.hidden` skips ticks in a background tab, so you don't return to
 *    a board that silently flipped 40 times,
 *  - clicking a tab restarts the interval, so a deliberate choice gets a full
 *    dwell before the cycle takes over again.
 */
export function useTabCycle(
  ref: React.RefObject<HTMLElement | null>,
  intervalMs = 6000,
) {
  const [tab, setTab] = useState<Tab>('goals');
  const [visible, setVisible] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.2,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);

  const restart = useCallback(() => {
    window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      if (!document.hidden) setTab((t) => (t === 'goals' ? 'tasks' : 'goals'));
    }, intervalMs);
  }, [intervalMs]);

  useEffect(() => {
    if (!visible) return;
    restart();
    return () => window.clearInterval(timer.current);
  }, [visible, restart]);

  const select = useCallback(
    (t: Tab) => {
      setTab(t);
      restart();
    },
    [restart],
  );

  return { tab, select };
}
