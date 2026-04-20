'use client';
import { useEffect, useState } from 'react';

export function HeroTyping({
  command,
  before,
  after,
}: {
  command: string;
  before: string;
  after: string;
}) {
  const [cmd, setCmd] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [namePart, setNamePart] = useState('');
  const [italicPart, setItalicPart] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setCmd(command);
      setShowCursor(false);
      setNamePart(before);
      setItalicPart(after);
      return;
    }
    let i = 0, j = 0, k = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const typeCmd = () => {
      if (i <= command.length) {
        setCmd(command.slice(0, i++));
        timeouts.push(setTimeout(typeCmd, 55 + Math.random() * 40));
      } else {
        setShowCursor(false);
        timeouts.push(setTimeout(typeName, 350));
      }
    };
    const typeName = () => {
      if (j <= before.length) {
        setNamePart(before.slice(0, j++));
        timeouts.push(setTimeout(typeName, 85 + Math.random() * 35));
      } else {
        timeouts.push(setTimeout(typeItalic, 100));
      }
    };
    const typeItalic = () => {
      if (k <= after.length) {
        setItalicPart(after.slice(0, k++));
        timeouts.push(setTimeout(typeItalic, 85 + Math.random() * 35));
      }
    };
    timeouts.push(setTimeout(typeCmd, 250));
    return () => timeouts.forEach(clearTimeout);
  }, [command, before, after]);

  return (
    <>
      <div className="terminal-line reveal">
        <span className="prompt">noman@dhaka:~$</span> <span>{cmd}</span>
        {showCursor && <span className="cursor" />}
      </div>
      <h1 className="hero-name">
        <span>{namePart}</span>
        <span className="accent-italic">{italicPart}</span>
        <span className="hero-caret" />
      </h1>
    </>
  );
}
