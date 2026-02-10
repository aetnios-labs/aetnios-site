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
          className="font-mono text-7xl sm:text-8xl md:text-9xl font-extrabold leading-none mb-4 text-gradient-neon tracking-tight"
        >
          AETNIOS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-mono text-xl sm:text-2xl md:text-3xl font-medium text-foreground/80 mb-6 tracking-wide"
        >
          Engineering the Future of Digital
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
        >
          Full-stack engineering, blockchain, AI/ML, and data analytics — built for the teams shaping tomorrow.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#services" className="btn-neon-green">
            See Our Work
          </a>
          <a href="#contact" className="btn-neon-purple">
            Contact Us
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
