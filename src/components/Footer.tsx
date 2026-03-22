import { Github, Linkedin } from 'lucide-react';

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ian-fru/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/kingl0w', label: 'GitHub' },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-body">
          &copy; {new Date().getFullYear()} Aetnios
        </p>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-3 text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
