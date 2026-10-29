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
    <section id="contact" className="contact">
      <div className="contact-inner">
        <h2 className="giant contact-title reveal" dangerouslySetInnerHTML={{ __html: contact.headline }} />
        <a href={`mailto:${identity.email}`} className="contact-email reveal">{identity.email} ↗</a>
        <p className="contact-lede reveal">{contact.leadCopy}</p>
        <div className="contact-grid">
          <ContactForm email={identity.email} />
          <dl className="cmeta reveal">
            <div><dt>Email</dt><dd><a href={`mailto:${identity.email}`}>{identity.email}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={`tel:${phoneHref}`}>{identity.phone}</a></dd></div>
            <div><dt>Location</dt><dd>{identity.location} ({identity.timezone})</dd></div>
            <div><dt>Hours</dt><dd>{contact.hours}</dd></div>
            <div>
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
            <div><dt>CV</dt><dd><a href={identity.cv} target="_blank" rel="noopener noreferrer">Download PDF</a></dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
