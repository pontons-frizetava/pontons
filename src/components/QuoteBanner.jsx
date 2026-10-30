import { Quote } from 'lucide-react'
import { Container } from './Container'
import { Reveal } from './Reveal'
import { useT } from '../i18n/ui'

export function QuoteBanner() {
  const t = useT()
  return (
    <section className="relative border-y border-line py-16">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <Quote size={26} className="text-accent" strokeWidth={1.5} />
          <p className="font-display text-2xl font-medium text-ivory sm:text-3xl">{t.quote.text}</p>
          <span className="h-px w-10 bg-accent/50" />
          <p className="font-display text-xs uppercase tracking-[0.3em] text-muted">{t.quote.team}</p>
        </Reveal>
      </Container>
    </section>
  )
}
