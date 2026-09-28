import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { Button } from './Button'
import { openCallModal } from '../lib/callModal'
import { Container } from './Container'
import { navLinks } from '../data/navLinks'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

export function Navbar() {
  const scrolled = useScrollPosition(30)
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(navLinks.map((l) => l.href.slice(1)))
  useLockBodyScroll(open)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl transition-all duration-500 md:px-6 ${
            scrolled
              ? 'border-line bg-ink/80 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
              : 'border-white/5 bg-white/[0.03]'
          }`}
        >
          <a href="#sakums" className="shrink-0">
            <Logo />
          </a>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-display text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-accent-2' : 'text-ivory/75 hover:text-ivory'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          <div className="hidden lg:block">
            <Button as="button" onClick={openCallModal} icon={Phone} className="!px-6 !py-2.5 text-[13px]">
              Zvanīt
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Aizvērt izvēlni' : 'Atvērt izvēlni'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ivory lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-3 rounded-3xl border border-line bg-ink-soft/95 p-6 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-display text-base font-medium text-ivory/85 transition-colors hover:bg-white/5 hover:text-accent-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Button
              as="button"
              icon={Phone}
              onClick={() => {
                setOpen(false)
                openCallModal()
              }}
              className="mt-4 w-full"
            >
              Zvanīt
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
