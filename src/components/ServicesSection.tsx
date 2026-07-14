import type { CSSProperties } from 'react';
import { CONTENT } from '@/content';

const ServicesSection = () => {
  const C = CONTENT.capabilities;
  return (
    <section className="section" id="capabilities">
      <div className="shell">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">{C.eyebrow}</p>
          <h2 className="sec-title">{C.title}</h2>
          <p className="sec-sub">{C.sub}</p>
        </div>
        <div className="cap-list">
          {C.items.map((it, i) => (
            <article className="cap-row" key={it.k} data-reveal style={{ '--d': `${i * 80}ms` } as CSSProperties}>
              <span className="cap-k">{it.k}</span>
              <div>
                <h3 className="cap-title">{it.title}</h3>
                <ul className="cap-tags">
                  {it.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
              <p className="cap-body">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
