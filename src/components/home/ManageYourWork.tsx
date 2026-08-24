import { useEffect, useRef, useState } from 'react';
import { NeuronChatDemo } from './chat/NeuronChatDemo';
import { useT } from '../../lib/i18n';

/**
 * "Manage your work" — the chat demo, framed by a scroll-driven entrance.
 *
 * The panel slides in from the right as you scroll it into place, mapping the
 * window from "the panel's top touches the bottom of the viewport" (progress 0)
 * to "its top reaches 35% down the viewport" (progress 1). The demo itself is
 * held via `canStart` until that slide completes, so the sequence never plays
 * out while the panel is still moving.
 *
 * The deployed build uses framer-motion for this; reproducing the same mapping
 * with a scroll listener avoids pulling in an animation library for one
 * transform. The panel is written to directly rather than through state so
 * scrolling does not re-render the demo on every frame.
 */
export function ManageYourWork() {
  const t = useT();
  const panelRef = useRef<HTMLDivElement>(null);
  const [canStart, setCanStart] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      // No entrance to wait for: show it in place and start immediately.
      setCanStart(true);
      return;
    }
    setAnimated(true);

    const el = panelRef.current;
    if (!el) return;

    const update = () => {
      const top = el.getBoundingClientRect().top;
      const vh = window.innerHeight;
      // 0 when the panel's top is at the viewport bottom, 1 at 35% down.
      const progress = Math.min(1, Math.max(0, (vh - top) / (vh * 0.65)));
      el.style.transform = `translateX(calc((50vw + 50%) * ${1 - progress}))`;
      if (progress >= 0.999) setCanStart(true);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-[1190px] flex flex-col items-center">
      <h2
        className="max-w-2xl font-display text-2xl md:text-4xl font-medium text-gray-900 leading-[1.15] text-center"
        style={{ letterSpacing: '-0.02em' }}
      >
        {t.manageYourWork.heading}
      </h2>
      <div
        ref={panelRef}
        className="w-full max-w-[860px] mt-[75px] md:mt-[105px] flex justify-center rounded-2xl border-[1.5px] border-gray-300 px-6 py-8"
        style={animated ? { transform: 'translateX(calc(50vw + 50%))' } : undefined}
      >
        <div className="w-full max-w-2xl">
          <NeuronChatDemo canStart={canStart} />
        </div>
      </div>
    </div>
  );
}
