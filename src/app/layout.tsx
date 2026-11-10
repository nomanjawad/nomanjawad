import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { ThemeScript } from '@/components/client/ThemeScript';
import { BRAND, IS_PRODUCTION, OG_BASE, SITE_NAME, SITE_URL } from '@/lib/site';
import './globals.css';

const mono = JetBrains_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Keyword phrase first, brand last, 54 characters; mirrors the hero kicker and h1 so Google keeps it as the title link.
const TITLE = `Freelance Next.js & Full-Stack Developer | ${BRAND}`;
const DESCRIPTION =
  'Freelance full-stack developer for hire. Next.js, React and Laravel sites built from your brief or design file, fast and pixel-perfect. Dhaka-based, remote worldwide.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${BRAND}`,
  },
  description: DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    ...OG_BASE,
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: IS_PRODUCTION,
    follow: IS_PRODUCTION,
    googleBot: { index: IS_PRODUCTION, follow: IS_PRODUCTION, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0B0B0B' },
    { media: '(prefers-color-scheme: light)', color: '#F5F2EC' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={mono.variable} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        {children}
        <Analytics />
        {IS_PRODUCTION && (
          <>
            <Script src="https://www.googletagmanager.com/gtm.js?id=GTM-53WFC97C" strategy="afterInteractive" />
            <Script id="gtm-datalayer" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
