import { useEffect, useRef, useState } from 'react';
import {
  forceCollide, forceLink, forceManyBody, forceSimulation,
  type Simulation, type SimulationLinkDatum, type SimulationNodeDatum,
} from 'd3-force';
import {
  CLUSTER_CENTERS, HEIGHT, LINKS, NODES, WIDTH,
  clampToBounds, clusterOf, radiusOf,
  type DotLink, type DotNode,
} from './graphData';

type SimNode = DotNode & SimulationNodeDatum;
type SimLink = SimulationLinkDatum<SimNode> & { kind: DotLink['kind'] };

export function ConnectsGraph({ active }: { active: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const simRef = useRef<Simulation<SimNode, SimLink> | null>(null);
  const workingRef = useRef<SimNode[]>([]);
  const startedRef = useRef(false);

  const [nodes, setNodes] = useState<SimNode[]>(() => NODES.map((n) => ({ ...n })));

  /* Start once, the first time the card is genuinely on screen. Running it
     immediately would mean the graph had already settled before anyone saw it;
     the whole point is watching the dots find their clusters. */
  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    const working: SimNode[] = NODES.map((n) => ({ ...n }));
    const links: SimLink[] = LINKS.map((l) => ({ ...l }));

    /* Custom force: nudge each node toward its colour's anchor. Weak (0.02) so
       the link and charge forces still shape the local structure. */
    const clusterForce = (alpha: number) => {
      for (const n of working) {
        const c = CLUSTER_CENTERS[clusterOf(n.id)];
        n.vx = (n.vx ?? 0) + (c.x - (n.x ?? c.x)) * 0.02 * alpha;
        n.vy = (n.vy ?? 0) + (c.y - (n.y ?? c.y)) * 0.02 * alpha;
      }
    };

    const sim = forceSimulation<SimNode>(working)
      .force('link', forceLink<SimNode, SimLink>(links).id((d) => d.id).distance(14))
      .force('charge', forceManyBody<SimNode>().strength(-12))
      .force('cluster', clusterForce)
      .force('collide', forceCollide<SimNode>((d) => radiusOf(d.id) + 1.5))
      .alphaDecay(0.02)
      .on('tick', () => {
        // Clamp before painting so nodes never drift outside the viewBox.
        for (const n of working) clampToBounds(n);
        setNodes(working.map((n) => ({ ...n })));
      });

    simRef.current = sim;
    workingRef.current = working;
  }, [active]);

  // Stop the ticker on unmount; the concise arrow form would return the
  // simulation, which React reads as a cleanup function.
  useEffect(() => () => {
    simRef.current?.stop();
  }, []);

  /** Client coords -> viewBox coords, clamped so a dragged dot stays in frame. */
  const toGraphPoint = (e: React.PointerEvent, id: string) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    const pad = radiusOf(id) + 2;
    const x = ((e.clientX - rect.left) / rect.width) * WIDTH;
    const y = ((e.clientY - rect.top) / rect.height) * HEIGHT;
    return {
      x: Math.min(WIDTH - pad, Math.max(pad, x)),
      y: Math.min(HEIGHT - pad, Math.max(pad, y)),
    };
  };

  /* Pointer capture keeps the drag attached to the dot even when the cursor
     outruns it, which happens constantly on targets this small. */
  const onPointerDown = (id: string) => (e: React.PointerEvent) => {
    const sim = simRef.current;
    const node = workingRef.current.find((n) => n.id === id);
    if (!sim || !node) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    sim.alphaTarget(0.3).restart();
    const p = toGraphPoint(e, id);
    node.fx = p.x;
    node.fy = p.y;
  };

  const onPointerMove = (id: string) => (e: React.PointerEvent) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    const node = workingRef.current.find((n) => n.id === id);
    if (!node) return;
    const p = toGraphPoint(e, id);
    node.fx = p.x;
    node.fy = p.y;
  };

  const onPointerUp = (id: string) => () => {
    const node = workingRef.current.find((n) => n.id === id);
    if (node) {
      node.fx = null;
      node.fy = null;
    }
    simRef.current?.alphaTarget(0);
  };

  const byId = new Map(nodes.map((n) => [n.id, n]));

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="w-full h-auto"
      aria-hidden={true}
    >
      <defs>
        <filter id="graphNodeShadow" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="0.6" stdDeviation="0.8" floodColor="#000000" floodOpacity="0.22" />
        </filter>
      </defs>

      {LINKS.map((l, i) => {
        const a = byId.get(l.source);
        const b = byId.get(l.target);
        if (!a || !b) return null;
        return (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={l.kind === 'child' ? 'rgba(23,23,23,0.22)' : 'rgba(23,23,23,0.09)'}
            strokeWidth={l.kind === 'child' ? 0.9 : 0.6}
            strokeLinecap="round"
          />
        );
      })}

      {nodes.map((n) => (
        <circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={radiusOf(n.id)}
          fill={n.color}
          filter="url(#graphNodeShadow)"
          onPointerDown={onPointerDown(n.id)}
          onPointerMove={onPointerMove(n.id)}
          onPointerUp={onPointerUp(n.id)}
          style={{ cursor: 'grab', touchAction: 'none' }}
        />
      ))}
    </svg>
  );
}
