import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, JetBrains_Mono } from 'next/font/google';
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
    default: 'Noman E Jawad — Web Developer · Dhaka',
    template: '%s · Noman E Jawad',
  },
  description:
    'Noman E Jawad, web developer in Dhaka. React, Next.js, TypeScript. Available for freelance.',
  openGraph: {
    title: 'Noman E Jawad — Web Developer · Dhaka',
    description:
      'Noman E Jawad, web developer in Dhaka. React, Next.js, TypeScript. Available for freelance.',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
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
    <html lang="en" className={`${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
