const techs = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Solidity', 'Rust',
  'AWS', 'GCP', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB',
  'TensorFlow', 'PyTorch', 'GraphQL', 'Redis', 'Terraform', 'Go',
];

const TechStackSection = () => {
  const doubled = [...techs, ...techs];

  return (
    <section id="tech" className="relative py-12 md:py-20 overflow-hidden">
      {/* Circuit board pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle, hsl(142 71% 45% / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(142 71% 45% / 0.15) 1px, transparent 1px),
            linear-gradient(hsl(271 91% 65% / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px, 40px 40px, 40px 40px',
        }}
      />

      <div className="relative z-10">
        <p className="font-mono text-sm tracking-[0.3em] uppercase text-neon-green text-center mb-10">
          Tech Stack
        </p>

        <div className="relative">
          <div className="flex animate-marquee-mobile md:animate-marquee whitespace-nowrap">
            {doubled.map((tech, i) => (
              <span
                key={i}
                className="mx-4 md:mx-6 font-mono text-base md:text-2xl font-bold text-muted-foreground hover:text-neon-green transition-colors duration-300 cursor-default select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
