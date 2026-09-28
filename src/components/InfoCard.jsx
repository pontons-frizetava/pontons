export function InfoCard({ icon: Icon, title, description }) {
  return (
    <div className="flex items-center gap-3.5 rounded-2xl border border-line bg-white/[0.03] px-4 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-accent/30 hover:bg-white/[0.05]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent-2">
        <Icon size={19} strokeWidth={1.75} />
      </span>
      <div>
        <p className="font-display text-sm font-semibold text-ivory">{title}</p>
        <p className="text-xs text-muted">{description}</p>
      </div>
    </div>
  )
}
