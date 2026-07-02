import type { CSSProperties } from 'react';
import { CONTENT } from '@/content';

const ApproachSection = () => {
  const C = CONTENT.approach;
  return (
    <section className="section" id="approach">
      <div className="shell">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">{C.eyebrow}</p>
          <h2 className="sec-title">{C.title}</h2>
        </div>
        <div className="step-grid">
          {C.steps.map((s, i) => (
            <div className="step" key={s.n} data-reveal style={{ '--d': `${i * 90}ms` } as CSSProperties}>
              <span className="step-n">{s.n}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
