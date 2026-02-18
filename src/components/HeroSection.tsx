import { motion } from 'framer-motion';
import ParticleNetwork from './ParticleNetwork';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleNetwork />
      {/* Scanline overlay */}
      <div className="scanline-overlay absolute inset-0 z-[1]" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-5xl sm:text-7xl md:text-[12rem] lg:text-[14rem] font-extrabold leading-[0.85] mb-6 text-foreground tracking-tighter"
          style={{ textShadow: '0 0 40px hsl(142 71% 45% / 0.15), 0 0 80px hsl(271 91% 65% / 0.1)' }}
        >
          AETNIOS
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-24 h-[2px] mx-auto mb-6"
          style={{ background: 'var(--gradient-neon)' }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-mono text-base sm:text-2xl md:text-3xl font-light text-foreground/70 mb-6 tracking-widest uppercase"
        >
          Engineering the Future of Digital
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground text-base md:text-2xl max-w-2xl mx-auto mb-10 font-body"
        >
          Full-stack engineering, blockchain, AI/ML, and data analytics — shipping fast, building to last.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a href="#services" className="btn-neon-filled px-6 py-3 text-sm sm:px-10 sm:py-4 sm:text-lg font-bold tracking-widest">
            What I Build
          </a>
          <a href="#contact" className="btn-neon-green px-6 py-3 text-sm sm:px-10 sm:py-4 sm:text-lg font-bold tracking-widest">
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-9 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-neon-green" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
