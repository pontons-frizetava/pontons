import { Phone, Award, HeartHandshake, Sparkle } from 'lucide-react'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { Media } from '../components/Media'
import { Button } from '../components/Button'
import { openCallModal } from '../lib/callModal'

const values = [
  { icon: Award, label: 'Profesionalitāte' },
  { icon: Sparkle, label: 'Kvalitāte' },
  { icon: HeartHandshake, label: 'Individualitāte' },
]

export function About() {
  return (
    <section id="par-mums" className="relative py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full bg-accent/20 blur-[70px]" />
            <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border border-accent/25" />
            <Media
              src="/images/about-interior.jpg"
              alt="Pontons frizētavas interjers"
              overlay
              className="relative aspect-[4/5] w-full rounded-3xl border border-line"
            />
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>Par Pontons</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ivory sm:text-5xl">
                Stils, kas runā tavā vārdā
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-balance mt-6 max-w-lg text-base leading-relaxed text-muted">
                PONTONS ir dāmu un kungu frizētava, kur profesionāls serviss, kvalitāte un individuāla
                pieeja satiekas ar modernu stilu.
              </p>
            </Reveal>

            <Reveal delay={0.24} className="mt-9 grid grid-cols-3 gap-3">
              {values.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-white/[0.03] px-3 py-5 text-center"
                >
                  <Icon size={20} strokeWidth={1.75} className="text-accent-2" />
                  <span className="font-display text-xs font-medium text-ivory/80">{label}</span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.32}>
              <Button as="button" onClick={openCallModal} icon={Phone} className="mt-9">
                Zvanīt
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
