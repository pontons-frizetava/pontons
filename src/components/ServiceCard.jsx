import { ArrowUpRight } from 'lucide-react'
import { Media } from './Media'

export function ServiceCard({ icon: Icon, title, description, image, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-accent/25 bg-ink-soft text-left shadow-[0_0_20px_2px_rgba(47,125,255,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_0_30px_4px_rgba(47,125,255,0.25)]"
    >
      <Media
        src={image}
        alt={title}
        overlay
        className="h-64 w-full"
        imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <span className="absolute inset-0 rounded-3xl opacity-0 shadow-[0_0_40px_6px_rgba(47,125,255,0.25)] transition-opacity duration-500 group-hover:opacity-100" />

      <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-ink/60 text-accent-2 backdrop-blur-sm">
        <Icon size={19} strokeWidth={1.75} />
      </span>

      <div className="relative flex flex-1 items-center justify-between gap-3 p-6">
        <div>
          <h3 className="font-display text-lg font-semibold text-ivory">{title}</h3>
          <p className="mt-1 text-sm text-muted">{description}</p>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ivory/70 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:text-accent-2">
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </button>
  )
}
