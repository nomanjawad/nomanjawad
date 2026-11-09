import { notFound } from 'next/navigation';

/** Any URL no route claims lands here so the 404 renders inside the site layout. */
export default function CatchAll() {
  notFound();
}
