import { getContent } from '@/lib/content';
import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';
import { Footer } from '@/components/layout/Footer';
import { BackgroundField } from '@/components/client/BackgroundField';
import { BackToTop } from '@/components/client/BackToTop';
import { CommandPalette } from '@/components/client/CommandPalette';
import { ScrollReveal } from '@/components/client/ScrollReveal';

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const content = await getContent();
  return (
    <>
      <BackgroundField />
      <div className="ide">
        <Sidebar
          identity={content.identity}
          projects={content.projects}
          social={content.social}
        />
        <div className="main">
          <Topbar />
          <main className="content">{children}</main>
          <Footer
            footer={content.footer}
            identity={content.identity}
            social={content.social}
          />
        </div>
      </div>
      <BackToTop />
      <CommandPalette
        projects={content.projects}
        identity={content.identity}
      />
      <ScrollReveal />
    </>
  );
}
