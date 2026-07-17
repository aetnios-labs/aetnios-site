import type { CSSProperties } from 'react';

// Editorial light theme - warm paper, hairline rules, brand red kept from the
// logo mark. Neutrals are tinted toward the brand's warm hue on purpose.
export const ACCENT = '#b03136';

export const ROOT_STYLE = {
  '--bg': '#f9f4ea', '--bg-alt': '#f1e9d9', '--surface': '#fffdf7',
  '--ink': '#33281f', '--ink-soft': '#6b5d4e', '--ink-faint': '#9c8d7b',
  '--line': '#e4d9c5', '--line-strong': '#cdbda3',
  '--hero-bg': 'linear-gradient(180deg, #fcf8f0 0%, #f4edde 100%)',
  '--footer-bg': '#2a211a', '--footer-ink': '#ab9c8a', '--footer-head': '#f1e9d9',
  '--accent': ACCENT, '--accent-deep': '#8e2226', '--accent-ink': '#fffdf7',
  '--font-display': "'Roboto', 'Helvetica Neue', Arial, sans-serif",
  '--font-body': "'Roboto', 'Helvetica Neue', Arial, sans-serif",
  '--font-mono': "'IBM Plex Mono', ui-monospace, monospace",
  '--section-pad': 'clamp(72px, 11vw, 128px)',
} as CSSProperties;
