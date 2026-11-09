'use client';
import { useEffect, useState } from 'react';

const TZ = 'Asia/Dhaka';

/** "Available now · Dhaka 17:42": the two facts every current portfolio winner puts above the fold. */
export function NavStatus({ availableNow, city }: { availableNow: boolean; city: string }) {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: TZ });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 20_000);
    return () => clearInterval(id);
  }, []);
  return (
    <p className="nav-status" aria-live="off">
      <i className={availableNow ? 'on' : undefined} aria-hidden="true" />
      <span>{availableNow ? 'Available now' : 'Booked'}</span>
      <span className="nav-status-sep" aria-hidden="true">·</span>
      <time dateTime={time ?? undefined} suppressHydrationWarning>{city} {time ?? '--:--'}</time>
    </p>
  );
}
