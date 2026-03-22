import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Check, RotateCcw } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const isMobile = useIsMobile();
  const ease = [0.16, 1, 0.3, 1] as const;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New inquiry from ${form.name}${form.company ? ` at ${form.company}` : ''}`,
          from_name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error('Submit failed');

      setStatus('sent');
      setForm({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass = 'w-full bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-foreground text-sm font-body focus:outline-none focus:border-b-2 focus:border-primary transition-colors placeholder:text-muted-foreground/60';

  return (
    <section id="contact" className="relative pt-20 md:pt-36 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Full-width header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 12 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16 md:mb-24"
        >
          <p className="section-label">Contact</p>
          <h2 className="font-mono text-3xl md:text-6xl font-bold text-foreground leading-tight max-w-3xl">
            Tell me about your project.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20">
          {/* Left column — info */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05, ease }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <p className="text-xs font-heading font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">How it works</p>
              <p className="text-foreground font-body text-sm leading-relaxed">You send a brief, I reply within a day. If it's a fit, we scope the work together.</p>
            </div>
            <div>
              <p className="text-xs font-heading font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">Works best for</p>
              <p className="text-foreground font-body text-sm leading-relaxed">Founders and teams shipping MVPs, scaling systems, or building with blockchain and AI.</p>
            </div>
            <div>
              <p className="text-xs font-heading font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">Email directly</p>
              <a href="mailto:contact@aetnios.com" className="text-foreground hover:text-primary transition-colors font-body underline underline-offset-4 decoration-border hover:decoration-primary">
                contact@aetnios.com
              </a>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.form
            initial={{ opacity: 0, y: isMobile ? 16 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            onSubmit={handleSubmit}
            className="lg:col-span-8 lg:col-start-5 space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-heading font-medium uppercase tracking-wider text-muted-foreground mb-2">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-heading font-medium uppercase tracking-wider text-muted-foreground mb-2">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-company" className="block text-xs font-heading font-medium uppercase tracking-wider text-muted-foreground mb-2">
                Company <span className="normal-case tracking-normal text-muted-foreground/60">optional</span>
              </label>
              <input
                id="contact-company"
                type="text"
                maxLength={100}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className={inputClass}
                placeholder="Company name"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs font-heading font-medium uppercase tracking-wider text-muted-foreground mb-2">Message</label>
              <textarea
                id="contact-message"
                required
                maxLength={2000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="What are you building? Any timeline or budget constraints?"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="btn-primary flex items-center justify-center gap-2 px-12 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'idle' && <><span>Send</span><ArrowRight size={16} /></>}
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && <><Check size={16} /><span>Sent — I'll reply within a day</span></>}
                {status === 'error' && <><RotateCcw size={16} /><span>Couldn't send — try again</span></>}
              </button>
              <p className="text-xs text-muted-foreground font-body">No commitment — just a conversation.</p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
