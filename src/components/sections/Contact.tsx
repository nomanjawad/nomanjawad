import type { Contact as ContactType, Identity, Social } from '@/lib/types';
import { ContactForm } from '@/components/client/ContactForm';

export function Contact({
  contact,
  identity,
  social,
}: {
  contact: ContactType;
  identity: Identity;
  social: Social[];
}) {
  const phoneHref = identity.phone.replace(/[^+\d]/g, '');
  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-num reveal">{contact.sectionNum}</div>
        <h2 className="contact-hero reveal" dangerouslySetInnerHTML={{ __html: contact.headline }} />
        <a href={`mailto:${identity.email}`} className="contact-email reveal">
          {identity.email} ↗
        </a>
        <p
          className="reveal"
          style={{ color: 'var(--fg-dim)', fontSize: 13, maxWidth: '52ch', margin: '10px 0 0' }}
        >
          {contact.leadCopy}
        </p>
        <div className="contact-grid">
          <ContactForm />
          <dl className="contact-meta reveal">
            <div className="cmeta-row"><dt>Email</dt><dd><a href={`mailto:${identity.email}`}>{identity.email}</a></dd></div>
            <div className="cmeta-row"><dt>Phone</dt><dd><a href={`tel:${phoneHref}`}>{identity.phone}</a></dd></div>
            <div className="cmeta-row"><dt>Location</dt><dd>{identity.location} <span style={{ color: 'var(--fg-fade)' }}>({identity.timezone})</span></dd></div>
            <div className="cmeta-row"><dt>Hours</dt><dd>{contact.hours}</dd></div>
            <div className="cmeta-row">
              <dt>Elsewhere</dt>
              <dd>
                {social.map((s, i) => (
                  <span key={s.label}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
                    {i < social.length - 1 && ' · '}
                  </span>
                ))}
              </dd>
            </div>
            <div className="cmeta-row"><dt>CV</dt><dd><a href={identity.cv} target="_blank" rel="noopener noreferrer">Download PDF</a></dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
