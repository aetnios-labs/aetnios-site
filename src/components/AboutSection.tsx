import type { CSSProperties } from 'react';
import { CONTENT } from '@/content';

const AboutSection = () => {
  const C = CONTENT.about;
  return (
    <section className="section section-alt" id="about">
      <div className="shell about-grid">
        <div className="about-lead" data-reveal>
          <p className="eyebrow">{C.eyebrow}</p>
          <h2 className="sec-title">{C.title}</h2>
          {C.body.map((p, i) => <p className="about-p" key={i}>{p}</p>)}
        </div>
        <div className="about-values">
          {C.values.map((v, i) => (
            <div className="value" key={v.title} data-reveal style={{ '--d': `${i * 90}ms` } as CSSProperties}>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-body">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
