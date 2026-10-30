import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Media } from './Media'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { useT } from '../i18n/ui'

export function Lightbox({ items, index, onClose, onNavigate }) {
  const open = index !== null
  useLockBodyScroll(open)
  const t = useT()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate(1)
      if (e.key === 'ArrowLeft') onNavigate(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, onNavigate])

  const item = open ? items[index] : null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md md:p-10"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={t.common.aizvert}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-line text-ivory transition-colors hover:border-accent/50 hover:text-accent-2"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate(-1)
            }}
            aria-label={t.common.iepriekseja}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line text-ivory transition-colors hover:border-accent/50 hover:text-accent-2 md:left-6"
          >
            <ChevronLeft size={20} />
          </button>

          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-[4/5] w-full max-w-2xl overflow-hidden rounded-2xl border border-line md:aspect-video"
          >
            <Media src={item.image} alt={item.alt} className="h-full w-full" />
          </motion.div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate(1)
            }}
            aria-label={t.common.nakama}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line text-ivory transition-colors hover:border-accent/50 hover:text-accent-2 md:right-6"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
