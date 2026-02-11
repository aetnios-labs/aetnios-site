import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';
import MatrixRain from './MatrixRain';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:ian@aetnios.com?subject=Inquiry from ${encodeURIComponent(form.name)}${form.company ? ` at ${encodeURIComponent(form.company)}` : ''}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <MatrixRain />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-neon-green mb-4">Get In Touch</p>
          <h2 className="font-mono text-4xl md:text-6xl font-bold text-foreground" style={{ textShadow: '0 0 30px hsl(142 71% 45% / 0.15)' }}>
            Let's Build Together
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-8 md:p-10 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green/30 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green/30 transition-colors"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Company</label>
            <input
              type="text"
              maxLength={100}
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/30 transition-colors"
              placeholder="Your company (optional)"
            />
          </div>
          <div>
            <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Message</label>
            <textarea
              required
              maxLength={2000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body resize-none focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green/30 transition-colors"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="btn-neon-filled w-full flex items-center justify-center gap-2"
          >
            {submitted ? 'Opening Mail Client...' : 'Send Message'}
            <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
