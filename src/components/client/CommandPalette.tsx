'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Identity, Project } from '@/lib/types';

type Cmd = { g: string; t: string; sub: string; ic: string; act: () => void };

export function CommandPalette({
  projects,
  identity,
}: {
  projects: Project[];
  identity: Identity;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const jumpTo = useCallback((id: string) => {
    if (window.location.pathname !== '/') {
      router.push('/#' + id);
      return;
    }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
  }, [router]);

  const setTheme = useCallback(() => {
    const cur = document.documentElement.dataset.theme || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('noman.theme', next);
  }, []);

  const allCmds: Cmd[] = useMemo(() => {
    const base: Cmd[] = [
      { g: 'Navigate', t: 'Go to Hero',       sub: 'hero.tsx',       ic: '#', act: () => jumpTo('hero') },
      { g: 'Navigate', t: 'Go to About',      sub: 'about.tsx',      ic: '#', act: () => jumpTo('about') },
      { g: 'Navigate', t: 'Go to Work',       sub: 'work.tsx',       ic: '#', act: () => jumpTo('work') },
      { g: 'Navigate', t: 'Go to Skills',     sub: 'skills.tsx',     ic: '#', act: () => jumpTo('skills') },
      { g: 'Navigate', t: 'Go to Experience', sub: 'experience.tsx', ic: '#', act: () => jumpTo('experience') },
      { g: 'Navigate', t: 'Go to Contact',    sub: 'contact.tsx',    ic: '#', act: () => jumpTo('contact') },
    ];
    projects.forEach((p) =>
      base.push({ g: 'Projects', t: p.name, sub: 'open case study', ic: '▸', act: () => router.push(`/work/${p.slug}`) }),
    );
    base.push(
      { g: 'Actions', t: 'Email Noman',      sub: identity.email,      ic: '@', act: () => { window.location.href = 'mailto:' + identity.email; } },
      { g: 'Actions', t: 'Download CV',      sub: 'opens in new tab',  ic: '⤓', act: () => window.open(identity.cv, '_blank') },
      { g: 'Actions', t: 'Copy Email',       sub: 'to clipboard',      ic: '⎘', act: () => navigator.clipboard.writeText(identity.email) },
      { g: 'Theme',   t: 'Toggle Theme',     sub: 'dark ⇄ light',      ic: '◐', act: setTheme },
    );
    return base;
  }, [projects, identity, jumpTo, setTheme, router]);

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return allCmds;
    return allCmds.filter((c) => (c.t + ' ' + c.sub + ' ' + c.g).toLowerCase().includes(t));
  }, [q, allCmds]);

  useEffect(() => { setSel(0); }, [q]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (!open) return;
      if (e.key === 'Escape') setOpen(false);
      else if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => (s + 1) % Math.max(filtered.length, 1)); }
      else if (e.key === 'ArrowUp')   { e.preventDefault(); setSel((s) => (s - 1 + filtered.length) % Math.max(filtered.length, 1)); }
      else if (e.key === 'Enter')     {
        e.preventDefault();
        const c = filtered[sel];
        if (c) { setOpen(false); c.act(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, filtered, sel]);

  useEffect(() => {
    if (open) { setQ(''); setSel(0); setTimeout(() => inputRef.current?.focus(), 40); }
  }, [open]);

  useEffect(() => {
    const trigger = document.getElementById('cmdTrigger');
    if (!trigger) return;
    const onClick = () => setOpen(true);
    trigger.addEventListener('click', onClick);
    return () => trigger.removeEventListener('click', onClick);
  }, []);

  if (!open) return null;

  const groups: Record<string, Cmd[]> = {};
  filtered.forEach((c) => { (groups[c.g] ||= []).push(c); });

  let idx = -1;
  return (
    <div className="cmd-overlay on" role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
      <div className="cmd">
        <div className="cmd-input-row">
          <span className="chev">❯</span>
          <input
            ref={inputRef}
            className="cmd-input"
            placeholder="Type a command or search…"
            autoComplete="off"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <span className="kbd">esc</span>
        </div>
        <div className="cmd-list">
          {Object.entries(groups).map(([g, items]) => (
            <div key={g}>
              <div className="cmd-group-label">{g}</div>
              {items.map((c) => {
                idx++;
                const myIdx = idx;
                return (
                  <div
                    key={c.t}
                    className={`cmd-item${myIdx === sel ? ' sel' : ''}`}
                    onMouseEnter={() => setSel(myIdx)}
                    onClick={() => { setOpen(false); c.act(); }}
                  >
                    <span className="ic">{c.ic}</span>
                    <span>{c.t}</span>
                    <span className="desc">{c.sub}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="cmd-foot">
          <span><span className="kbd">↑↓</span> navigate</span>
          <span><span className="kbd">↵</span> select</span>
          <span><span className="kbd">esc</span> close</span>
        </div>
      </div>
    </div>
  );
}
