import 'server-only';
import fs from 'node:fs/promises';
import path from 'node:path';
import { cache } from 'react';
import type { Content } from './types';

const CONTENT_PATH = path.join(process.cwd(), 'content', 'content.json');

export const getContent = cache(async (): Promise<Content> => {
  const raw = await fs.readFile(CONTENT_PATH, 'utf8');
  return JSON.parse(raw) as Content;
});

export async function writeContent(next: Content): Promise<void> {
  const json = JSON.stringify(next, null, 2);
  await fs.writeFile(CONTENT_PATH, json + '\n', 'utf8');
}

export const CONTENT_FILE = CONTENT_PATH;
