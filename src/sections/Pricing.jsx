import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Percent, Phone, Sparkles } from 'lucide-react'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { PriceCard } from '../components/PriceCard'
import { priceCategories } from '../data/priceList'
import { priceCategoriesEn } from '../i18n/content.en'
import { translateCategories } from '../i18n/translate'
import { useT } from '../i18n/ui'
import { useLanguage } from '../lib/LanguageContext'

function PhoneNote({ icon: Icon = Phone, children, phone }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-2 rounded-2xl border border-accent/25 bg-accent/5 px-4 py-3 text-sm text-ivory/85">
      <Icon size={16} className="shrink-0 text-accent-2" />
      <span>{children}</span>
      {phone && (
        <a href={`tel:+371${phone}`} className="font-display font-semibold text-accent-2 hover:text-white">
          {phone.slice(0, 2)} {phone.slice(2, 5)} {phone.slice(5)}
        </a>
      )}
    </div>
  )
}

export function Pricing() {
  const [activeCategory, setActiveCategory] = useState('visi')
  const t = useT()
  const { language } = useLanguage()
  const categories = translateCategories(priceCategories, priceCategoriesEn, language)

  const tabs = [{ id: 'visi', label: t.pricing.tabAll }, ...categories.map((c) => ({ id: c.id, label: c.label }))]
  const visibleCategories =
    activeCategory === 'visi' ? categories : categories.filter((c) => c.id === activeCategory)

  return (
    <section id="cenradis" className="relative py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow center>{t.pricing.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ivory sm:text-5xl">
              {t.pricing.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-base text-muted">{t.pricing.subtitle}</p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-12 -mx-6 overflow-x-auto px-6 md:mx-0 md:overflow-visible md:px-0">
          <div className="flex w-max gap-2 md:w-full md:flex-wrap md:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`shrink-0 rounded-full border px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
                  activeCategory === tab.id
                    ? 'border-accent bg-accent/15 text-accent-2 shadow-[0_0_20px_rgba(47,125,255,0.25)]'
                    : 'border-line text-ivory/70 hover:border-accent/40 hover:text-ivory'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 space-y-16"
          >
            {visibleCategories.map((category) => (
              <div key={category.id} id={category.id}>
                <h3 className="font-display text-2xl font-bold text-ivory">{category.label}</h3>

                <div className="mt-5">
                  {category.promo && (
                    <div className="mb-6 rounded-2xl border border-accent/25 bg-accent/5 px-5 py-4">
                      <p className="flex items-center gap-2 font-display text-sm font-semibold text-accent-2">
                        <Sparkles size={15} />
                        {category.promo.title}
                      </p>
                      {category.promo.lines.map((line) => (
                        <p key={line} className="mt-1 text-sm text-ivory/80">
                          {line}
                        </p>
                      ))}
                    </div>
                  )}

                  {category.discount && (
                    <PhoneNote icon={Percent} phone={category.phone}>
                      {category.discount}
                      {category.phone && ` ${t.pricing.booking}`}
                    </PhoneNote>
                  )}

                  {!category.discount && category.note && (
                    <PhoneNote phone={category.phone}>{category.note}</PhoneNote>
                  )}

                  {!category.discount && !category.note && category.phone && (
                    <PhoneNote phone={category.phone}>{t.pricing.booking}</PhoneNote>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {category.services.map((service) => (
                    <PriceCard
                      key={service.id}
                      service={service}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
