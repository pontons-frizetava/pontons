// Decorative flowing blue "circuit" lines along the bottom of a section, echoing the hero's
// orbiting accent rings. Pure SVG strokes with a soft blur + glow filter — no images, so it
// scales cleanly and costs nothing to load.
export function GlowLines({ className = '' }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 w-full opacity-70 ${className}`}
      viewBox="0 0 1200 200"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="glowLineFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2f7dff" stopOpacity="0" />
          <stop offset="50%" stopColor="#5aa6ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2f7dff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,150 C200,110 300,190 500,140 C700,90 800,170 1000,120 C1100,95 1150,130 1200,110"
        stroke="url(#glowLineFade)"
        strokeWidth="2"
        className="drop-shadow-[0_0_8px_rgba(90,166,255,0.8)]"
      />
      <path
        d="M0,180 C250,150 350,200 550,170 C750,140 850,190 1050,160 C1120,148 1160,165 1200,155"
        stroke="url(#glowLineFade)"
        strokeWidth="1.5"
        opacity="0.6"
        className="drop-shadow-[0_0_6px_rgba(47,125,255,0.6)]"
      />
    </svg>
  )
}
