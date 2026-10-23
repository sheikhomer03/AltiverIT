/** Stacked brand triangles anchored to the bottom-right of a relative, isolated parent. */
export function CornerAccent() {
  return (
    <>
      <span
        aria-hidden
        className="absolute right-0 bottom-0 -z-10 hidden h-40 w-56 bg-brand-600 [clip-path:polygon(100%_0,100%_100%,0_100%)] lg:block"
      />
      <span
        aria-hidden
        className="absolute right-0 bottom-0 -z-10 hidden h-20 w-28 bg-ink-900 [clip-path:polygon(100%_0,100%_100%,0_100%)] lg:block"
      />
    </>
  );
}
