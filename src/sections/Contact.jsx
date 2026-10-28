import { MapPin, Phone, Clock } from 'lucide-react'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { GlowLines } from '../components/GlowLines'
import { contactInfo } from '../data/contactInfo'

// No public email address yet, so there is deliberately no E-pasts row here — only add one back
// once contactInfo.email actually exists.
const rows = [
  { icon: MapPin, label: 'Adrese', value: contactInfo.address },
  { icon: Phone, label: 'Telefons', value: contactInfo.phone, href: contactInfo.telHref },
  { icon: Clock, label: 'Darba laiks', hours: contactInfo.hours },
]

// Geocoding the free-text STREET address (`q=<address>`) turned out to be unreliable with
// this key-less embed: the "5-k-2" building/block suffix occasionally fails to geocode at all,
// and Google silently falls back to a fully zoomed-out world map instead of showing an error.
// Querying by the BUSINESS NAME instead (PONTONS's real, verified Google Business listing) is
// what actually fixes that *and* is what makes the embed clickable: only a query that resolves
// to a real place card gives the marker a working info popup and makes "Atvērt pakalpojumā
// Maps" open that place's own listing page — a bare lat/lng pin can't do either, since it isn't
// tied to any place ID.
const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pontons, dāmu un kungu frizētava, Jūrmala'
)}&z=17&output=embed`

export function Contact() {
  return (
    <section id="kontakti" className="relative overflow-hidden py-24 md:py-32">
      <GlowLines />
      <Container>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>Kontakti</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ivory sm:text-5xl">
                PONTONS
              </h2>
              <p className="mt-1 font-display text-sm text-muted">Dāmu un kungu frizētava</p>
            </Reveal>

            <Reveal delay={0.16} className="mt-9 flex flex-col gap-5">
              {rows.map(({ icon: Icon, label, value, href, hours }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent-2">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-display text-xs uppercase tracking-wider text-muted">{label}</p>
                    {hours ? (
                      <dl className="mt-0.5 flex flex-col gap-0.5">
                        {hours.map((row) => (
                          <div key={row.days} className="flex items-baseline gap-2 text-sm">
                            <dt className="text-ivory/60">{row.days}</dt>
                            <dd className="text-ivory/85">{row.time}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : href ? (
                      <a href={href} className="mt-0.5 block text-sm text-ivory/85 transition-colors hover:text-accent-2">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm text-ivory/85">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="aspect-square w-full overflow-hidden rounded-3xl border border-line sm:aspect-video lg:aspect-auto lg:h-full">
              <iframe
                title="PONTONS atrašanās vieta kartē"
                src={mapEmbedSrc}
                // `grayscale` would strip the pin's red hue entirely before `invert` even runs —
                // this map has no API key, so there's no dark map style to request instead.
                // `invert + hue-rotate(180deg)` is the standard technique for dark-mode map
                // embeds: it inverts lightness (dark background, light roads) while the 180°
                // hue rotation approximately undoes the hue shift invert causes, so the native
                // Google Maps pin stays red instead of turning cyan. The marker itself is
                // Google's own, rendered server-side and geo-anchored — it stays correctly
                // placed through any zoom/pan, unlike a CSS overlay would.
                className="h-full w-full invert hue-rotate-180 saturate-[65%] contrast-[.9]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
