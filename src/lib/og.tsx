import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };

/** Shared share-card artwork: dark canvas, glow, kicker, big title, footer line. */
export function ogImage({ kicker, title, footer }: { kicker: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          color: '#D7E2EA',
          backgroundColor: '#0C0C0C',
          backgroundImage:
            'radial-gradient(circle at 82% 30%, rgba(182,0,168,0.55), rgba(12,12,12,0) 45%), radial-gradient(circle at 96% 92%, rgba(190,76,0,0.45), rgba(12,12,12,0) 40%), radial-gradient(circle at 60% 110%, rgba(118,33,176,0.5), rgba(12,12,12,0) 45%)',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 6, textTransform: 'uppercase', color: '#9AA6B0' }}>
          {kicker}
        </div>
        <div style={{ display: 'flex', fontSize: title.length > 22 ? 92 : 124, fontWeight: 900, lineHeight: 1, letterSpacing: -3, textTransform: 'uppercase', color: '#E6EEF3', maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#D7E2EA' }}>{footer}</div>
      </div>
    ),
    OG_SIZE,
  );
}
