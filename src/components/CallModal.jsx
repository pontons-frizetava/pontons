import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Phone } from 'lucide-react'
import { contactInfo } from '../data/contactInfo'
import { OPEN_CALL_MODAL_EVENT } from '../lib/callModal'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

const formatPhone = (p) => `${p.slice(0, 2)} ${p.slice(2, 5)} ${p.slice(5)}`

export function CallModal() {
  const [open, setOpen] = useState(false)
  useLockBodyScroll(open)

  useEffect(() => {
    const show = () => setOpen(true)
    window.addEventListener(OPEN_CALL_MODAL_EVENT, show)
    return () => window.removeEventListener(OPEN_CALL_MODAL_EVENT, show)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-3xl border border-line bg-ink-soft p-8 text-center"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Aizvērt"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink/60 text-white transition-colors hover:border-accent/50 hover:text-accent-2"
            >
              <X size={18} />
            </button>

            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent-2">
              <Phone size={24} strokeWidth={1.75} />
            </span>
            <p className="mt-5 text-sm text-muted">Lai pierakstītos, zvani uz numuru</p>
            <a
              href={contactInfo.telHref}
              className="mt-2 block font-display text-4xl font-bold tracking-wide text-ivory transition-colors hover:text-accent-2"
            >
              {formatPhone(contactInfo.phone)}
            </a>
            <a
              href={contactInfo.telHref}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-2"
            >
              <Phone size={16} strokeWidth={2.25} />
              Zvanīt tagad
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
