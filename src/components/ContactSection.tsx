import { useState, type CSSProperties, type FormEvent } from 'react';
import { CONTENT } from '@/content';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

const ContactSection = () => {
  const C = CONTENT.contact;
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!WEB3FORMS_KEY) { setErrMsg('Form not configured (missing VITE_WEB3FORMS_KEY).'); setStatus('error'); return; }
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New inquiry from ${form.name}${form.company ? ` at ${form.company}` : ''}`,
          from_name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
        }),
      });
      // Web3Forms replies HTTP 200 even on rejection - the JSON `success` flag
      // is the real signal, so res.ok alone isn't enough.
      const data = await res.json().catch(() => ({ success: false, message: `HTTP ${res.status}` }));
      if (!data.success) throw new Error(data.message || 'Submission failed');
      setStatus('sent');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      setErrMsg(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="shell contact-grid">
        <div className="contact-lead" data-reveal>
          <p className="eyebrow">{C.eyebrow}</p>
          <h2 className="sec-title">{C.title}</h2>
          <p className="sec-sub">{C.sub}</p>
          <div className="contact-info">
            <a className="contact-email" href={`mailto:${C.email}`}>{C.email}</a>
            <p className="contact-note"><span className="dot" />{C.note}</p>
          </div>
        </div>
        <div className="contact-formwrap" data-reveal style={{ '--d': '120ms' } as CSSProperties}>
          {status === 'sent' ? (
            <div className="form-sent">
              <h3>Thanks, message received.</h3>
              <p>We'll get back to you within two business days.</p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input className="field" placeholder="Name" required maxLength={100}
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input className="field" type="email" placeholder="Email" required maxLength={255}
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <input className="field" placeholder="Organization" maxLength={100}
                value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              <textarea className="field" rows={4} placeholder="What are you trying to build?" required maxLength={2000}
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button className="btn btn-primary btn-lg form-submit" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'error' && (
                <p className="contact-note" style={{ margin: 0, color: 'var(--accent)' }}>
                  <span className="dot" />Couldn't send{errMsg ? ` (${errMsg})` : ''}. Try again or email {C.email}.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
