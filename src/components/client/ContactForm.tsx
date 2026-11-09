'use client';
import { useMemo, useState } from 'react';

/**
 * Brief builder. You fill in a sentence, the email writes itself on the right,
 * then it opens in your mail app. Nothing is sent from this page.
 */

const TYPES = ['a new website', 'a redesign', 'a web app', 'an audit of my site', 'ongoing help'];
const WHEN = ['this month', 'in 1–2 months', 'in 3+ months', 'no fixed date'];
const BUDGET = ['under $2k', '$2k–5k', '$5k–15k', '$15k+', 'not sure yet'];

export function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [type, setType] = useState(TYPES[0]);
  const [when, setWhen] = useState(WHEN[1]);
  const [budget, setBudget] = useState(BUDGET[4]);
  const [details, setDetails] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const subject = useMemo(() => `Brief: ${type}${company ? ` for ${company}` : ''}`, [type, company]);
  const body = useMemo(() => {
    const who = name ? `I'm ${name}${company ? ` from ${company}` : ''}.` : `Hi Noman.`;
    const lines = [
      who,
      `I need ${type}, ${when}. Budget: ${budget}.`,
      '',
      details ? details : '(What the site has to do, who it is for, anything you already have: Figma, copy, a current site.)',
      '',
      name || '',
    ];
    return lines.join('\n').trim();
  }, [name, company, type, when, budget, details]);

  const valid = name.trim().length > 0 && details.trim().length > 0;

  const open = () => {
    if (!valid) { setError('Add your name and a line about the project first.'); return; }
    setError('');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(`To: ${email}\nSubject: ${subject}\n\n${body}`); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  };

  const chips = (opts: string[], val: string, set: (v: string) => void, label: string) => (
    <div className="bf-chips" role="radiogroup" aria-label={label}>
      {opts.map((o) => (
        <button key={o} type="button" role="radio" aria-checked={val === o} className={val === o ? 'on' : undefined} onClick={() => set(o)}>{o}</button>
      ))}
    </div>
  );

  return (
    <form className="bf reveal" noValidate onSubmit={(e) => { e.preventDefault(); open(); }}>
      <div className="bf-fill">
        <p className="bf-line">
          I’m <input className="bf-in" value={name} onChange={(e) => setName(e.target.value)} placeholder="your name" aria-label="Your name" autoComplete="name" size={12} />
          {' '}from <input className="bf-in" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="company (optional)" aria-label="Company" autoComplete="organization" size={16} />.
        </p>
        <p className="bf-line">I need</p>
        {chips(TYPES, type, setType, 'What you need')}
        <p className="bf-line">and it has to be live</p>
        {chips(WHEN, when, setWhen, 'When')}
        <p className="bf-line">Budget is around</p>
        {chips(BUDGET, budget, setBudget, 'Budget')}
        <label className="bf-line" htmlFor="bf-details">Here’s the brief</label>
        <textarea id="bf-details" className="bf-area" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="What the site has to do, who it is for, and anything you already have: Figma, copy, a current site." rows={4} />
        {error && <p className="cform-error" role="alert">{error}</p>}
      </div>
      <div className="bf-preview" aria-live="polite">
        <div className="dlog-bar"><i /><i /><i /><span>new message · {email}</span></div>
        <div className="bf-mail">
          <p className="bf-subj"><span className="lbl">Subject</span>{subject}</p>
          <pre>{body}</pre>
        </div>
        <div className="bf-actions">
          <button type="submit" className="btn-hot">Open in my mail app</button>
          <button type="button" className="btn-ghost" onClick={copy}>{copied ? 'Copied' : 'Copy the brief'}</button>
        </div>
        <p className="cform-note">Opens your email app with this message filled in. Nothing is sent from this page.</p>
      </div>
    </form>
  );
}
