import { CONTENT } from '@/content';
import { LogoMark } from '@/components/brand';

const Navbar = ({ onCta }: { onCta: () => void }) => {
  const C = CONTENT;
  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <a className="brand" href="#top">
          <LogoMark size={42} />
          <span className="brand-word">{C.brand}<span className="brand-suf">{C.brandSuffix}</span></span>
        </a>
        <div className="nav-links">
          {C.nav.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <button className="btn btn-primary nav-cta" onClick={onCta}>Start a project</button>
      </div>
    </nav>
  );
};

export default Navbar;
