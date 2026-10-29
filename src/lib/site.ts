import type { Social } from './types';

/**
 * Public origin used for canonical URLs, the sitemap and share images.
 * Set NEXT_PUBLIC_SITE_URL once the custom domain serves this site.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nomanjawad.vercel.app').replace(/\/$/, '');
export const SITE_NAME = 'Noman E Jawad';

/** Serialises structured data for an inline script tag. */
export function jsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/** Social entries that point at a real profile (placeholders use "#"). */
export function liveLinks(social: Social[]): Social[] {
  return social.filter((s) => /^https?:\/\//.test(s.url));
}
