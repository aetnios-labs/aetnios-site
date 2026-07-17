// Hero background animations, switchable for comparison via ?anim=
//   graph   - knowledge graph that assembles itself, then breathes
//   contour - slow drifting topographic contour lines
//   sweep   - ordered dot grid with a passing highlight band
// All honor prefers-reduced-motion by rendering a static frame.

export type HeroAnim = 'graph' | 'contour' | 'sweep';

type Node = { x: number; y: number; r: number; accent: boolean; phase: number; appearAt: number };
type Edge = { a: number; b: number; startAt: number };

const NODE = '#8a7a66';
const ACCENT = '#b03136';
const EDGE_RGB = '107,93,78';
const EDGE_DUR = 500;
const STAGGER = 130;
const POP_DUR = 260;

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function fit(canvas: HTMLCanvasElement) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const rect = canvas.getBoundingClientRect();
  const w = Math.max(1, Math.floor(rect.width));
  const h = Math.max(1, Math.floor(rect.height));
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext('2d')!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w, h };
}

const easeOut = (p: number) => 1 - Math.pow(1 - p, 3);

/* ---- graph ---- */
function buildGraph(w: number, h: number) {
  const rand = mulberry32(7);
  // confined to the upper right, clear of text, buttons, and the trust rule
  const rx0 = w * 0.52, rx1 = w - 30, ry0 = 30, ry1 = h * 0.68;
  const rw = Math.max(1, rx1 - rx0), rh = Math.max(1, ry1 - ry0);
  const count = Math.max(10, Math.min(22, Math.round((rw * rh) / 22000)));
  const nodes: Node[] = [];
  for (let i = 0; i < count; i++) {
    let x = 0, y = 0;
    for (let tries = 0; tries < 20; tries++) {
      x = rx0 + rand() * rw;
      y = ry0 + rand() * rh;
      if (nodes.every((n) => Math.hypot(n.x - x, n.y - y) > Math.min(rw, rh) / 5)) break;
    }
    nodes.push({ x, y, r: 2 + rand() * 1.6, accent: i % 7 === 3, phase: rand() * Math.PI * 2, appearAt: Infinity });
  }
  const edges: Edge[] = [];
  for (let i = 1; i < nodes.length; i++) {
    const near = [...Array(i).keys()].sort(
      (p, q) => Math.hypot(nodes[p].x - nodes[i].x, nodes[p].y - nodes[i].y)
        - Math.hypot(nodes[q].x - nodes[i].x, nodes[q].y - nodes[i].y),
    );
    edges.push({ a: near[0], b: i, startAt: 0 });
    if (i % 4 === 0 && near.length > 1) edges.push({ a: near[1], b: i, startAt: 0 });
  }
  edges.forEach((e, k) => { e.startAt = 300 + k * STAGGER; });
  nodes[0].appearAt = 0;
  for (const e of edges) {
    nodes[e.b].appearAt = Math.min(nodes[e.b].appearAt, e.startAt + EDGE_DUR);
  }
  const settled = 300 + (edges.length - 1) * STAGGER + EDGE_DUR;
  return { nodes, edges, settled };
}

function graphDrawer(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const { nodes, edges, settled } = buildGraph(w, h);
  const draw = (t: number) => {
    ctx.clearRect(0, 0, w, h);
    const idle = Math.max(0, t - settled) / 1000;
    const px = (n: Node) => n.x + Math.sin(idle * 0.6 + n.phase) * 2.4;
    const py = (n: Node) => n.y + Math.cos(idle * 0.5 + n.phase * 1.3) * 2.4;
    for (const e of edges) {
      const p = Math.max(0, Math.min(1, (t - e.startAt) / EDGE_DUR));
      if (p === 0) continue;
      const a = nodes[e.a], b = nodes[e.b];
      const k = easeOut(p);
      ctx.strokeStyle = `rgba(${EDGE_RGB},${(0.38 - 0.1 * k).toFixed(3)})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(px(a), py(a));
      ctx.lineTo(px(a) + (px(b) - px(a)) * k, py(a) + (py(b) - py(a)) * k);
      ctx.stroke();
    }
    for (const n of nodes) {
      const p = Math.max(0, Math.min(1, (t - n.appearAt) / POP_DUR));
      if (p === 0) continue;
      const pop = easeOut(p);
      ctx.beginPath();
      ctx.arc(px(n), py(n), (n.accent ? n.r + 1.8 : n.r) * pop, 0, Math.PI * 2);
      ctx.fillStyle = n.accent ? ACCENT : NODE;
      ctx.globalAlpha = (n.accent ? 0.9 : 0.6) * pop;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  };
  return { draw, staticT: settled };
}

/* ---- contour ---- */
function contourDrawer(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const spacing = 44;
  const rows = Math.ceil(h / spacing) + 2;
  const draw = (t: number) => {
    ctx.clearRect(0, 0, w, h);
    const drift = t * 0.00012;
    for (let i = 0; i < rows; i++) {
      const base = i * spacing - spacing / 2;
      ctx.strokeStyle = `rgba(${EDGE_RGB},0.16)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 8) {
        const y = base
          + 11 * Math.sin(x * 0.006 + i * 0.9 + drift)
          + 6 * Math.sin(x * 0.0023 - i * 0.6 - drift * 1.7);
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  };
  return { draw, staticT: 0 };
}

/* ---- sweep ---- */
function sweepDrawer(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const gap = 34;
  const cols = Math.ceil(w / gap) + 1, rows = Math.ceil(h / gap) + 1;
  const span = w + h * 0.35; // sweep axis is diagonal
  const period = span + 360;
  const draw = (t: number) => {
    ctx.clearRect(0, 0, w, h);
    // two bands, half a period apart, so one is always crossing the screen
    const s1 = ((t * 0.11) % period) - 180;
    const s2 = ((t * 0.11 + period / 2) % period) - 180;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * gap, y = j * gap;
        const p = x + y * 0.35;
        const d = Math.min(Math.abs(p - s1), Math.abs(p - s2));
        const k = d < 170 ? 1 - d / 170 : 0;
        ctx.beginPath();
        ctx.arc(x, y, 1.2 + k * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = k > 0.75 ? ACCENT : NODE;
        ctx.globalAlpha = 0.26 + k * 0.62;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
  };
  return { draw, staticT: 1400 };
}

function start(canvas: HTMLCanvasElement, mode: HeroAnim) {
  const { ctx, w, h } = fit(canvas);
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const { draw, staticT } = mode === 'contour' ? contourDrawer(ctx, w, h)
    : mode === 'sweep' ? sweepDrawer(ctx, w, h)
    : graphDrawer(ctx, w, h);

  if (reduce) { draw(staticT); return () => {}; }

  let raf = 0;
  const t0 = performance.now();
  const step = (now: number) => {
    draw(now - t0);
    raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
  return () => cancelAnimationFrame(raf);
}

// runHeroGraph(canvas, mode) -> stop(). Re-fits and restarts on debounced resize.
export function runHeroGraph(canvas: HTMLCanvasElement, mode: HeroAnim = 'graph') {
  let stop = start(canvas, mode);
  let timer: ReturnType<typeof setTimeout>;
  const onResize = () => {
    clearTimeout(timer);
    timer = setTimeout(() => { stop(); stop = start(canvas, mode); }, 200);
  };
  window.addEventListener('resize', onResize);
  return () => { stop(); window.removeEventListener('resize', onResize); clearTimeout(timer); };
}
