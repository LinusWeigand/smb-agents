import { useLayoutEffect, useRef, useState } from 'react';

/** Card artwork is authored at this width, then scaled to fit the card. */
export const CARD_MEDIA_WIDTH = 585;

/**
 * Scales a fixed-size illustration to the width of the card holding it.
 *
 * The card reserves space with an aspect-ratio box, so the layout is stable
 * before the measurement arrives; the artwork itself stays hidden until then,
 * since painting it at full size first would flash it oversized on a phone.
 */
export function useCardMediaScale() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setScale(el.clientWidth / CARD_MEDIA_WIDTH);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, scale };
}
