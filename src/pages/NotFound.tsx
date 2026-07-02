import { ROOT_STYLE } from '@/lib/theme';

const NotFound = () => {
  return (
    <div className="root" data-mode="dark" style={{ ...ROOT_STYLE, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '0 24px' }}>
        <h1 className="hero-title" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(72px,14vw,140px)', margin: '0 0 12px', color: 'var(--accent)' }}>404</h1>
        <p className="hero-sub" style={{ margin: '0 auto 32px' }}>This page doesn't exist.</p>
        <a href="/" className="btn btn-primary btn-lg" style={{ display: 'inline-block' }}>Back to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
