/** Push a named event to the GTM dataLayer. Safe to call during SSR or when GTM is not loaded (dev, previews). */
export type TrackParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window { dataLayer?: unknown[] }
}

export function track(event: string, params: TrackParams = {}) {
  if (typeof window === 'undefined') return;
  const clean: TrackParams = {};
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== '') clean[k] = v;
  (window.dataLayer ||= []).push({ event, ...clean });
}

/** Where on the page an element lives: the nearest section id, or footer / nav / palette. */
export function locationOf(el: Element | null): string {
  const host = el?.closest<HTMLElement>('section[id], footer, nav, [data-loc]');
  if (!host) return 'page';
  return host.dataset.loc || host.id || host.tagName.toLowerCase();
}
