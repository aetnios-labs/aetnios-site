import { useEffect, useState } from 'react';
import { CONTENT } from '@/content';
import { LogoMark, BrandWord } from '@/components/brand';

const Navbar = ({ onCta }: { onCta: () => void }) => {
  const C = CONTENT;
  const [open, setOpen] = useState(false);

  // Close the mobile menu when the viewport grows past the hamburger breakpoint
  // or Escape is pressed.
  useEffect(() => {
    if (!open) return;
    const onResize = () => { if (window.innerWidth > 860) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('resize', onResize); window.removeEventListener('keydown', onKey); };
  }, [open]);

  return (
    <nav className={'nav' + (open ? ' is-open' : '')}>
      <div className="shell nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <LogoMark size={30} />
          <BrandWord />
        </a>
        <div className="nav-links">
          {C.nav.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <button className="btn btn-primary nav-cta" onClick={onCta}>Start a project</button>
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bars" aria-hidden="true"><i></i><i></i><i></i></span>
        </button>
      </div>
      <div className="nav-menu" hidden={!open}>
        {C.nav.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <button className="btn btn-primary nav-menu-cta" onClick={() => { setOpen(false); onCta(); }}>Start a project</button>
      </div>
    </nav>
  );
};

export default Navbar;
