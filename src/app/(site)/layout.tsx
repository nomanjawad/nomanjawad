import { Kanit } from 'next/font/google';
import { getContent } from '@/lib/content';
import { liveLinks } from '@/lib/site';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/client/BackToTop';
import { CommandPalette } from '@/components/client/CommandPalette';
import { ScrollReveal } from '@/components/client/ScrollReveal';
import { SmoothScroll } from '@/components/client/SmoothScroll';
import './site.css';

const kanit = Kanit({
  weight: ['300', '400', '500', '900'],
  subsets: ['latin'],
  variable: '--font-kanit',
  display: 'swap',
});

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const content = await getContent();
  return (
    <div className={`site ${kanit.variable}`}>
      <noscript>
        <style>{'.site .reveal,.site .st-ch{opacity:1;transform:none}'}</style>
      </noscript>
      <Nav identity={content.identity} />
      <main id="main">{children}</main>
      <Footer
        footer={content.footer}
        identity={content.identity}
        social={liveLinks(content.social)}
      />
      <BackToTop />
      <CommandPalette
        projects={content.projects}
        identity={content.identity}
      />
      <ScrollReveal />
      <SmoothScroll />
    </div>
  );
}
