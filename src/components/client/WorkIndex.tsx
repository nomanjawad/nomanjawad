'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Mesh } from '@/components/ui/Mesh';

/** Dated index of case studies: one row per project, a preview of the hovered one beside it. */
export function WorkIndex({ projects }: { projects: Project[] }) {
  const [hover, setHover] = useState(0);
  const p = projects[hover] ?? projects[0];
  return (
    <div className="wk-index">
      <table className="wk-table">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Project</th>
            <th scope="col" className="wk-col-sector">Sector</th>
            <th scope="col" className="wk-col-role">Role</th>
            <th scope="col" className="wk-col-stack">Stack</th>
            <th scope="col">Result</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((pr, i) => {
            const hl = pr.highlights?.[0];
            return (
              <tr key={pr.id} className={i === hover ? 'on' : undefined} onMouseEnter={() => setHover(i)} onFocus={() => setHover(i)}>
                <td className="wk-year">{pr.year}</td>
                <th scope="row" className="wk-proj">
                  <Link href={`/work/${pr.slug}`}>{pr.name}</Link>
                  <span className="wk-sub">{pr.description}</span>
                </th>
                <td className="wk-col-sector">{pr.sector ?? pr.label}</td>
                <td className="wk-col-role">{pr.role}</td>
                <td className="wk-col-stack">{pr.stack.slice(0, 3).join(' · ')}</td>
                <td className="wk-result">{hl ? <><b>{hl.v}</b> <span>{hl.k}</span></> : pr.duration}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <aside className="wk-preview" aria-hidden="true">
        <div className="wk-preview-art"><Mesh project={p} index={hover} /></div>
        <p className="wk-preview-meta">{p.sector ?? p.label} · {p.year} · {p.duration}</p>
      </aside>
    </div>
  );
}
