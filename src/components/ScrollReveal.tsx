import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
}

const vpOpts = { once: true, margin: '-72px' }

export function FadeUp({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vpOpts}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export function FadeLeft({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={vpOpts}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export function FadeRight({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={vpOpts}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
