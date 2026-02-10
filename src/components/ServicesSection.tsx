import { motion } from 'framer-motion';
import { Code2, Blocks, Brain, BarChart3, Workflow } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Engineering',
    description: 'End-to-end web and mobile applications built with modern architectures, scalable infrastructure, and clean code.',
  },
  {
    icon: Blocks,
    title: 'Blockchain & DeFi',
    description: 'Smart contracts, DeFi protocols, tokenomics design, and Web3 integration — from concept to mainnet.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Custom ML models, NLP pipelines, computer vision, and AI-powered automation tailored to your domain.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Data pipelines, real-time dashboards, predictive analytics, and business intelligence at scale.',
  },
  {
    icon: Workflow,
    title: 'Process Management',
    description: 'Workflow optimization, DevOps pipelines, agile transformation, and operational efficiency consulting.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(142 71% 45% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(271 91% 65% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'pulse-grid 4s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-neon-purple mb-4">What We Do</p>
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-gradient-neon">
            Our Services
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="spinning-gradient-border glass-card glass-card-hover rounded-xl p-8 group cursor-default transition-all duration-300"
            >
              <service.icon className="w-10 h-10 text-neon-green mb-5 group-hover:drop-shadow-[0_0_12px_hsl(142_71%_45%/0.6)] transition-all duration-300" />
              <h3 className="font-mono text-lg font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
