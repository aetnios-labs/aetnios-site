import type { IconName } from '@/content';

// Aetnios mark — strokes use currentColor so it adapts to the theme; the
// center node keeps the brand red radial gradient.
export function LogoMark({ size = 34 }: { size?: number }) {
  const gid = 'aetdot';
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 512 512" fill="none" role="img" aria-label="Aetnios mark">
      <defs>
        <radialGradient id={gid} cx="40%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#E7433B" />
          <stop offset="55%" stopColor="#CB2329" />
          <stop offset="100%" stopColor="#9E1418" />
        </radialGradient>
      </defs>
      <g fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 297.58 60.37 A 200 200 0 0 1 297.58 451.63" />
        <path d="M 214.42 451.63 A 200 200 0 0 1 214.42 60.37" />
        <line x1="245.59" y1="152.83" x2="206.35" y2="234.37" />
        <line x1="266.41" y1="152.83" x2="305.65" y2="234.37" />
        <line x1="186.27" y1="277.97" x2="159.59" y2="338.55" />
        <line x1="325.73" y1="277.97" x2="352.41" y2="338.55" />
        <line x1="216.25" y1="268.78" x2="341.77" y2="347.74" />
        <line x1="295.75" y1="268.78" x2="170.23" y2="347.74" />
        <circle cx="256" cy="131.20" r="22" strokeWidth="13" />
        <circle cx="195.94" cy="256" r="22" strokeWidth="13" />
        <circle cx="316.06" cy="256" r="22" strokeWidth="13" />
        <circle cx="149.92" cy="360.52" r="22" strokeWidth="13" />
        <circle cx="362.08" cy="360.52" r="22" strokeWidth="13" />
      </g>
      <circle cx="256" cy="256" r="22" fill={`url(#${gid})`} />
    </svg>
  );
}

// Simple geometric capability icons.
export function Icon({ name }: { name: IconName }) {
  const s = { width: 26, height: 26, fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'stack':
      return (<svg viewBox="0 0 24 24" {...s}><path d="M12 3 21 7.5 12 12 3 7.5 12 3Z" /><path d="M3 12 12 16.5 21 12" /><path d="M3 16.5 12 21 21 16.5" /></svg>);
    case 'graph':
      return (<svg viewBox="0 0 24 24" {...s}><circle cx="5" cy="6" r="2" /><circle cx="19" cy="8" r="2" /><circle cx="12" cy="18" r="2" /><path d="M6.7 7 17.3 7.6M6.5 7.6 11 16.2M17.5 9.4 13 16.6" /></svg>);
    case 'ai':
      return (<svg viewBox="0 0 24 24" {...s}><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2.5v3M15 2.5v3M9 18.5v3M15 18.5v3M2.5 9h3M2.5 15h3M18.5 9h3M18.5 15h3" /><circle cx="12" cy="12" r="2.4" /></svg>);
    case 'shield':
      return (<svg viewBox="0 0 24 24" {...s}><path d="M12 3 19 6v5c0 4.4-3 7.7-7 9-4-1.3-7-4.6-7-9V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>);
  }
}
