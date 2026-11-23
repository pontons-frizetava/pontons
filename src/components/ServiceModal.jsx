import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Clock3, Tag, Phone, ZoomIn } from 'lucide-react'
import { Media } from './Media'
import { Button } from './Button'
import { openCallModal } from '../lib/callModal'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { useT } from '../i18n/ui'

export function ServiceModal({ service, onClose }) {
  const open = Boolean(service)
  const [zoomed, setZoomed] = useState(false)
  useLockBodyScroll(open || zoomed)
  const t = useT()

  function handleClose() {
    setZoomed(false)
    onClose?.()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-line bg-ink-soft"
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label={t.common.aizvert}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink/60 text-white backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-accent-2"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              onClick={() => setZoomed(true)}
              aria-label={t.common.palielinat}
              className="group relative block w-full"
            >
              <Media src={service?.image} alt={service?.title} overlay className="h-56 w-full" />
              <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-ink/60 text-white backdrop-blur-sm transition-colors group-hover:border-accent/50 group-hover:text-accent-2">
                <ZoomIn size={16} />
              </span>
            </button>

            <div className="p-7 sm:p-9">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent-2">
                {service && <service.icon size={19} strokeWidth={1.75} />}
              </span>

              <h3 className="mt-4 font-display text-2xl font-bold text-ivory">{service?.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service?.details}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {service?.duration && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-xs text-ivory/80">
                    <Clock3 size={14} className="text-accent-2" />
                    {service?.duration}
                  </span>
                )}
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-xs text-ivory/80">
                  <Tag size={14} className="text-accent-2" />
                  {service?.price}
                </span>
              </div>

              <Button
                as="button"
                icon={Phone}
                onClick={() => {
                  onClose?.()
                  openCallModal()
                }}
                className="mt-7 w-full"
              >
                {t.common.zvanit}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {zoomed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md"
          onClick={() => setZoomed(false)}
        >
          <button
            type="button"
            onClick={() => setZoomed(false)}
            aria-label={t.common.aizvert}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-line text-ivory transition-colors hover:border-accent/50 hover:text-accent-2"
          >
            <X size={20} />
          </button>
          <img
            src={service?.image}
            alt={service?.title}
            className="max-h-full max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
