import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getContent, writeContent } from '@/lib/content';
import type { Content } from '@/lib/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const content = await getContent();
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  let body: Content;
  try {
    body = (await request.json()) as Content;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  if (!body || typeof body !== 'object' || !body.identity || !Array.isArray(body.projects)) {
    return NextResponse.json({ error: 'Schema mismatch' }, { status: 422 });
  }
  await writeContent(body);
  revalidatePath('/');
  for (const p of body.projects) revalidatePath(`/work/${p.slug}`);
  return NextResponse.json({ ok: true });
}
