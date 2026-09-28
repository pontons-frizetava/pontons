import { socials } from '../data/socials'

export function SocialRail() {
  return (
    <div className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-5 lg:flex">
      <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-white/80 [writing-mode:vertical-rl]">
        Seko mums
      </span>
      <span className="h-14 w-px bg-white/30" />
      {socials.map(({ id, label, href, icon: Icon }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/[0.06] text-white/90 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-accent/60 hover:bg-accent/15 hover:text-accent-2"
        >
          <Icon size={28} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  )
}
