import { useCallback, useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

const W = 1600;
const H = 130;
const N = 17;
const REST_Y = 26;
const X0 = 60;
const SPACING = (W - 2 * X0) / (N - 1);
const MAX_PULL = 95;
const FALLOFF = 5;

type V = { x: number; y: number };

const REST_PTS: V[] = Array.from({ length: N }, (_, i) => ({ x: X0 + i * SPACING, y: REST_Y }));

function smoothPath(pts: V[]): string {
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

const REST_D = smoothPath(REST_PTS);

type VineNode = { i: number; type: "leaf" | "flower"; rot: number; s: number };
const ROTS = [-55, 160, 50, -160];
const NODES: VineNode[] = [];
for (let i = 1; i < N - 1; i++) {
  if (i % 6 === 3) {
    NODES.push({ i, type: "flower", rot: 0, s: 1 });
  } else if (i % 2 === 1) {
    NODES.push({ i, type: "leaf", rot: ROTS[i % 4], s: 0.8 + ((i * 37) % 10) / 22 });
  }
}

function nodeTransform(n: VineNode, off: V): string {
  const p = { x: X0 + n.i * SPACING + off.x, y: REST_Y + off.y };
  return `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${(n.rot + off.x * 0.25).toFixed(1)}) scale(${n.s})`;
}

export default function GoldenVine() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const stemRef = useRef<SVGPathElement | null>(null);
  const hitRef = useRef<SVGPathElement | null>(null);
  const nodeRefs = useRef<(SVGGElement | null)[]>([]);
  const off = useRef<V[]>(Array.from({ length: N }, () => ({ x: 0, y: 0 })));
  const vel = useRef<V[]>(Array.from({ length: N }, () => ({ x: 0, y: 0 })));
  const dragIdx = useRef<number | null>(null);
  const raf = useRef(0);

  const render = useCallback(() => {
    const o = off.current;
    const pts = o.map((p, i) => ({ x: X0 + i * SPACING + p.x, y: REST_Y + p.y }));
    const d = smoothPath(pts);
    stemRef.current?.setAttribute("d", d);
    hitRef.current?.setAttribute("d", d);
    NODES.forEach((n, j) => {
      nodeRefs.current[j]?.setAttribute("transform", nodeTransform(n, o[n.i]));
    });
  }, []);

  const tick = useCallback(() => {
    const o = off.current;
    const v = vel.current;
    let energy = 0;
    for (let i = 1; i < N - 1; i++) {
      const ax = -0.16 * o[i].x + 0.11 * (o[i - 1].x + o[i + 1].x - 2 * o[i].x) - 0.075 * v[i].x;
      const ay = -0.16 * o[i].y + 0.11 * (o[i - 1].y + o[i + 1].y - 2 * o[i].y) - 0.075 * v[i].y;
      v[i].x += ax;
      v[i].y += ay;
      o[i].x += v[i].x;
      o[i].y += v[i].y;
      energy += Math.abs(o[i].x) + Math.abs(o[i].y) + Math.abs(v[i].x) + Math.abs(v[i].y);
    }
    render();
    if (energy > 0.08) {
      raf.current = requestAnimationFrame(tick);
    } else {
      for (let i = 0; i < N; i++) {
        o[i] = { x: 0, y: 0 };
        v[i] = { x: 0, y: 0 };
      }
      render();
      raf.current = 0;
    }
  }, [render]);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const toSvg = (e: ReactPointerEvent<SVGPathElement>): V => {
    const rect = svgRef.current!.getBoundingClientRect();
    return { x: ((e.clientX - rect.left) / rect.width) * W, y: ((e.clientY - rect.top) / rect.height) * H };
  };

  const moveTo = (p: V) => {
    const i0 = dragIdx.current;
    if (i0 === null) return;
    let tx = p.x - (X0 + i0 * SPACING);
    let ty = p.y - REST_Y;
    const m = Math.hypot(tx, ty);
    if (m > MAX_PULL) {
      tx = (tx / m) * MAX_PULL;
      ty = (ty / m) * MAX_PULL;
    }
    const o = off.current;
    for (let i = 0; i < N; i++) {
      const f = Math.max(0, 1 - Math.abs(i - i0) / FALLOFF);
      const ease = f * f * (3 - 2 * f);
      o[i] = { x: tx * ease, y: ty * ease };
    }
    o[0] = { x: 0, y: 0 };
    o[N - 1] = { x: 0, y: 0 };
    render();
  };

  const onPointerDown = (e: ReactPointerEvent<SVGPathElement>) => {
    const p = toSvg(e);
    let best = 0;
    let bd = Infinity;
    for (let i = 0; i < N; i++) {
      const d = Math.abs(X0 + i * SPACING - p.x);
      if (d < bd) {
        bd = d;
        best = i;
      }
    }
    dragIdx.current = best;
    e.currentTarget.setPointerCapture(e.pointerId);
    if (raf.current) {
      cancelAnimationFrame(raf.current);
      raf.current = 0;
    }
    moveTo(p);
  };

  const onPointerMove = (e: ReactPointerEvent<SVGPathElement>) => {
    if (dragIdx.current !== null) moveTo(toSvg(e));
  };

  const endDrag = () => {
    if (dragIdx.current === null) return;
    dragIdx.current = null;
    if (!raf.current) raf.current = requestAnimationFrame(tick);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 top-24 z-40" data-testid="golden-vine">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="block w-full select-none"
        role="img"
        aria-label="Golden money-plant garland — pull it and it springs back"
      >
        <defs>
          <linearGradient id="vineStem" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#c8860f" />
            <stop offset="0.5" stopColor="#f6cf6b" />
            <stop offset="1" stopColor="#c8860f" />
          </linearGradient>
          <linearGradient id="vineLeaf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6cf6b" />
            <stop offset="1" stopColor="#d69f2a" />
          </linearGradient>
        </defs>

        <path d="M60 26 C 38 32, 24 16, 34 4" fill="none" stroke="#c8860f" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M1540 26 C 1562 32, 1576 16, 1566 4" fill="none" stroke="#c8860f" strokeWidth="2.5" strokeLinecap="round" />

        <path ref={stemRef} d={REST_D} fill="none" stroke="url(#vineStem)" strokeWidth="4" strokeLinecap="round" />

        {NODES.map((n, j) => (
          <g
            key={j}
            ref={(el) => {
              nodeRefs.current[j] = el;
            }}
            transform={nodeTransform(n, { x: 0, y: 0 })}
          >
            {n.type === "leaf" ? (
              <>
                <path
                  d="M0 0 C -14 -6 -20 -20 -12 -30 C -6 -37 0 -35 0 -26 C 0 -35 6 -37 12 -30 C 20 -20 14 -6 0 0 Z"
                  fill="url(#vineLeaf)"
                  stroke="#8a5a0a"
                  strokeWidth="1.2"
                />
                <path d="M0 -2 L0 -26" stroke="#8a5a0a" strokeWidth="1" strokeOpacity="0.6" />
              </>
            ) : (
              <>
                {[0, 60, 120, 180, 240, 300].map((a) => (
                  <ellipse key={a} cx="0" cy="-9" rx="4.5" ry="9" transform={`rotate(${a})`} fill="#d9489b" stroke="#9e2f5f" strokeWidth="0.8" />
                ))}
                <circle r="4" fill="#f6cf6b" stroke="#8a5a0a" strokeWidth="1" />
              </>
            )}
          </g>
        ))}

        <path
          ref={hitRef}
          d={REST_D}
          fill="none"
          stroke="transparent"
          strokeWidth="46"
          pointerEvents="stroke"
          className="cursor-grab touch-none active:cursor-grabbing"
          data-testid="golden-vine-hit"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        />
      </svg>
    </div>
  );
}
