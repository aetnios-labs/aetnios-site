import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutSection = () => {
  const isMobile = useIsMobile();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="about" className="relative py-28 md:py-56 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 12 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
          >
            <p className="section-label">About</p>
            <h2 className="font-mono text-3xl md:text-6xl font-bold text-foreground leading-tight">
              Building what's{' '}
              <span className="text-primary">next</span> — right now.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: isMobile ? 12 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="lg:col-span-6 lg:col-start-7 space-y-8"
          >
            <p className="text-muted-foreground text-base md:text-xl leading-relaxed font-body">
              Aetnios is a software studio built for speed and substance. I work directly with founders, startups, and teams who need senior-level engineering without the overhead of an agency. No layers, no hand-offs — just clean architecture and shipped products.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-body font-light">
              Whether you're launching an MVP, scaling infrastructure, or exploring emerging tech like blockchain and AI — I bring the technical depth to get it done right and the pragmatism to get it done fast.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
