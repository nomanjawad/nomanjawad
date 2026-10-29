import type { Project } from '@/lib/types';

const HUES = [
  [305, 270, 22],
  [200, 262, 320],
  [150, 190, 280],
  [28, 340, 262],
  [262, 210, 160],
  [330, 22, 200],
];

/** Generated artwork for a case study, used where client visuals are withheld. */
export function Mesh({ project, index }: { project: Project; index: number }) {
  const [h1, h2, h3] = HUES[index % HUES.length];
  return (
    <span className="mesh" style={{ '--h1': h1, '--h2': h2, '--h3': h3 } as React.CSSProperties}>
      <span className="mesh-name">{project.sector ?? project.name}</span>
      <span className="mesh-num">Case study {String(index + 1).padStart(2, '0')}</span>
    </span>
  );
}

export const NDA_NOTE = 'Client name and visuals withheld under NDA';
