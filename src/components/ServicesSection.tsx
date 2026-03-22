import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const services = [
  {
    title: 'Full-Stack Engineering',
    detail: 'Web & mobile, concept to production',
  },
  {
    title: 'Blockchain & DeFi',
    detail: 'Smart contracts to mainnet',
  },
  {
    title: 'AI & Machine Learning',
    detail: 'Custom models, pipelines, automation',
  },
  {
    title: 'Data Analytics',
    detail: 'Pipelines, dashboards, real-time BI',
  },
  {
    title: 'DevOps & Process',
    detail: 'CI/CD, infrastructure, workflow optimization',
  },
];

const techs = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Solidity', 'Rust',
  'AWS', 'GCP', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB',
  'TensorFlow', 'PyTorch', 'GraphQL', 'Redis', 'Terraform', 'Go',
];

const ServicesSection = () => {
  const isMobile = useIsMobile();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="services" className="relative pt-24 md:pt-44 pb-24 md:pb-44">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 12 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-mono text-3xl md:text-6xl font-bold text-foreground">
            Services
          </h2>
        </motion.div>

        <div className="mb-16 md:mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: isMobile ? 0 : -20, y: isMobile ? 10 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease }}
              className="group border-t border-border"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-12 cursor-default py-6 md:py-8 border-l-[3px] border-l-transparent group-hover:border-l-primary pl-0 group-hover:pl-5 transition-all duration-200">
                <h3 className="font-mono text-lg md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base font-body font-light shrink-0">
                  {service.detail}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-xs font-heading font-medium uppercase tracking-[0.2em] text-muted-foreground mb-5">
            Technologies
          </p>
          <p className="text-sm md:text-base font-body text-muted-foreground font-light leading-loose">
            {techs.join(' · ')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
