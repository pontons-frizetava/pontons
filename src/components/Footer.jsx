import { Container } from './Container'
import { Logo } from './Logo'
import { navLinks } from '../data/navLinks'
import { socials } from '../data/socials'

export function Footer() {
  return (
    <footer className="relative border-t border-line pb-8 pt-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">Dāmu un kungu frizētava.</p>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.25em] text-white/40">Navigācija</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-accent-2">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.25em] text-white/40">Pakalpojumi</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {['Vīriešu matu griezumi', 'Sieviešu matu griezumi', 'Bārda un ūsas', 'Matu krāsošana'].map(
                (label) => (
                  <li key={label}>
                    <a href="#pakalpojumi" className="text-sm text-muted transition-colors hover:text-accent-2">
                      {label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.25em] text-white/40">Sociālie tīkli</p>
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
          <p>© 2026 PONTONS. Visas tiesības aizsargātas.</p>
          <p>Dāmu un kungu frizētava</p>
        </div>
      </Container>
    </footer>
  )
}
