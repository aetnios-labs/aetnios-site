// Canvas hero background — the "grid + sweep" runner from the Aetnios Labs
// "civic" direction. Only this runner ships (the design's other three
// directions aren't used), so the multi-runner dispatch is dropped.
// ponytail: single hero; add the other runners here if a direction switch returns.

export type HeroColors = { dot: string; line: string; accent: string; ink: string };

function dpiFit(canvas: HTMLCanvasElement) {
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

function hexA(hex: string, a: number) {
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

function grid(canvas: HTMLCanvasElement, colors: HeroColors, motion: boolean) {
  const { ctx, w, h } = dpiFit(canvas);
  const gap = 34;
  const cols = Math.ceil(w / gap) + 1, rows = Math.ceil(h / gap) + 1;
  let raf = 0, t = 0;
  function frame() {
    t += motion ? 0.012 : 0;
    ctx.clearRect(0, 0, w, h);
    const sweep = ((t * 60) % (w + 240)) - 120;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * gap, y = j * gap;
        const dist = Math.abs(x - sweep);
        const lit = dist < 90;
        const a = lit ? 0.9 * (1 - dist / 90) : 0.18;
        ctx.beginPath(); ctx.arc(x, y, lit ? 1.8 : 1.1, 0, Math.PI * 2);
        ctx.fillStyle = lit ? hexA(colors.accent, Math.max(0.2, a)) : hexA(colors.dot, 0.3);
        ctx.fill();
        if (lit && j % 2 === 0 && i < cols - 1) {
          ctx.strokeStyle = hexA(colors.accent, a * 0.5);
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + gap, y); ctx.stroke();
        }
      }
    }
    if (motion) raf = requestAnimationFrame(frame);
  }
  frame();
  return () => cancelAnimationFrame(raf);
}

// runHero(canvas, colors, opts) -> stop(). Handles debounced resize re-fit.
export function runHero(
  canvas: HTMLCanvasElement,
  colors: HeroColors,
  opts?: { motion?: boolean },
) {
  const motion = !opts || opts.motion !== false;
  let stop = grid(canvas, colors, motion);
  let resizeTimer: ReturnType<typeof setTimeout>;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { stop && stop(); stop = grid(canvas, colors, motion); }, 200);
  }
  window.addEventListener('resize', onResize);
  return () => { stop && stop(); window.removeEventListener('resize', onResize); clearTimeout(resizeTimer); };
}
