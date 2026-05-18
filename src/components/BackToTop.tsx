import { useState, useEffect, useRef } from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

const STEP = 400
const FLASH_MS = 300

export default function ScrollControls() {
  const [active, setActive] = useState<'up' | 'down' | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const dir = e.deltaY < 0 ? 'up' : 'down'
      setActive(dir)
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setActive(null), FLASH_MS)
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col rounded-full bg-slate-900/50 backdrop-blur-sm border border-white/10 shadow-md overflow-hidden">
      <button
        onClick={() => window.scrollBy({ top: -STEP, behavior: 'smooth' })}
        aria-label="Πάνω"
        className={`w-8 h-8 flex items-center justify-center transition-all duration-200
          ${active === 'up' ? 'text-white bg-white/20' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}
      >
        <ArrowUp size={14} />
      </button>
      <div className="h-px bg-white/10" />
      <button
        onClick={() => window.scrollBy({ top: STEP, behavior: 'smooth' })}
        aria-label="Κάτω"
        className={`w-8 h-8 flex items-center justify-center transition-all duration-200
          ${active === 'down' ? 'text-white bg-white/20' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}
      >
        <ArrowDown size={14} />
      </button>
    </div>
  )
}
