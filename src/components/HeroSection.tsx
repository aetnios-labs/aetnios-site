import { useEffect, useRef, type CSSProperties } from 'react';
import { CONTENT } from '@/content';
import { runHeroGraph, type HeroAnim } from '@/lib/heroGraph';

type Props = {
  onPrimary: () => void;
  onSecondary: () => void;
};

// Sweep is the chosen default; ?anim=graph|contour|none still overrides for tuning.
const ANIM = (new URLSearchParams(window.location.search).get('anim') ?? 'sweep') as HeroAnim | 'none';

const HeroSection = ({ onPrimary, onSecondary }: Props) => {
  const C = CONTENT.hero;
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!ref.current || ANIM === 'none') return;
    return runHeroGraph(ref.current, ANIM);
  }, []);
  return (
    <header className="hero" id="top">
      <canvas ref={ref} className="hero-canvas" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />
      <div className="shell hero-inner">
        <p className="eyebrow" data-reveal style={{ '--d': '0ms' } as CSSProperties}>{C.eyebrow}</p>
        <h1 className="hero-title" data-reveal style={{ '--d': '80ms' } as CSSProperties}>
          {C.title[0]}<br />{C.title[1]}<span className="hero-period">.</span>
        </h1>
        <p className="hero-sub" data-reveal style={{ '--d': '170ms' } as CSSProperties}>{C.sub}</p>
        <div className="hero-actions" data-reveal style={{ '--d': '250ms' } as CSSProperties}>
          <button className="btn btn-primary btn-lg" onClick={onPrimary}>{C.primary}</button>
          <button className="btn btn-ghost btn-lg" onClick={onSecondary}>{C.secondary}</button>
        </div>
        <ul className="hero-trust" data-reveal style={{ '--d': '330ms' } as CSSProperties}>
          {C.trust.map((t) => <li key={t}><span className="dot" />{t}</li>)}
        </ul>
      </div>
    </header>
  );
};

export default HeroSection;
