import type { Experience as ExperienceType } from '@/lib/types';
import { ExperienceTimeline } from '@/components/client/ExperienceTimeline';

export function Experience({ experience }: { experience: ExperienceType }) {
  return (
    <section id="experience">
      <div className="wrap">
        <header className="sec-head reveal">
          <div>
            <div className="sec-num">{experience.sectionNum}</div>
            <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: experience.sectionTitle }} />
          </div>
          <div className="sec-meta">{experience.sectionMeta}</div>
        </header>
        <ExperienceTimeline experience={experience} />
      </div>
    </section>
  );
}
