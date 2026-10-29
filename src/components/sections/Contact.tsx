import type { Contact as ContactType, Identity, Social } from '@/lib/types';
import { CTA } from '@/lib/homeCopy';
import { ContactForm } from '@/components/client/ContactForm';
import { DeployLog } from '@/components/client/DeployLog';

/** Final call to action, then the contact form and details. */
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
    <section id="contact" className="sec contact">
      <div className="sec-inner">
        <div className="cta">
          <p className="kick reveal">{CTA.kicker}</p>
          <h2 className="giant contact-title reveal" dangerouslySetInnerHTML={{ __html: contact.headline }} />
          <p className="lead reveal">{CTA.lead}</p>
          <div className="about-ctas reveal">
            <a href={`mailto:${identity.email}`} className="btn-hot">Email the brief</a>
            <a href={identity.cv} target="_blank" rel="noopener noreferrer" className="btn-ghost">Download CV</a>
          </div>
          <ul className="chips reveal" aria-label="Coming next">
            {CTA.chips.map((c, i) => <li key={c} style={{ '--i': i } as React.CSSProperties}>{c}</li>)}
          </ul>
        </div>
        <div className="cta-log reveal"><DeployLog /></div>
        <div className="contact-grid">
          <ContactForm email={identity.email} />
          <dl className="cmeta cmeta-row reveal">
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
