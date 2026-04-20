'use client';
import { Fragment } from 'react';

export function Marquee({ items }: { items: string[] }) {
  const renderTrack = (k: string) =>
    items.map((m, i) => (
      <Fragment key={`${k}-${i}`}>
        {i % 2 === 1 ? <em>{m}</em> : <span>{m}</span>}
        <span className="sep">✦</span>
      </Fragment>
    ));
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {renderTrack('a')}
        {renderTrack('b')}
      </div>
    </div>
  );
}
