import type { CSSProperties } from 'react';

// Shipped design = "civic" direction + "signal" (red) accent from the Claude
// Design source. Only this one config ships, so it's inlined rather than
// carrying the full direction/accent switcher.
export const ACCENT = '#b32024';
export const ACCENT_INK = '#ffffff'; // civic bg is dark; red accent needs light ink
export const MOTION = true;

export const HERO_COLORS = { dot: '#7f93b3', line: '#33507e', accent: ACCENT, ink: '#c5d2e6' };

export const ROOT_STYLE = {
  '--bg': '#0f1c30', '--bg-alt': '#13243c', '--surface': '#172b46',
  '--ink': '#eef3fb', '--ink-soft': '#a7b6cd', '--ink-faint': '#6b7d99',
  '--line': '#26385a', '--line-strong': '#33507e',
  '--hero-bg': 'linear-gradient(180deg,#13243c 0%,#0d1828 100%)',
  '--card': '#15273f', '--card-ink': '#eef3fb', '--card-soft': '#a7b6cd',
  '--footer-bg': '#0a1322', '--footer-ink': '#8294b0', '--footer-head': '#eef3fb',
  '--radius': '6px', '--shadow': '0 16px 46px -22px rgba(0,0,0,0.6)',
  '--accent': ACCENT, '--accent-ink': ACCENT_INK,
  '--font-display': "'Roboto', 'Helvetica Neue', Arial, sans-serif",
  '--font-body': "'Roboto', 'Helvetica Neue', Arial, sans-serif",
  '--font-mono': "'IBM Plex Mono', ui-monospace, monospace",
  '--section-pad': '96px',
} as CSSProperties;
