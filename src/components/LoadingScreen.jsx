import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  useLockBodyScroll(visible)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ink"
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <span className="absolute inset-0 animate-pulse-glow rounded-full bg-accent/20 blur-2xl" />
            <img src="/images/logo.png" alt="PONTONS" className="relative h-16 w-auto object-contain sm:h-20" />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-32 origin-left bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
