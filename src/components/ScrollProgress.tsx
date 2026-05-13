import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const spring = useSpring(progress, { stiffness: 200, damping: 30 })

  useEffect(() => {
    function update() {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? scrolled / total : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    spring.set(progress)
  }, [progress, spring])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[10000] origin-left bg-linear-to-r from-blue-500 via-blue-400 to-cyan-400"
      style={{ scaleX: spring }}
    />
  )
}
