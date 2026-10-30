import { Container } from './Container'
import { Logo } from './Logo'
import { navLinks } from '../data/navLinks'
import { socials } from '../data/socials'
import { navLinksEn } from '../i18n/content.en'
import { useT } from '../i18n/ui'
import { useLanguage } from '../lib/LanguageContext'

export function Footer() {
  const t = useT()
  const { language } = useLanguage()
  const label = (link) => (language === 'en' ? navLinksEn[link.href] : link.label)

  return (
    <footer className="relative border-t border-line pb-8 pt-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">{t.footer.tagline}</p>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.25em] text-white/40">{t.footer.navigation}</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-accent-2">
                    {label(link)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.25em] text-white/40">{t.footer.services}</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {t.footer.servicesList.map((label) => (
                <li key={label}>
                  <a href="#pakalpojumi" className="text-sm text-muted transition-colors hover:text-accent-2">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.25em] text-white/40">{t.footer.socials}</p>
            <div className="mt-4 flex gap-3">
              {socials.map(({ id, label, href, icon: Icon }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ivory/70 transition-colors hover:border-accent/50 hover:text-accent-2"
                >
                  <Icon size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-white/35 sm:flex-row">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.tagline2}</p>
        </div>
      </Container>
    </footer>
  )
}
