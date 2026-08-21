import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

/**
 * Seamless horizontal ticker.
 *
 * The trick is `repeat`: the same children are rendered N times side by side
 * and the whole row is translated by exactly `-100% - var(--gap)`. When the
 * first copy has slid fully out of frame the second sits precisely where it
 * started, so the loop restarts with no visible jump. Four copies is enough to
 * keep a wide viewport covered mid-cycle.
 */
export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  repeat = 4,
  gap = '1rem',
  duration = '40s',
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
  repeat?: number;
  gap?: string;
  duration?: string;
}) {
  return (
    <div
      className={cn('group flex overflow-hidden', className)}
      style={{ '--gap': gap, '--duration': duration, gap } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              'flex shrink-0 items-center',
              reverse ? 'animate-marquee-reverse' : 'animate-marquee',
              pauseOnHover && 'group-hover:[animation-play-state:paused]',
            )}
            style={{ gap }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
