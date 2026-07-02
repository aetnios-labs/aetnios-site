import { CONTENT } from '@/content';
import { LogoMark } from '@/components/brand';

const Footer = () => {
  const C = CONTENT;
  return (
    <footer className="footer" role="contentinfo">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <LogoMark size={36} />
            <span className="brand-word">{C.brand}<span className="brand-suf">{C.brandSuffix}</span></span>
          </a>
          <p className="footer-blurb">{C.footer.blurb}</p>
        </div>
        {C.footer.cols.map((col) => (
          <div className="footer-col" key={col.head}>
            <h4>{col.head}</h4>
            <ul>{col.links.map((l) => <li key={l}><a href="#capabilities">{l}</a></li>)}</ul>
          </div>
        ))}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href={`mailto:${C.contact.email}`}>{C.contact.email}</a></li>
            <li><a href="#contact">Start a project</a></li>
          </ul>
        </div>
      </div>
      <div className="shell footer-base">
        <span>{C.footer.copyright}</span>
        <span className="footer-loc">Remote · United States</span>
      </div>
    </footer>
  );
};

export default Footer;
