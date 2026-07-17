import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WorkSection from '@/components/WorkSection';
import ApproachSection from '@/components/ApproachSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ROOT_STYLE } from '@/lib/theme';

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
}

const Index = () => {
  // Scroll-reveal - manual rAF tween (performance.now), not the CSS animation
  // timeline (which can be frozen in some embed/preview contexts). Safety net
  // guarantees nothing stays hidden.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { els.forEach((el) => { el.classList.add('in'); el.style.opacity = '1'; el.style.transform = 'none'; }); return; }
    const started = new WeakSet<HTMLElement>();
    const rafs: number[] = [];
    const show = (el: HTMLElement) => { el.style.opacity = '1'; el.style.transform = 'none'; el.classList.add('in'); };
    const tween = (el: HTMLElement, delay: number) => {
      started.add(el);
      const dur = 640, dist = 22, t0 = performance.now() + delay;
      const step = (now: number) => {
        const p = Math.max(0, Math.min(1, (now - t0) / dur));
        const e = 1 - Math.pow(1 - p, 3); // easeOutCubic
        el.style.opacity = String(e);
        el.style.transform = `translateY(${((1 - e) * dist).toFixed(2)}px)`;
        if (p < 1) rafs.push(requestAnimationFrame(step)); else show(el);
      };
      rafs.push(requestAnimationFrame(step));
    };
    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (const el of els) {
        if (started.has(el) || el.classList.contains('in')) continue;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) {
          const d = parseFloat(getComputedStyle(el).getPropertyValue('--d')) || 0;
          tween(el, d);
        }
      }
    };
    rafs.push(requestAnimationFrame(() => rafs.push(requestAnimationFrame(check))));
    const onScroll = () => check();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    const safety = setTimeout(() => els.forEach((el) => { if (!started.has(el)) show(el); }), 2600);
    return () => {
      rafs.forEach((id) => cancelAnimationFrame(id));
      clearTimeout(safety);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="root" style={ROOT_STYLE}>
      <a href="#capabilities" className="btn btn-primary"
        style={{ position: 'absolute', left: 16, top: 16, zIndex: 60, transform: 'translateY(-200%)' }}
        onFocus={(e) => { e.currentTarget.style.transform = 'none'; }}
        onBlur={(e) => { e.currentTarget.style.transform = 'translateY(-200%)'; }}>
        Skip to content
      </a>
      <Navbar onCta={() => scrollToId('contact')} />
      <main>
        <HeroSection
          onPrimary={() => scrollToId('contact')}
          onSecondary={() => scrollToId('capabilities')}
        />
        <ServicesSection />
        <WorkSection />
        <ApproachSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
