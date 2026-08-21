import { useEffect, useRef, useState } from 'react';

/**
 * Reports whether an element is at least `threshold` visible.
 *
 * Unlike a plain `isIntersecting` check this also compares `intersectionRatio`,
 * so a card that has only just poked over the fold does not count as active
 * yet. Observing `[0, threshold, 1]` guarantees a callback at the moment the
 * ratio crosses the threshold in either direction, so it flips back off when
 * the element leaves again.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.5) {
  const ref = useRef<T>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting && entry.intersectionRatio >= threshold),
      { threshold: [0, threshold, 1] },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, active };
}
