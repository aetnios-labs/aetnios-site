import { Github, Linkedin, Twitter } from 'lucide-react';

const socials = [
  { icon: Twitter, href: 'https://x.com', label: 'Twitter / X' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} <span className="text-neon-green">Aetnios</span>
        </p>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted-foreground hover:text-neon-green hover:drop-shadow-[0_0_8px_hsl(142_71%_45%/0.5)] transition-all duration-300"
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
