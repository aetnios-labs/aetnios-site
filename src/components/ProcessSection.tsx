import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, Rocket } from 'lucide-react';

const phases = [
  { icon: Search, title: 'Discovery', description: 'Deep-dive into your domain, constraints, and goals to define the right problem.' },
  { icon: Lightbulb, title: 'Architecture', description: 'Design scalable, future-proof system architecture and choose the right tools.' },
  { icon: Code, title: 'Build & Iterate', description: 'Rapid development cycles with continuous feedback, testing, and refinement.' },
  { icon: Rocket, title: 'Deploy & Scale', description: 'Production-grade deployment, monitoring, optimization, and ongoing support.' },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-neon-green mb-4">How We Work</p>
          <h2 className="font-mono text-4xl md:text-6xl font-bold text-foreground" style={{ textShadow: '0 0 30px hsl(271 91% 65% / 0.15)' }}>
            Our Process
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-green via-neon-purple to-transparent" />

          {phases.map((phase, idx) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative flex items-start mb-16 last:mb-0 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Node */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-neon-green bg-background glow-green z-10 mt-1" />

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[45%] ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} ${idx % 2 === 0 ? '' : 'md:ml-auto'}`}>
                <div className="glass-card rounded-xl p-6 group hover:border-neon-green/30 transition-all duration-300">
                  <phase.icon className="w-8 h-8 text-neon-purple mb-4 group-hover:drop-shadow-[0_0_10px_hsl(271_91%_65%/0.5)] transition-all duration-300" />
                  <h3 className="font-mono text-xl font-bold text-foreground mb-2">
                    <span className="text-neon-green mr-2">0{idx + 1}.</span>
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground text-base font-body leading-relaxed">{phase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
