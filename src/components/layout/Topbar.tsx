import { ThemeToggle } from '@/components/client/ThemeToggle';
import { ActiveSectionTracker } from '@/components/client/ActiveSectionTracker';

export function Topbar() {
  return (
    <div className="topbar">
      <div className="tabs">
        <div className="tab active" data-jump="hero">hero<span className="ext">.tsx</span> <span className="close">×</span></div>
        <div className="tab" data-jump="about">about<span className="ext">.tsx</span> <span className="close">×</span></div>
        <div className="tab" data-jump="work">work<span className="ext">.tsx</span> <span className="close">×</span></div>
      </div>
      <div className="topbar-right">
        <button id="cmdTrigger" type="button" className="cmd-trigger" aria-label="Open command palette">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
          </svg>
          <span className="hint">Search commands…</span>
          <span className="kbd">⌘K</span>
        </button>
        <ThemeToggle />
      </div>
      <ActiveSectionTracker />
    </div>
  );
}
