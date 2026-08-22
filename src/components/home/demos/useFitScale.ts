import { useLayoutEffect, useRef, useState } from 'react';

/** The demos are laid out at a fixed desktop size and scaled to fit. */
export const DEMO_WIDTH = 1440;
export const DEMO_HEIGHT = 840;

/**
 * Scales a fixed-size demo down to whatever width it is given, so the whole
 * interface stays visible on a phone instead of being cropped.
 *
 * The wrapper's height tracks the scale, so a shrunken demo does not reserve
 * the vertical space of a full-size one. Measured in a layout effect and kept
 * current with a ResizeObserver, which also catches container changes that a
 * window resize listener would miss.
 */
export function useFitScale() {
  const ref = useRef<HTMLDivElement>(null);
  /* Matches the constrained desktop case, so the first paint is close to
     right even before the measurement lands. */
  const [scale, setScale] = useState(0.65);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setScale(el.clientWidth / DEMO_WIDTH);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, scale };
}
