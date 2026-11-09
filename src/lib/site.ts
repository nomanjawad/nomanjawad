import type { Social } from './types';

/**
 * Public origin used for canonical URLs, the sitemap and share images.
 * Set NEXT_PUBLIC_SITE_URL once the custom domain serves this site.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nomanjawad.vercel.app').replace(/\/$/, '');
export const SITE_NAME = 'Noman E Jawad';
export const BRAND = 'Noman Jawad';

/** Case studies are hidden until the write-ups are ready: no section, no links, no indexing. Flip to true to publish. */
export const SHOW_WORK = false;

/** Only the production deployment should be indexed; Vercel previews carry VERCEL_ENV=preview. */
export const IS_PRODUCTION = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === 'production' : process.env.NODE_ENV === 'production';

/** Open Graph fields every page shares. Spread first: a page's own `openGraph` replaces the parent's wholesale. */
export const OG_BASE = { siteName: SITE_NAME, locale: 'en_US' } as const;

/** Serialises structured data for an inline script tag. */
export function jsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/** Social entries that point at a real profile (placeholders use "#"). */
export function liveLinks(social: Social[]): Social[] {
  return social.filter((s) => /^https?:\/\//.test(s.url));
}
