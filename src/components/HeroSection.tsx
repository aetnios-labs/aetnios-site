import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section aria-label="Introduction" className="relative min-h-screen flex items-end pb-24 md:pb-40 overflow-hidden noise-bg">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Accent line — draws across */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease }}
          className="h-[3px] bg-primary origin-left mb-8 md:mb-12"
        />

        {/* Title — clip reveal */}
        <div className="overflow-hidden mb-6 md:mb-10">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="font-mono text-[clamp(3rem,13vw,12rem)] font-extrabold leading-[0.85] tracking-tighter text-foreground"
          >
            AETNIOS
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="max-w-xl"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed mb-8 md:mb-12">
            Full-stack engineering, blockchain, AI/ML, and data analytics — shipping fast, building to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="btn-primary px-6 py-3 text-sm sm:px-10 sm:py-4 sm:text-base text-center">
              What I Build
            </a>
            <a href="#contact" className="btn-outline px-6 py-3 text-sm sm:px-10 sm:py-4 sm:text-base text-center">
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
