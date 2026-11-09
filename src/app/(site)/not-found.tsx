import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="page-hero nf">
      <div className="hero-aurora" aria-hidden="true" />
      <div className="page-inner">
        <p className="cs-kicker">404 · nothing at this address</p>
        <h1 className="giant nf-title">Lost the thread</h1>
        <p className="nf-lede">The page moved, never existed, or the link had a typo. The work and the way to reach me are still where they were.</p>
        <div className="about-ctas">
          <Link href="/" className="btn-hot">Back to the start</Link>
          <Link href="/#contact" className="btn-ghost">Get in touch</Link>
        </div>
        <p className="nf-mono" aria-hidden="true">GET /… → 404 · 0 ms · nothing to deploy</p>
      </div>
    </section>
  );
}
