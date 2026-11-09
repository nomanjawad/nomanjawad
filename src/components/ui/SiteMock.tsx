/** A miniature of a built page, drawn with CSS. `cols` controls the card row; `wire` draws it as a Figma-style wireframe. */
export function SiteMock({ cols = 3, wire = false, label }: { cols?: 1 | 2 | 3; wire?: boolean; label?: string }) {
  return (
    <div className={`smock${wire ? ' wire' : ''} c${cols}`} aria-hidden="true">
      {label && <span className="smock-lbl">{label}</span>}
      <div className="smock-nav"><b /><span /><span /><span /><em /></div>
      <div className="smock-hero"><b /><b className="w2" /><em /></div>
      <div className="smock-cards">{Array.from({ length: cols }).map((_, i) => <span key={i} />)}</div>
      <div className="smock-rows"><span /><span /></div>
      {wire && (
        <>
          <i className="smock-h tl" /><i className="smock-h tr" /><i className="smock-h bl" /><i className="smock-h br" />
          <span className="smock-m x">1440 × 900</span>
          <span className="smock-m y">24</span>
        </>
      )}
    </div>
  );
}
