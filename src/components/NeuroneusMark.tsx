import { useId } from 'react';

/**
 * The Neuroneus octagon. The glyph is a filled octagon with a mask punching out
 * the inner octagon plus two opposing "cuts", which is what gives the mark its
 * rotated-S negative space.
 *
 * The mask needs a document-unique id because the mark renders several times
 * per page (header, footer, the mock app chrome inside each demo). useId is
 * what produces the `:r0:`-style ids the deployed build ships.
 */
export function NeuroneusMark({
  size = 32,
  fill = '#171717',
  className,
}: {
  size?: number;
  fill?: string;
  className?: string;
}) {
  const maskId = `neuroneus-mark-${useId()}`;
  const outer = '32.4,7.76 67.6,7.76 92.24,32.4 92.24,67.6 67.6,92.24 32.4,92.24 7.76,67.6 7.76,32.4';

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          <polygon points={outer} fill="white" />
          <polygon
            points="41.2,30.64 58.8,30.64 69.36,41.2 69.36,58.8 58.8,69.36 41.2,69.36 30.64,58.8 30.64,41.2"
            fill="black"
          />
          <polygon points="58.8,30.64 69.36,41.2 85.53,25.03 74.97,14.47" fill="black" />
          <polygon points="41.2,69.36 30.64,58.8 14.47,74.97 25.03,85.53" fill="black" />
        </mask>
      </defs>
      <polygon points={outer} fill={fill} mask={`url(#${maskId})`} />
    </svg>
  );
}
