import type { CSSProperties } from 'react';
import { CONTENT } from '@/content';

const WorkSection = () => {
  const C = CONTENT.work;
  return (
    <section className="section section-alt" id="work">
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
              <div>
                <p className="cap-body">{it.body}</p>
                <p className="work-links">
                  <a href={it.demo} target="_blank" rel="noopener noreferrer">Live demo</a>
                  <a href={it.source} target="_blank" rel="noopener noreferrer">Source</a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
