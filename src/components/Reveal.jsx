import { motion } from 'framer-motion'

const variants = {
  hidden: (y) => ({ opacity: 0, y }),
  visible: { opacity: 1, y: 0 },
}

export function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      custom={y}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
