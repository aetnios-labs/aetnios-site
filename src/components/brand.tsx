// Aetnios brand - interlock symbol plus red-O wordmark.
// The interlock's leading square uses currentColor so it adapts to light and
// dark surfaces; the woven link stays brand red.
export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 64 64" fill="none" role="img" aria-label="Aetnios mark">
      <rect x="25" y="27" width="24" height="24" stroke="#b03136" strokeWidth="5" />
      <rect x="15" y="13" width="24" height="24" stroke="currentColor" strokeWidth="5" />
      <path d="M33 27 H45" stroke="#b03136" strokeWidth="5" />
    </svg>
  );
}

export function BrandWord() {
  return (
    <span className="brand-word">
      Aetni<span className="brand-o">o</span>s<span className="brand-suf">Labs</span>
    </span>
  );
}
