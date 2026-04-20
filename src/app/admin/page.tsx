import { getContent } from '@/lib/content';
import { AdminClient } from './AdminClient';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const content = await getContent();
  return <AdminClient initial={content} />;
}
