import { useEffect, useId, useRef, useState } from 'react';

/**
 * The animated call-to-action on the recommended plan.
 *
 * Seven copies of the same radial-gradient blob are stacked at different
 * sizes, rotations and offsets, blended together, and scaled past the edges
 * of the button so only the busy middle of the pattern shows through. The
 * colours themselves never move — what animates is the gradient's
 * `gradientTransform`, which sweeps through four keyframes and back, dragging
 * the highlights across the surface.
 *
 * The original shipped this with framer-motion. Pulling in an animation
 * library for one button is a poor trade, so the sweep is driven by a single
 * rAF loop writing one attribute per layer.
 */

type Palette = Record<`color${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11}`, string>;

/** Resting palette: blues. */
const BLUE: Palette = {
  color1: '#FFFFFF', color2: '#1E10C5', color3: '#9089E2', color4: '#FCFCFE',
  color5: '#F9F9FD', color6: '#B2B8E7', color7: '#0E2DCB', color8: '#0017E9',
  color9: '#4743EF', color10: '#7D7BF4', color11: '#0B06FC',
};

/** Hover palette: the same ramp shifted to cyan. */
const CYAN: Palette = {
  color1: '#FFFFFF', color2: '#0E8C9C', color3: '#89D6E2', color4: '#FCFEFE',
  color5: '#F9FDFD', color6: '#B2E2E7', color7: '#0E9CCB', color8: '#00C2E9',
  color9: '#43D6EF', color10: '#7BE4F4', color11: '#06D4FC',
};

const STOPS: { offset: number; key: keyof Palette }[] = [
  { offset: 0, key: 'color1' },
  { offset: 0.188423, key: 'color2' },
  { offset: 0.260417, key: 'color3' },
  { offset: 0.328792, key: 'color4' },
  { offset: 0.328892, key: 'color5' },
  { offset: 0.328992, key: 'color1' },
  { offset: 0.442708, key: 'color6' },
  { offset: 0.537556, key: 'color7' },
  { offset: 0.631738, key: 'color1' },
  { offset: 0.725645, key: 'color8' },
  { offset: 0.817779, key: 'color9' },
  { offset: 0.84375, key: 'color10' },
  { offset: 0.90569, key: 'color1' },
  { offset: 1, key: 'color11' },
];

type Frame = { tx: number; ty: number; rot: number; sx: number; sy: number };

const FRAMES: Record<string, Frame> = {
  svg1: { tx: 287.5, ty: 280, rot: -29.0546, sx: 689.807, sy: 1000 },
  svg2: { tx: 126.5, ty: 418.5, rot: -64.756, sx: 533.444, sy: 773.324 },
  svg3: { tx: 264.5, ty: 339.5, rot: -42.3022, sx: 946.451, sy: 1372.05 },
  svg4: { tx: 860.5, ty: 420, rot: -153.984, sx: 957.528, sy: 1388.11 },
};

/* Palindromic, so the last keyframe is the first one again and the loop
   closes on itself without a seam. */
const SEQUENCE = ['svg1', 'svg2', 'svg3', 'svg4', 'svg3', 'svg2', 'svg1'] as const;
const SEGMENTS = SEQUENCE.length - 1;

/** Full sweep in milliseconds. Hovering slows it to a crawl. */
const REST_MS = 10_000;
const HOVER_MS = 50_000;

/** Position, rotation and scale of each stacked copy. Written out in full so
 *  Tailwind can see every class it needs to generate. */
const LAYERS = [
  'w-[443px] h-[121px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-difference',
  'w-[443px] h-[121px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[164.971deg] mix-blend-difference',
  'w-[443px] h-[121px] top-1/2 left-1/2 -translate-x-[53%] -translate-y-[53%] rotate-[-11.61deg] mix-blend-difference',
  'w-[756px] h-[207px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[57%] rotate-[-179.012deg] mix-blend-difference',
  'w-[756px] h-[207px] top-1/2 left-1/2 -translate-x-[57%] -translate-y-1/2 rotate-[-29.722deg] mix-blend-difference',
  'w-[756px] h-[207px] top-1/2 left-1/2 -translate-x-[62%] -translate-y-[24%] rotate-[160.227deg] mix-blend-difference',
  'w-[756px] h-[207px] top-1/2 left-1/2 -translate-x-[67%] -translate-y-[29%] rotate-180 mix-blend-hard-light',
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** The gradient transform at a point in the loop, phase running 0 → 1. */
function transformAt(phase: number): string {
  const p = phase * SEGMENTS;
  const i = Math.min(Math.floor(p), SEGMENTS - 1);
  const t = p - i;
  const from = FRAMES[SEQUENCE[i]!]!;
  const to = FRAMES[SEQUENCE[i + 1]!]!;
  const tx = lerp(from.tx, to.tx, t).toFixed(3);
  const ty = lerp(from.ty, to.ty, t).toFixed(3);
  const rot = lerp(from.rot, to.rot, t).toFixed(4);
  const sx = lerp(from.sx, to.sx, t).toFixed(3);
  const sy = lerp(from.sy, to.sy, t).toFixed(3);
  return `translate(${tx} ${ty}) rotate(${rot}) scale(${sx} ${sy})`;
}

export function GradientCta({ label, onClick }: { label: string; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  const uid = useId().replace(/:/g, '');
  const gradients = useRef<(SVGRadialGradientElement | null)[]>([]);

  /* Hover only changes speed, so the phase carries across the switch and the
     pattern never jumps. Read through a ref to keep the loop off the effect's
     dependency list. */
  const durationRef = useRef(REST_MS);
  durationRef.current = hovered ? HOVER_MS : REST_MS;

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let last = performance.now();
    let phase = 0;

    const tick = (now: number) => {
      phase = (phase + (now - last) / durationRef.current) % 1;
      last = now;
      const value = transformAt(phase);
      for (const g of gradients.current) g?.setAttribute('gradientTransform', value);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const palette = hovered ? CYAN : BLUE;

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      /* isolate keeps the blend modes inside the button; without a stacking
         context they would composite against the page behind it. */
      className="relative isolate w-full h-10 rounded-[6px] overflow-hidden cursor-pointer hover:scale-[1.04] active:scale-[0.97]"
      style={{ transition: 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <span
          className={`absolute inset-0 transition-colors duration-500 ${
            hovered ? 'bg-[#06B6D4]' : 'bg-[#3B82F6]'
          }`}
        />
        <div className="absolute inset-0 scale-[2.2]">
          {LAYERS.map((layer, i) => (
            <div key={i} className={`absolute ${layer}`}>
              <svg
                className="w-full h-full"
                width="1030"
                height="280"
                viewBox="0 0 1030 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="1030" height="280" rx="140" fill={`url(#${uid}-${i})`} />
                <defs>
                  <radialGradient
                    ref={(el) => {
                      gradients.current[i] = el;
                    }}
                    id={`${uid}-${i}`}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform={transformAt(0)}
                  >
                    {STOPS.map((s, j) => (
                      <stop key={j} offset={s.offset} stopColor={palette[s.key]} />
                    ))}
                  </radialGradient>
                </defs>
              </svg>
            </div>
          ))}
        </div>
      </div>
      <span className="relative z-10 flex items-center justify-center w-full h-full text-white text-sm font-semibold font-sans">
        {label}
      </span>
    </button>
  );
}
