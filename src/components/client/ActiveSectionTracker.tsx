'use client';
import { useEffect } from 'react';

const SECTIONS = ['hero', 'about', 'work', 'skills', 'experience', 'contact'];

export function ActiveSectionTracker() {
  useEffect(() => {
    const secEls = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!secEls.length) return;
    const treeFiles = document.querySelectorAll<HTMLLIElement>('.tree li.file[data-jump]');
    const tabs = document.querySelectorAll<HTMLDivElement>('.tab[data-jump]');
    let raf: number | null = null;
    const update = () => {
      raf = null;
      const probe = window.innerHeight * 0.4;
      let active = secEls[0]?.id;
      for (const el of secEls) {
        const r = el.getBoundingClientRect();
        if (r.top <= probe) active = el.id;
      }
      treeFiles.forEach((f) => f.classList.toggle('active', f.dataset.jump === active));
      tabs.forEach((t) => t.classList.toggle('active', t.dataset.jump === active));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-jump]');
      if (!target) return;
      const id = target.dataset.jump;
      if (!id) return;
      const tgt = document.getElementById(id);
      if (tgt) {
        e.preventDefault();
        window.scrollTo({ top: tgt.offsetTop - 20, behavior: 'smooth' });
      }
    };
    document.addEventListener('click', onClick);
    const folderToggle = (e: MouseEvent) => {
      const row = (e.target as HTMLElement).closest<HTMLDivElement>('.tree li.folder > .row');
      if (!row) return;
      row.parentElement?.classList.toggle('open');
    };
    document.addEventListener('click', folderToggle);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick);
      document.removeEventListener('click', folderToggle);
    };
  }, []);
  return null;
}
