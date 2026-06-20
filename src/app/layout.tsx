import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { ThemeScript } from '@/components/client/ThemeScript';
import './globals.css';

const serif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = JetBrains_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nomanjawad.vercel.app'),
  title: {
    default: 'Noman E Jawad — Full Stack Developer for Hire',
    template: '%s · Noman E Jawad',
  },
  description:
    'Remote full stack developer with 5+ years in Next.js, React, Laravel & WooCommerce. Pixel-perfect Figma to code. Available for hire globally.',
  keywords: [
    'full stack developer',
    'hire Next.js developer remote',
    'React developer for hire',
    'Vue Laravel developer',
    'WordPress developer Australia',
    'WooCommerce developer',
    'Figma to code developer',
    'pixel perfect developer',
    'full stack developer Bangladesh',
    'freelance full stack developer',
    'TypeScript developer remote',
    'GraphQL developer',
    'Noman E Jawad',
    'remote developer Dhaka',
  ],
  authors: [{ name: 'Noman E Jawad', url: 'https://nomanjawad.vercel.app' }],
  creator: 'Noman E Jawad',
  openGraph: {
    title: 'Noman E Jawad — Full Stack Developer (Next.js, React, Laravel)',
    description:
      '5+ years building pixel-perfect web apps with Next.js, React, Vue, Laravel & WooCommerce. Lead developer available for remote full-time or freelance. Based in Dhaka, open to AU & US clients.',
    type: 'website',
    locale: 'en_US',
    url: 'https://nomanjawad.vercel.app',
    siteName: 'Noman E Jawad — Full Stack Developer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noman E Jawad — Full Stack Developer for Hire',
    description:
      'Remote full stack developer with 5+ years in Next.js, React, Laravel & WooCommerce. Pixel-perfect Figma to code. Available globally.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://nomanjawad.vercel.app',
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

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Noman E Jawad',
  jobTitle: 'Full Stack Developer',
  description:
    'Remote full stack developer with 5+ years experience in Next.js, React, Vue, Laravel, TypeScript, WooCommerce, and Supabase. Available for remote full-time and freelance engagements.',
  url: 'https://nomanjawad.vercel.app',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  knowsAbout: [
    'Next.js', 'React', 'Vue.js', 'Laravel', 'TypeScript',
    'WordPress', 'WooCommerce', 'MySQL', 'Supabase',
    'GraphQL', 'Figma to Code', 'GitHub Actions', 'Node.js',
  ],
  sameAs: [
    'https://github.com/nomanjawad',
    'https://www.linkedin.com/in/nomanjawad/',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Noman E Jawad — Full Stack Developer',
  url: 'https://nomanjawad.vercel.app',
  description:
    'Portfolio and hire page for Noman E Jawad, remote full stack developer specializing in Next.js, React, Laravel and WooCommerce.',
  author: {
    '@type': 'Person',
    name: 'Noman E Jawad',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
