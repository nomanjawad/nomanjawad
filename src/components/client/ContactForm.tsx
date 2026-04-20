'use client';
import { useRef, useState } from 'react';

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [note, setNote] = useState('Encrypted over TLS · Never shared.');
  const [noteColor, setNoteColor] = useState('var(--fg-dim)');
  const [label, setLabel] = useState('Send inquiry');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!fd.get('name') || !fd.get('email') || !fd.get('message')) {
      setNote('Fill in name, email, and message.');
      setNoteColor('var(--red)');
      return;
    }
    setSending(true);
    let dots = 0;
    const iv = setInterval(() => {
      dots = (dots + 1) % 4;
      setLabel('Sending' + '.'.repeat(dots));
    }, 200);
    setTimeout(() => {
      clearInterval(iv);
      setSent(true);
    }, 1100);
  };

  return (
    <form
      ref={formRef}
      className={`form reveal${sent ? ' sent' : ''}`}
      noValidate
      onSubmit={onSubmit}
    >
      <div className="form-head">
        <span className="lights"><i /><i /><i /></span>
        <span>~/inquiry.json</span>
        <span style={{ marginLeft: 'auto', color: 'var(--fg-fade)' }}>unsaved</span>
      </div>
      <div className="form-body">
        <div className="form-line"><span className="num">1</span><span className="quote">{'{'}</span></div>
        <div className="form-line"><span className="num">2</span><span className="key">&quot;name&quot;</span><span className="col">:</span><span className="quote">&quot;</span><span className="val"><input name="name" required placeholder="Your full name" autoComplete="name" /></span><span className="quote">&quot;,</span></div>
        <div className="form-line"><span className="num">3</span><span className="key">&quot;email&quot;</span><span className="col">:</span><span className="quote">&quot;</span><span className="val"><input type="email" name="email" required placeholder="you@company.com" autoComplete="email" /></span><span className="quote">&quot;,</span></div>
        <div className="form-line"><span className="num">4</span><span className="key">&quot;budget&quot;</span><span className="col">:</span><span className="quote">&quot;</span><span className="val"><input name="budget" placeholder="Optional — ballpark only" /></span><span className="quote">&quot;,</span></div>
        <div className="form-line"><span className="num">5</span><span className="key">&quot;message&quot;</span><span className="col">:</span><span className="quote">&quot;</span><span className="val"><textarea name="message" required rows={3} placeholder="What are you building, and when do you need it?" /></span><span className="quote">&quot;</span></div>
        <div className="form-line"><span className="num">6</span><span className="quote">{'}'}</span></div>
      </div>
      <div className="form-foot">
        <span className="note" style={{ color: noteColor }}>{note}</span>
        <button type="submit" className="btn primary" disabled={sending}>
          <span>{label}</span> <span className="arrow">↗</span>
        </button>
      </div>
      <div className="form-success">
        <em>// Message sent.</em>
        <br />
        Thanks — I&apos;ll be in touch within one working day.
      </div>
    </form>
  );
}
