export function Eyebrow({ children, center = false }) {
  return (
    <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <span className="h-px w-8 bg-accent" />
      <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-accent-2">
        {children}
      </span>
    </div>
  )
}
