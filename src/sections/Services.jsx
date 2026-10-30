import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Container } from '../components/Container'
import { GlowLines } from '../components/GlowLines'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { ServiceCard } from '../components/ServiceCard'
import { ServiceModal } from '../components/ServiceModal'
import { services } from '../data/services'
import { servicesEn } from '../i18n/content.en'
import { translateList } from '../i18n/translate'
import { useT } from '../i18n/ui'
import { useLanguage } from '../lib/LanguageContext'

export function Services() {
  const [activeService, setActiveService] = useState(null)
  const t = useT()
  const { language } = useLanguage()
  const translatedServices = translateList(services, servicesEn, language)

  return (
    <section id="pakalpojumi" className="relative overflow-hidden py-24 md:py-32">
      <GlowLines />
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>{t.services.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ivory sm:text-5xl">
                {t.services.heading}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <a
              href="#cenradis"
              className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-accent-2 transition-colors hover:text-white"
            >
              {t.services.viewAll}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {translatedServices.map((service, i) => (
            <Reveal key={service.id} delay={0.06 * i}>
              <ServiceCard {...service} onOpen={() => setActiveService(service)} />
            </Reveal>
          ))}
        </div>
      </Container>

      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </section>
  )
}
