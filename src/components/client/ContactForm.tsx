'use client';
import { useState } from 'react';

/** Composes an email in the visitor's own mail app; nothing is sent from the page itself. */
export function ContactForm({ email }: { email: string }) {
  const [error, setError] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();
    if (!name || !message) {
      setError('Add your name and a message first.');
      return;
    }
    setError('');
    const subject = `Project inquiry from ${name}`;
    const body = `${message}\n\n${name}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="cform reveal" noValidate onSubmit={onSubmit}>
      <div>
        <label htmlFor="cf-name">Your name</label>
        <input id="cf-name" name="name" autoComplete="name" required />
      </div>
      <div>
        <label htmlFor="cf-message">What are you building?</label>
        <textarea id="cf-message" name="message" required />
      </div>
      {error && <p className="cform-error" role="alert">{error}</p>}
      <div className="cform-foot">
        <p className="cform-note">Opens your email app with the message filled in. Nothing is sent from this page.</p>
        <button type="submit" className="btn-hot">Open email draft</button>
      </div>
    </form>
  );
}
