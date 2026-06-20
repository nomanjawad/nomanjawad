import type { Identity, Project, Social } from '@/lib/types';

export function Sidebar({
  identity,
  projects,
  social,
}: {
  identity: Identity;
  projects: Project[];
  social: Social[];
}) {
  return (
    <aside className="sidebar" aria-label="File tree navigation">
      <div className="side-head">
        <div className="monogram"><i style={{ fontStyle: 'italic' }}>n</i></div>
        <div className="meta">
          <b>noman_jawad</b>
          <span>v4.0.0 · portfolio</span>
        </div>
        {identity.availableNow && <span className="status-dot" aria-hidden="true" />}
      </div>
      <nav className="tree" aria-label="Sections">
        <div className="tree-section">Workspace</div>
        <ul>
          <li className="folder open">
            <div className="row">portfolio</div>
            <ul className="children">
              <li className="folder open">
                <div className="row">sections</div>
                <ul className="children">
                  <li className="file active" data-jump="hero"><div className="row">hero<span className="ext">.tsx</span></div></li>
                  <li className="file" data-jump="about"><div className="row">about<span className="ext">.tsx</span></div></li>
                  <li className="file" data-jump="work"><div className="row">work<span className="ext">.tsx</span></div></li>
                  <li className="file" data-jump="skills"><div className="row">skills<span className="ext">.tsx</span></div></li>
                  <li className="file" data-jump="experience"><div className="row">experience<span className="ext">.tsx</span></div></li>
                  <li className="file" data-jump="contact"><div className="row">contact<span className="ext">.tsx</span></div></li>
                </ul>
              </li>
              <li className="folder">
                <div className="row">case-studies</div>
                <ul className="children">
                  {projects.map((p) => (
                    <li key={p.id} className="file">
                      <div className="row">
                        <a href={`/work/${p.slug}`}>{p.id}<span className="ext">.mdx</span></a>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <div className="tree-section">Links</div>
        <ul>
          <li className="file"><div className="row"><a href={`mailto:${identity.email}`}>email<span className="ext">.mailto</span></a></div></li>
          <li className="file"><div className="row"><a href={identity.cv} target="_blank" rel="noopener noreferrer">cv<span className="ext">.pdf</span></a></div></li>
          {social.map((s) => (
            <li key={s.label} className="file">
              <div className="row">
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.label.toLowerCase()}<span className="ext">.link</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <div className="side-foot">
        <span className="branch">main</span>
        <span className="sep">·</span>
        <span>DHK</span>
        <span className="sep">·</span>
        <span>UTC+6</span>
      </div>
    </aside>
  );
}
