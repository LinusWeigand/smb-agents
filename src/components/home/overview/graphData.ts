/**
 * The "Orakis connects the dots" graph.
 *
 * Nothing here is authored data — the whole graph is generated from a seeded
 * PRNG, so the same 56 nodes and 85 links come out on every run and on every
 * machine. That is why the seed is pinned: change it and you get a different
 * (but equally valid) graph.
 *
 * Call order matters. The generator draws from the same stream for node jitter
 * first and link wiring second, so reordering these loops silently produces a
 * different graph.
 */

export const WIDTH = 300;
export const HEIGHT = 200;
export const NODE_COUNT = 56;
const RADIUS_SCALE = 2.1;
const SEED = 7;

export const COLORS = [
  '#7950f2', '#868e96', '#228be6', '#40c057',
  '#fa5252', '#15aabf', '#fab005', '#fd7e14',
];

export type DotNode = {
  id: string;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  color: string;
};

export type DotLink = { source: string; target: string; kind: 'child' | 'ref' };

/** Mulberry-style integer hash PRNG — deterministic across engines. */
function makeRng(seed: number) {
  let t = seed;
  return () => {
    t |= 0;
    t = (t + 1831565813) | 0;
    let n = Math.imul(t ^ (t >>> 15), 1 | t);
    n = (n + Math.imul(n ^ (n >>> 7), 61 | n)) ^ n;
    return ((n ^ (n >>> 14)) >>> 0) / 4294967296;
  };
}

/** Each node belongs to the colour bucket its numeric id falls in. */
export const clusterOf = (id: string) => Number(id) % COLORS.length;

/** One anchor per colour, spaced around an ellipse inset from the edges. */
export const CLUSTER_CENTERS = COLORS.map((_, i) => {
  const angle = (i / COLORS.length) * Math.PI * 2;
  return {
    x: WIDTH / 2 + Math.cos(angle) * (WIDTH / 2 - 38),
    y: HEIGHT / 2 + Math.sin(angle) * (HEIGHT / 2 - 34),
  };
});

function build() {
  const rng = makeRng(SEED);

  const nodes: DotNode[] = Array.from({ length: NODE_COUNT }, (_, i) => {
    const c = CLUSTER_CENTERS[clusterOf(String(i))];
    return {
      id: String(i),
      x: c.x + (rng() - 0.5) * 30,
      y: c.y + (rng() - 0.5) * 30,
      color: COLORS[i % COLORS.length],
    };
  });

  const seen = new Set<string>();
  const links: DotLink[] = [];
  const connect = (a: number, b: number) => {
    if (a === b) return;
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (seen.has(key)) return;
    seen.add(key);
    links.push({ source: String(a), target: String(b), kind: rng() < 0.3 ? 'child' : 'ref' });
  };

  /** Prefer an earlier node of the same colour, so clusters hang together. */
  const earlierSameCluster = (i: number) => {
    const candidates: number[] = [];
    for (let u = 0; u < i; u++) if (clusterOf(String(u)) === clusterOf(String(i))) candidates.push(u);
    return candidates.length > 0
      ? candidates[Math.floor(rng() * candidates.length)]
      : Math.floor(rng() * i);
  };

  // Spanning pass: every node gets at least one edge back into the graph.
  for (let i = 1; i < NODE_COUNT; i++) {
    connect(i, rng() < 0.8 ? earlierSameCluster(i) : Math.floor(rng() * i));
  }

  // Then some extra edges for density, mostly within a cluster.
  const extra = Math.round(NODE_COUNT * 0.6);
  for (let i = 0; i < extra; i++) {
    const a = Math.floor(rng() * NODE_COUNT);
    if (rng() < 0.7) {
      const same = Array.from({ length: NODE_COUNT }, (_, h) => h).filter(
        (v) => v !== a && clusterOf(String(v)) === clusterOf(String(a)),
      );
      if (same.length > 0) connect(a, same[Math.floor(rng() * same.length)]);
    } else {
      connect(a, Math.floor(rng() * NODE_COUNT));
    }
  }

  const degree = new Map(nodes.map((n) => [n.id, 1]));
  for (const l of links) {
    degree.set(l.source, (degree.get(l.source) ?? 1) + 1);
    degree.set(l.target, (degree.get(l.target) ?? 1) + 1);
  }

  return { nodes, links, degree };
}

const GRAPH = build();

export const NODES = GRAPH.nodes;
export const LINKS = GRAPH.links;

/** Well-connected nodes read as bigger, square-rooted so hubs stay in scale. */
export const radiusOf = (id: string) => Math.sqrt(GRAPH.degree.get(id) ?? 1) * RADIUS_SCALE;

/** Keep a node fully inside the viewBox, accounting for its own radius. */
export function clampToBounds(n: DotNode) {
  const pad = radiusOf(n.id) + 2;
  n.x = Math.min(WIDTH - pad, Math.max(pad, n.x ?? pad));
  n.y = Math.min(HEIGHT - pad, Math.max(pad, n.y ?? pad));
}
