/**
 * Re-mounts on every navigation, so the CSS-only curtain below replays on
 * each page — a branded ink panel with the name, lifting to reveal the page.
 * Pure CSS: runs before hydration and needs no JS.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div aria-hidden className="page-curtain">
        <span className="page-curtain__name">
          Bobby Singh<span className="text-red">.</span>
        </span>
      </div>
      {children}
    </>
  );
}
