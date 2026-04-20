'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import type { Content, Project } from '@/lib/types';

type Section =
  | 'identity'
  | 'hero'
  | 'about'
  | 'work'
  | 'projects'
  | 'skills'
  | 'experience'
  | 'testimonials'
  | 'contact'
  | 'social'
  | 'footer'
  | 'marquee';

const NAV: { key: Section; label: string }[] = [
  { key: 'identity', label: 'Identity' },
  { key: 'hero', label: 'Hero' },
  { key: 'about', label: 'About' },
  { key: 'work', label: 'Work intro' },
  { key: 'projects', label: 'Projects / Cases' },
  { key: 'skills', label: 'Skills' },
  { key: 'experience', label: 'Experience' },
  { key: 'testimonials', label: 'Testimonials' },
  { key: 'contact', label: 'Contact' },
  { key: 'social', label: 'Social links' },
  { key: 'footer', label: 'Footer' },
  { key: 'marquee', label: 'Marquee' },
];

function emptyProject(): Project {
  return {
    id: 'new-project',
    slug: 'new-project',
    name: 'New Project',
    label: '',
    description: '',
    role: '',
    year: '',
    client: '',
    stack: [],
    liveUrl: '#',
    thumbnail: null,
    kicker: '',
    summary: '',
    duration: '',
    problem: '',
    approach: '',
    solution: '',
    outcome: '',
  };
}

export function AdminClient({ initial }: { initial: Content }) {
  const [content, setContent] = useState<Content>(initial);
  const [section, setSection] = useState<Section>('identity');
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const initialJSON = useRef(JSON.stringify(initial));

  useEffect(() => {
    setDirty(JSON.stringify(content) !== initialJSON.current);
  }, [content]);

  const save = useCallback(async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      if (!res.ok) throw new Error(await res.text());
      initialJSON.current = JSON.stringify(content);
      setDirty(false);
      setSavedAt(new Date().toLocaleTimeString());
    } catch (e) {
      console.error(e);
      alert('Save failed: ' + (e as Error).message);
    } finally {
      setSaving(false);
    }
  }, [content]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();
        if (dirty && !saving) save();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [dirty, saving, save]);

  const update = useCallback(<K extends keyof Content>(key: K, value: Content[K]) => {
    setContent((c) => ({ ...c, [key]: value }));
  }, []);

  return (
    <div className="admin-shell">
      <aside className="admin-side">
        <div className="head">
          <div className="monogram"><i style={{ fontStyle: 'italic' }}>n</i></div>
          <div>
            <b>admin</b>
            <span>content editor</span>
          </div>
        </div>
        <div className="nav">
          {NAV.map((n) => (
            <div
              key={n.key}
              className={`nav-item${section === n.key ? ' active' : ''}`}
              onClick={() => setSection(n.key)}
            >
              {n.label}
            </div>
          ))}
        </div>
        <div className="side-foot">
          <Link className="btn small" href="/" target="_blank">View site ↗</Link>
          <span style={{ fontSize: 10, color: 'var(--fg-fade)' }}>
            <span className="kbd">⌘S</span> save
          </span>
        </div>
      </aside>

      <main className="admin-main">
        <div className="toolbar">
          <div className="crumb" style={{ marginBottom: 0 }}>admin / {section}</div>
          <span style={{ flex: 1 }} />
          {dirty ? <span className="unsaved">● unsaved changes</span> : savedAt ? <span className="saved">✓ saved · {savedAt}</span> : <span style={{ fontSize: 11, color: 'var(--fg-fade)' }}>no changes</span>}
          <button className="btn primary small" onClick={save} disabled={!dirty || saving}>
            {saving ? 'Saving…' : 'Save'} <span className="arrow">↗</span>
          </button>
        </div>

        <SectionEditor section={section} content={content} update={update} setContent={setContent} />
      </main>

      <aside className="admin-aside">
        <h4>Live preview JSON</h4>
        <pre className="pre">{JSON.stringify(currentSlice(content, section), null, 2)}</pre>
        <p style={{ fontSize: 11, color: 'var(--fg-fade)', marginTop: 14 }}>
          Saving writes <code>content/content.json</code> via <code>PUT /api/content</code> and revalidates routes.
          When the database is wired in, swap the file-write in <code>src/lib/content.ts</code> for a DB call —
          this UI stays the same.
        </p>
      </aside>
    </div>
  );
}

function currentSlice(c: Content, s: Section): unknown {
  if (s === 'projects') return c.projects;
  if (s === 'social') return c.social;
  if (s === 'marquee') return c.marquee;
  return c[s as keyof Content];
}

function SectionEditor({
  section,
  content,
  update,
  setContent,
}: {
  section: Section;
  content: Content;
  update: <K extends keyof Content>(k: K, v: Content[K]) => void;
  setContent: React.Dispatch<React.SetStateAction<Content>>;
}) {
  switch (section) {
    case 'identity':
      return <IdentityEditor v={content.identity} on={(x) => update('identity', x)} />;
    case 'hero':
      return <HeroEditor v={content.hero} on={(x) => update('hero', x)} />;
    case 'about':
      return <AboutEditor v={content.about} on={(x) => update('about', x)} />;
    case 'work':
      return <WorkEditor v={content.work} on={(x) => update('work', x)} />;
    case 'projects':
      return <ProjectsEditor v={content.projects} on={(x) => update('projects', x)} />;
    case 'skills':
      return <SkillsEditor v={content.skills} on={(x) => update('skills', x)} />;
    case 'experience':
      return <ExperienceEditor v={content.experience} on={(x) => update('experience', x)} />;
    case 'testimonials':
      return <TestimonialsEditor v={content.testimonials} on={(x) => update('testimonials', x)} />;
    case 'contact':
      return <ContactEditor v={content.contact} on={(x) => update('contact', x)} />;
    case 'social':
      return <SocialEditor v={content.social} on={(x) => update('social', x)} />;
    case 'footer':
      return <FooterEditor v={content.footer} on={(x) => update('footer', x)} />;
    case 'marquee':
      return <MarqueeEditor v={content.marquee} on={(x) => update('marquee', x)} />;
    default:
      return null;
  }
}

/* ---------- field helpers ---------- */
function Text({ label, value, onChange, help }: { label: string; value: string; onChange: (v: string) => void; help?: string }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input value={value ?? ''} onChange={(e) => onChange(e.target.value)} />
      {help && <div className="help">{help}</div>}
    </div>
  );
}
function TextArea({ label, value, onChange, rows = 4, help }: { label: string; value: string; onChange: (v: string) => void; rows?: number; help?: string }) {
  return (
    <div className="field">
      <label>{label}</label>
      <textarea rows={rows} value={value ?? ''} onChange={(e) => onChange(e.target.value)} />
      {help && <div className="help">{help}</div>}
    </div>
  );
}
function Check({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="checkbox-row">
      <input type="checkbox" checked={!!checked} onChange={(e) => onChange(e.target.checked)} />
      <span>{label}</span>
    </label>
  );
}
function Heading({ title, lede }: { title: string; lede?: string }) {
  return (
    <>
      <h1>{title}</h1>
      {lede && <p className="lede">{lede}</p>}
    </>
  );
}

/* ---------- editors ---------- */
function IdentityEditor({ v, on }: { v: Content['identity']; on: (x: Content['identity']) => void }) {
  return (
    <>
      <Heading title="Identity" lede="Name, role, contact details, availability." />
      <div className="row-2">
        <Text label="Full name" value={v.name} onChange={(x) => on({ ...v, name: x })} />
        <Text label="Short name (footer)" value={v.shortName} onChange={(x) => on({ ...v, shortName: x })} />
      </div>
      <div className="row-2">
        <Text label="Role" value={v.role} onChange={(x) => on({ ...v, role: x })} />
        <Text label="Location" value={v.location} onChange={(x) => on({ ...v, location: x })} />
      </div>
      <div className="row-2">
        <Text label="Timezone" value={v.timezone} onChange={(x) => on({ ...v, timezone: x })} />
        <Text label="Phone" value={v.phone} onChange={(x) => on({ ...v, phone: x })} />
      </div>
      <Text label="Email" value={v.email} onChange={(x) => on({ ...v, email: x })} />
      <Text label="CV URL" value={v.cv} onChange={(x) => on({ ...v, cv: x })} />
      <Text label="Photo path" value={v.photo} onChange={(x) => on({ ...v, photo: x })} help="e.g. /assets/noman.jpeg (under /public)" />
      <Text label="Availability label" value={v.availability} onChange={(x) => on({ ...v, availability: x })} />
      <Check label="Available now (shows green pulse + status pill)" checked={v.availableNow} onChange={(x) => on({ ...v, availableNow: x })} />
    </>
  );
}

function HeroEditor({ v, on }: { v: Content['hero']; on: (x: Content['hero']) => void }) {
  return (
    <>
      <Heading title="Hero" lede="Top of the page. The terminal command and headline animate on load." />
      <Text label="Terminal command" value={v.command} onChange={(x) => on({ ...v, command: x })} />
      <div className="row-2">
        <Text label="Headline (start)" value={v.headlineBefore} onChange={(x) => on({ ...v, headlineBefore: x })} />
        <Text label="Headline (italic end)" value={v.headlineAfter} onChange={(x) => on({ ...v, headlineAfter: x })} />
      </div>
      <TextArea label="Subtitle (HTML allowed)" value={v.subtitle} onChange={(x) => on({ ...v, subtitle: x })} rows={3} help="Use <span class='hl'>…</span> to highlight a phrase." />
      <div className="card">
        <div className="card-head"><h3>Primary CTA</h3></div>
        <div className="row-3">
          <Text label="Label" value={v.primaryCta.label} onChange={(x) => on({ ...v, primaryCta: { ...v.primaryCta, label: x } })} />
          <Text label="Href" value={v.primaryCta.href} onChange={(x) => on({ ...v, primaryCta: { ...v.primaryCta, href: x } })} />
          <Text label="Arrow" value={v.primaryCta.arrow ?? ''} onChange={(x) => on({ ...v, primaryCta: { ...v.primaryCta, arrow: x } })} />
        </div>
      </div>
      <div className="card">
        <div className="card-head"><h3>Secondary CTA</h3></div>
        <div className="row-3">
          <Text label="Label" value={v.secondaryCta.label} onChange={(x) => on({ ...v, secondaryCta: { ...v.secondaryCta, label: x } })} />
          <Text label="Href" value={v.secondaryCta.href} onChange={(x) => on({ ...v, secondaryCta: { ...v.secondaryCta, href: x } })} />
          <Text label="Arrow" value={v.secondaryCta.arrow ?? ''} onChange={(x) => on({ ...v, secondaryCta: { ...v.secondaryCta, arrow: x } })} />
        </div>
      </div>
      <div className="card">
        <div className="card-head"><h3>Side card rows</h3></div>
        {v.sidecard.map((r, i) => (
          <div key={i} className="row-2" style={{ marginBottom: 10 }}>
            <Text label="Key" value={r.k} onChange={(x) => on({ ...v, sidecard: v.sidecard.map((y, j) => j === i ? { ...y, k: x } : y) })} />
            <Text label="Value" value={r.v} onChange={(x) => on({ ...v, sidecard: v.sidecard.map((y, j) => j === i ? { ...y, v: x } : y) })} />
          </div>
        ))}
        <button className="add-btn" onClick={() => on({ ...v, sidecard: [...v.sidecard, { k: '', v: '' }] })}>+ Add row</button>
      </div>
    </>
  );
}

function AboutEditor({ v, on }: { v: Content['about']; on: (x: Content['about']) => void }) {
  return (
    <>
      <Heading title="About" lede="Section headings, body copy, meta paragraphs, and stats." />
      <div className="row-2">
        <Text label="Section number" value={v.sectionNum} onChange={(x) => on({ ...v, sectionNum: x })} />
        <Text label="Section title (HTML)" value={v.sectionTitle} onChange={(x) => on({ ...v, sectionTitle: x })} />
      </div>
      <TextArea label="Section meta (HTML)" value={v.sectionMeta} onChange={(x) => on({ ...v, sectionMeta: x })} rows={2} />
      <div className="card">
        <div className="card-head"><h3>Body paragraphs (serif)</h3></div>
        {v.body.map((p, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <TextArea label={`Paragraph ${i + 1}`} value={p} onChange={(x) => on({ ...v, body: v.body.map((y, j) => j === i ? x : y) })} rows={3} />
            <button className="btn-mini danger" onClick={() => on({ ...v, body: v.body.filter((_, j) => j !== i) })}>Remove</button>
          </div>
        ))}
        <button className="add-btn" onClick={() => on({ ...v, body: [...v.body, ''] })}>+ Add paragraph</button>
      </div>
      <div className="card">
        <div className="card-head"><h3>Meta lines (mono)</h3></div>
        {v.meta.map((p, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <TextArea label={`Line ${i + 1}`} value={p} onChange={(x) => on({ ...v, meta: v.meta.map((y, j) => j === i ? x : y) })} rows={2} />
            <button className="btn-mini danger" onClick={() => on({ ...v, meta: v.meta.filter((_, j) => j !== i) })}>Remove</button>
          </div>
        ))}
        <button className="add-btn" onClick={() => on({ ...v, meta: [...v.meta, ''] })}>+ Add line</button>
      </div>
      <div className="card">
        <div className="card-head"><h3>Stats</h3></div>
        {v.stats.map((s, i) => (
          <div key={i} className="row-3" style={{ marginBottom: 10 }}>
            <Text label="Number" value={s.n} onChange={(x) => on({ ...v, stats: v.stats.map((y, j) => j === i ? { ...y, n: x } : y) })} />
            <Text label="Suffix" value={s.suffix ?? ''} onChange={(x) => on({ ...v, stats: v.stats.map((y, j) => j === i ? { ...y, suffix: x } : y) })} />
            <Text label="Label" value={s.l} onChange={(x) => on({ ...v, stats: v.stats.map((y, j) => j === i ? { ...y, l: x } : y) })} />
          </div>
        ))}
        <button className="add-btn" onClick={() => on({ ...v, stats: [...v.stats, { n: '', suffix: '', l: '' }] })}>+ Add stat</button>
      </div>
    </>
  );
}

function WorkEditor({ v, on }: { v: Content['work']; on: (x: Content['work']) => void }) {
  return (
    <>
      <Heading title="Work intro" lede="Headings shown above the project grid." />
      <div className="row-2">
        <Text label="Section number" value={v.sectionNum} onChange={(x) => on({ ...v, sectionNum: x })} />
        <Text label="Section title (HTML)" value={v.sectionTitle} onChange={(x) => on({ ...v, sectionTitle: x })} />
      </div>
      <TextArea label="Section meta" value={v.sectionMeta} onChange={(x) => on({ ...v, sectionMeta: x })} rows={2} />
      <TextArea label="Footer note (HTML)" value={v.footNote} onChange={(x) => on({ ...v, footNote: x })} rows={2} />
    </>
  );
}

function ProjectsEditor({ v, on }: { v: Project[]; on: (x: Project[]) => void }) {
  return (
    <>
      <Heading title="Projects / Case studies" lede="Each project gets a card on the home page and a /work/[slug] route." />
      {v.map((p, i) => (
        <ProjectCard key={p.id + i} index={i} total={v.length} project={p}
          onChange={(np) => on(v.map((y, j) => j === i ? np : y))}
          onDelete={() => on(v.filter((_, j) => j !== i))}
          onMove={(dir) => {
            const j = i + dir;
            if (j < 0 || j >= v.length) return;
            const next = [...v];
            [next[i], next[j]] = [next[j], next[i]];
            on(next);
          }}
        />
      ))}
      <button className="add-btn" onClick={() => on([...v, emptyProject()])}>+ Add project</button>
    </>
  );
}

function ProjectCard({
  project, index, total, onChange, onDelete, onMove,
}: {
  project: Project; index: number; total: number;
  onChange: (p: Project) => void; onDelete: () => void; onMove: (dir: -1 | 1) => void;
}) {
  const p = project;
  const setStack = (s: string) => onChange({ ...p, stack: s.split(',').map((x) => x.trim()).filter(Boolean) });
  return (
    <div className="card">
      <div className="card-head">
        <span className="ix">PROJECT {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <h3>{p.name || '(untitled)'}</h3>
        <div className="card-actions">
          <button className="btn-mini" disabled={index === 0} onClick={() => onMove(-1)}>↑</button>
          <button className="btn-mini" disabled={index === total - 1} onClick={() => onMove(1)}>↓</button>
          <button className="btn-mini danger" onClick={onDelete}>Delete</button>
        </div>
      </div>
      <div className="row-2">
        <Text label="ID (internal)" value={p.id} onChange={(x) => onChange({ ...p, id: x })} />
        <Text label="Slug (URL)" value={p.slug} onChange={(x) => onChange({ ...p, slug: x })} help={`Will live at /work/${p.slug}`} />
      </div>
      <div className="row-2">
        <Text label="Name" value={p.name} onChange={(x) => onChange({ ...p, name: x })} />
        <Text label="Label (badge)" value={p.label} onChange={(x) => onChange({ ...p, label: x })} />
      </div>
      <TextArea label="Description (card)" value={p.description} onChange={(x) => onChange({ ...p, description: x })} rows={2} />
      <div className="row-3">
        <Text label="Role" value={p.role} onChange={(x) => onChange({ ...p, role: x })} />
        <Text label="Year" value={p.year} onChange={(x) => onChange({ ...p, year: x })} />
        <Text label="Client" value={p.client} onChange={(x) => onChange({ ...p, client: x })} />
      </div>
      <Text label="Stack (comma-separated)" value={p.stack.join(', ')} onChange={setStack} />
      <div className="row-2">
        <Text label="Live URL" value={p.liveUrl} onChange={(x) => onChange({ ...p, liveUrl: x })} />
        <Text label="Thumbnail path" value={p.thumbnail ?? ''} onChange={(x) => onChange({ ...p, thumbnail: x || null })} help="Optional. e.g. /assets/aurora.jpg" />
      </div>
      <h4 style={{ fontSize: 11, color: 'var(--fg-fade)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 22 }}>Case study</h4>
      <div className="row-2">
        <Text label="Kicker" value={p.kicker} onChange={(x) => onChange({ ...p, kicker: x })} />
        <Text label="Duration" value={p.duration ?? ''} onChange={(x) => onChange({ ...p, duration: x })} />
      </div>
      <TextArea label="Summary (HTML)" value={p.summary} onChange={(x) => onChange({ ...p, summary: x })} rows={3} />
      <TextArea label="Problem" value={p.problem} onChange={(x) => onChange({ ...p, problem: x })} rows={3} />
      <TextArea label="Approach" value={p.approach} onChange={(x) => onChange({ ...p, approach: x })} rows={3} />
      <TextArea label="Solution" value={p.solution} onChange={(x) => onChange({ ...p, solution: x })} rows={3} />
      <TextArea label="Outcome (HTML)" value={p.outcome} onChange={(x) => onChange({ ...p, outcome: x })} rows={3} />
    </div>
  );
}

function SkillsEditor({ v, on }: { v: Content['skills']; on: (x: Content['skills']) => void }) {
  return (
    <>
      <Heading title="Skills" />
      <div className="row-2">
        <Text label="Section number" value={v.sectionNum} onChange={(x) => on({ ...v, sectionNum: x })} />
        <Text label="Section title (HTML)" value={v.sectionTitle} onChange={(x) => on({ ...v, sectionTitle: x })} />
      </div>
      <Text label="Section meta" value={v.sectionMeta} onChange={(x) => on({ ...v, sectionMeta: x })} />
      {v.rows.map((r, i) => (
        <div key={i} className="card">
          <div className="card-head">
            <span className="ix">{r.n}</span>
            <h3>{r.items.join(' · ') || '(empty)'}</h3>
            <div className="card-actions">
              <button className="btn-mini danger" onClick={() => on({ ...v, rows: v.rows.filter((_, j) => j !== i) })}>Remove</button>
            </div>
          </div>
          <div className="row-2">
            <Text label="Index" value={r.n} onChange={(x) => on({ ...v, rows: v.rows.map((y, j) => j === i ? { ...y, n: x } : y) })} />
            <Text label="Items (comma-separated)" value={r.items.join(', ')} onChange={(x) => on({ ...v, rows: v.rows.map((y, j) => j === i ? { ...y, items: x.split(',').map((s) => s.trim()).filter(Boolean) } : y) })} />
          </div>
          <Text label="Context (right-side note)" value={r.context} onChange={(x) => on({ ...v, rows: v.rows.map((y, j) => j === i ? { ...y, context: x } : y) })} />
        </div>
      ))}
      <button className="add-btn" onClick={() => on({ ...v, rows: [...v.rows, { n: String(v.rows.length + 1).padStart(2, '0'), items: [], context: '' }] })}>+ Add row</button>
    </>
  );
}

function ExperienceEditor({ v, on }: { v: Content['experience']; on: (x: Content['experience']) => void }) {
  return (
    <>
      <Heading title="Experience" />
      <div className="row-2">
        <Text label="Section number" value={v.sectionNum} onChange={(x) => on({ ...v, sectionNum: x })} />
        <Text label="Section title (HTML)" value={v.sectionTitle} onChange={(x) => on({ ...v, sectionTitle: x })} />
      </div>
      <Text label="Section meta" value={v.sectionMeta} onChange={(x) => on({ ...v, sectionMeta: x })} />
      {v.rows.map((r, i) => (
        <div key={i} className="card">
          <div className="card-head">
            <span className="ix">{r.date}</span>
            <h3>{r.role || '(untitled)'}</h3>
            <div className="card-actions">
              <button className="btn-mini danger" onClick={() => on({ ...v, rows: v.rows.filter((_, j) => j !== i) })}>Remove</button>
            </div>
          </div>
          <Check label="Current role" checked={r.current} onChange={(x) => on({ ...v, rows: v.rows.map((y, j) => j === i ? { ...y, current: x } : y) })} />
          <div className="row-2">
            <Text label="Date range" value={r.date} onChange={(x) => on({ ...v, rows: v.rows.map((y, j) => j === i ? { ...y, date: x } : y) })} />
            <Text label="Tag" value={r.tag} onChange={(x) => on({ ...v, rows: v.rows.map((y, j) => j === i ? { ...y, tag: x } : y) })} />
          </div>
          <div className="row-2">
            <Text label="Role" value={r.role} onChange={(x) => on({ ...v, rows: v.rows.map((y, j) => j === i ? { ...y, role: x } : y) })} />
            <Text label="Org" value={r.org} onChange={(x) => on({ ...v, rows: v.rows.map((y, j) => j === i ? { ...y, org: x } : y) })} />
          </div>
          <TextArea label="Description" value={r.desc} onChange={(x) => on({ ...v, rows: v.rows.map((y, j) => j === i ? { ...y, desc: x } : y) })} rows={2} />
        </div>
      ))}
      <button className="add-btn" onClick={() => on({ ...v, rows: [...v.rows, { current: false, date: '', role: '', org: '', desc: '', tag: '' }] })}>+ Add role</button>
    </>
  );
}

function TestimonialsEditor({ v, on }: { v: Content['testimonials']; on: (x: Content['testimonials']) => void }) {
  return (
    <>
      <Heading title="Testimonials" />
      <div className="row-2">
        <Text label="Section number" value={v.sectionNum} onChange={(x) => on({ ...v, sectionNum: x })} />
        <Text label="Section title (HTML)" value={v.sectionTitle} onChange={(x) => on({ ...v, sectionTitle: x })} />
      </div>
      <Text label="Section meta" value={v.sectionMeta} onChange={(x) => on({ ...v, sectionMeta: x })} />
      {v.quotes.map((q, i) => (
        <div key={i} className="card">
          <div className="card-head">
            <span className="ix">QUOTE {String(i + 1).padStart(2, '0')}</span>
            <h3>{q.name || '(unnamed)'}</h3>
            <div className="card-actions">
              <button className="btn-mini danger" onClick={() => on({ ...v, quotes: v.quotes.filter((_, j) => j !== i) })}>Remove</button>
            </div>
          </div>
          <TextArea label="Quote" value={q.quote} onChange={(x) => on({ ...v, quotes: v.quotes.map((y, j) => j === i ? { ...y, quote: x } : y) })} rows={3} />
          <div className="row-3">
            <Text label="Name" value={q.name} onChange={(x) => on({ ...v, quotes: v.quotes.map((y, j) => j === i ? { ...y, name: x } : y) })} />
            <Text label="Title" value={q.title} onChange={(x) => on({ ...v, quotes: v.quotes.map((y, j) => j === i ? { ...y, title: x } : y) })} />
            <Text label="Meta" value={q.meta} onChange={(x) => on({ ...v, quotes: v.quotes.map((y, j) => j === i ? { ...y, meta: x } : y) })} />
          </div>
        </div>
      ))}
      <button className="add-btn" onClick={() => on({ ...v, quotes: [...v.quotes, { quote: '', name: '', title: '', meta: '' }] })}>+ Add quote</button>
    </>
  );
}

function ContactEditor({ v, on }: { v: Content['contact']; on: (x: Content['contact']) => void }) {
  return (
    <>
      <Heading title="Contact" />
      <Text label="Section number" value={v.sectionNum} onChange={(x) => on({ ...v, sectionNum: x })} />
      <TextArea label="Headline (HTML)" value={v.headline} onChange={(x) => on({ ...v, headline: x })} rows={2} help="Use <em>…</em> for italic accent and <br> to break lines." />
      <TextArea label="Lead copy" value={v.leadCopy} onChange={(x) => on({ ...v, leadCopy: x })} rows={2} />
      <Text label="Hours" value={v.hours} onChange={(x) => on({ ...v, hours: x })} />
    </>
  );
}

function SocialEditor({ v, on }: { v: Content['social']; on: (x: Content['social']) => void }) {
  return (
    <>
      <Heading title="Social links" />
      {v.map((s, i) => (
        <div key={i} className="row-2" style={{ alignItems: 'flex-end' }}>
          <Text label="Label" value={s.label} onChange={(x) => on(v.map((y, j) => j === i ? { ...y, label: x } : y))} />
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
            <div style={{ flex: 1 }}>
              <Text label="URL" value={s.url} onChange={(x) => on(v.map((y, j) => j === i ? { ...y, url: x } : y))} />
            </div>
            <button className="btn-mini danger" onClick={() => on(v.filter((_, j) => j !== i))} style={{ marginBottom: 18 }}>Remove</button>
          </div>
        </div>
      ))}
      <button className="add-btn" onClick={() => on([...v, { label: '', url: '' }])}>+ Add link</button>
    </>
  );
}

function FooterEditor({ v, on }: { v: Content['footer']; on: (x: Content['footer']) => void }) {
  return (
    <>
      <Heading title="Footer" />
      <Text label="Copyright" value={v.copyright} onChange={(x) => on({ ...v, copyright: x })} />
      <Text label="Last updated" value={v.lastUpdated} onChange={(x) => on({ ...v, lastUpdated: x })} />
      <div className="card">
        <div className="card-head"><h3>Colophon lines</h3></div>
        {v.colophon.map((c, i) => (
          <div key={i} className="row-2" style={{ alignItems: 'flex-end' }}>
            <Text label={`Line ${i + 1}`} value={c} onChange={(x) => on({ ...v, colophon: v.colophon.map((y, j) => j === i ? x : y) })} />
            <button className="btn-mini danger" onClick={() => on({ ...v, colophon: v.colophon.filter((_, j) => j !== i) })} style={{ marginBottom: 18 }}>Remove</button>
          </div>
        ))}
        <button className="add-btn" onClick={() => on({ ...v, colophon: [...v.colophon, ''] })}>+ Add line</button>
      </div>
    </>
  );
}

function MarqueeEditor({ v, on }: { v: string[]; on: (x: string[]) => void }) {
  const [text, setText] = useState(useMemo(() => v.join('\n'), [v]));
  useEffect(() => { setText(v.join('\n')); }, [v]);
  return (
    <>
      <Heading title="Marquee" lede="One word/phrase per line. Even-indexed items render in italic serif." />
      <div className="field">
        <label>Items</label>
        <textarea
          rows={10}
          value={text}
          onChange={(e) => { setText(e.target.value); on(e.target.value.split('\n').map((s) => s.trim()).filter(Boolean)); }}
        />
      </div>
    </>
  );
}
