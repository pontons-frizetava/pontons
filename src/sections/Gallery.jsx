import { useState } from 'react'
import { Container } from '../components/Container'
import { GlowLines } from '../components/GlowLines'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { GalleryItem } from '../components/GalleryItem'
import { Lightbox } from '../components/Lightbox'
import { galleryItems } from '../data/gallery'
import { galleryAltEn } from '../i18n/content.en'
import { useT } from '../i18n/ui'
import { useLanguage } from '../lib/LanguageContext'

export function Gallery() {
  const [index, setIndex] = useState(null)
  const t = useT()
  const { language } = useLanguage()
  const translatedItems =
    language === 'en' ? galleryItems.map((item) => ({ ...item, alt: galleryAltEn[item.id] || item.alt })) : galleryItems

  const navigate = (delta) => {
    setIndex((current) => (current + delta + translatedItems.length) % translatedItems.length)
  }

  return (
    <section id="galerija" className="relative overflow-hidden py-24 md:py-32">
      <GlowLines />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow center>{t.gallery.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ivory sm:text-5xl">
              {t.gallery.heading}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-4">
          {translatedItems.map((item, i) => (
            <GalleryItem key={item.id} {...item} onOpen={() => setIndex(i)} />
          ))}
        </Reveal>
      </Container>

      <Lightbox items={translatedItems} index={index} onClose={() => setIndex(null)} onNavigate={navigate} />
    </section>
  )
}
