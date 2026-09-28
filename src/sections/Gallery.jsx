import { useState } from 'react'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { GalleryItem } from '../components/GalleryItem'
import { Lightbox } from '../components/Lightbox'
import { galleryItems } from '../data/gallery'

export function Gallery() {
  const [index, setIndex] = useState(null)

  const navigate = (delta) => {
    setIndex((current) => (current + delta + galleryItems.length) % galleryItems.length)
  }

  return (
    <section id="galerija" className="relative py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow center>Galerija</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ivory sm:text-5xl">
              Mūsu darbnīca tuvplānā
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-4">
          {galleryItems.map((item, i) => (
            <GalleryItem key={item.id} {...item} onOpen={() => setIndex(i)} />
          ))}
        </Reveal>
      </Container>

      <Lightbox items={galleryItems} index={index} onClose={() => setIndex(null)} onNavigate={navigate} />
    </section>
  )
}
