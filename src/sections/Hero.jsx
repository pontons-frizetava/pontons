import { lazy, Suspense } from 'react'
import { Phone, ArrowRight, Users, Gem, MapPin, Clock3 } from 'lucide-react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { openCallModal } from '../lib/callModal'
import { InfoCard } from '../components/InfoCard'
import { Media } from '../components/Media'
import { Reveal } from '../components/Reveal'
import { ScrollMouse } from '../components/ScrollMouse'

// Three.js + R3F are heavy — load them only once the browser is idle after first paint.
const ScissorsCanvas = lazy(() =>
  import('../components/scissors/ScissorsCanvas').then((m) => ({ default: m.ScissorsCanvas }))
)

const infoCards = [
  { icon: Users, title: 'Profesionāla komanda', description: 'Pieredzējuši meistari' },
  { icon: Gem, title: 'Kvalitatīvi rezultāti', description: 'Individuāla pieeja' },
  { icon: MapPin, title: 'Ērta atrašanās vieta', description: 'Viegli atrast' },
  { icon: Clock3, title: 'Ērts pieraksts', description: 'Zvani un piesakies' },
]

export function Hero() {
  return (
    <section
      id="sakums"
      className="relative isolate flex min-h-screen w-full flex-col overflow-hidden pt-28 pb-10 md:pt-32"
    >
      <div className="absolute inset-0 -z-20">
        <Media
          src="/images/hero-interior.jpg"
          alt="Pontons frizētavas interjers"
          className="h-full w-full"
          imgClassName="opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
        <div className="absolute inset-0 [box-shadow:inset_0_0_180px_70px_rgba(5,7,10,0.85)]" />
        <div className="bg-noise animate-grain absolute inset-0" />
      </div>

      <div className="pointer-events-none absolute -left-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <Container className="flex flex-1 flex-col">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-2 lg:gap-6">
          <div className="relative z-10 max-w-xl">
            <Reveal>
              <span className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent-2">
                Dāmu un kungu frizētava
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-3">
                <img
                  src="/images/logo.png"
                  alt="PONTONS"
                  className="h-auto w-[235px] drop-shadow-[0_0_28px_rgba(47,125,255,0.35)] sm:w-[305px] md:w-[375px]"
                />
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 font-display text-xl font-medium text-white/85 sm:text-2xl">
                Tavs stils — mūsu darbs.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="text-balance mt-4 max-w-md text-base leading-relaxed text-muted">
                Profesionāla frizieru komanda, moderns stils un individuāla pieeja katram klientam.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button as="button" onClick={openCallModal} icon={Phone}>
                  Zvanīt
                </Button>
                <Button href="#pakalpojumi" variant="secondary" icon={ArrowRight}>
                  Apskatīt pakalpojumus
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="relative z-0 order-first h-[280px] sm:h-[380px] lg:order-last lg:h-[560px]">
            <Suspense fallback={null}>
              <ScissorsCanvas />
            </Suspense>
          </div>
        </div>

        <Reveal
          delay={0.1}
          className="relative z-10 mt-10 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-4 md:gap-4"
        >
          {infoCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </Reveal>
      </Container>

      <a
        href="#pakalpojumi"
        className="relative z-10 mx-auto mt-10 hidden flex-col items-center gap-2 text-white/40 transition-colors hover:text-accent-2 md:flex"
      >
        <span className="font-display text-[10px] uppercase tracking-[0.3em]">Ritini lejup</span>
        <ScrollMouse className="text-current" />
      </a>
    </section>
  )
}
