'use client';
import { useEffect } from 'react';
import { track, locationOf } from '@/lib/track';

/**
 * Site-wide analytics hooks, one delegated listener:
 *  - email_click / phone_click on any mailto: or tel: link, with where it was clicked
 *  - case_study_open on any link into /work/<slug>
 *  - any element with data-track="event_name" fires that event; data-track-* attributes become params
 *  - section_seen once per section as it scrolls into view, so drop-off is visible per beat
 */
export function Tracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!t) return;
      const tagged = t.closest<HTMLElement>('[data-track]');
      if (tagged) {
        const params: Record<string, string> = {};
        for (const [k, v] of Object.entries(tagged.dataset)) {
          if (k !== 'track' && k.startsWith('track') && v) params[k.slice(5).toLowerCase()] = v;
        }
        track(tagged.dataset.track!, { location: locationOf(tagged), ...params });
      }
      const a = t.closest<HTMLAnchorElement>('a[href]');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href.startsWith('mailto:')) track('email_click', { location: locationOf(a) });
      else if (href.startsWith('tel:')) track('phone_click', { location: locationOf(a) });
      else if (/^\/work\/[^/]+/.test(href)) track('case_study_open', { slug: href.split('/')[2], location: locationOf(a) });
    };
    document.addEventListener('click', onClick, true);

    const seen = new Set<string>();
    const io = new IntersectionObserver((entries) => {
      for (const en of entries) {
        const id = (en.target as HTMLElement).id;
        if (en.isIntersecting && !seen.has(id)) { seen.add(id); track('section_seen', { section: id }); }
      }
    }, { threshold: 0.35 });
    document.querySelectorAll('main section[id]').forEach((s) => io.observe(s));

    return () => { document.removeEventListener('click', onClick, true); io.disconnect(); };
  }, []);
  return null;
}
