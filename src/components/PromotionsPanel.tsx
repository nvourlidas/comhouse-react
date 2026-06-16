import { useState, useEffect, useRef } from 'react'
import { X, Tag, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { API_BASE } from '../lib/api'

interface Promotion {
  id: number
  filename: string
}

type Phase = 'idle' | 'showing' | 'traveling' | 'bubble'

const SHOW_MS   = 1300  // how long the card stays visible
const TRAVEL_MS = 600   // how long the travel animation takes

export default function PromotionsPanel() {
  const [open, setOpen]             = useState(false)
  const [promotions, setPromotions] = useState<Promotion[]>([])
  const [phase, setPhase]           = useState<Phase>('idle')
  const [hasLoaded, setHasLoaded]   = useState(false)
  const [lightbox, setLightbox]     = useState<string | null>(null)
  const dragging   = useRef(false)
  const scrollRef   = useRef<HTMLDivElement>(null)
  const [atBottom, setAtBottom] = useState(false)

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 8)
  }

  useEffect(() => {
    fetch(`${API_BASE}/api/promotions.php`)
      .then(r => r.json())
      .then(data => { if (Array.isArray(data) && data.length > 0) setPromotions(data) })
      .catch(() => {})
  }, [])

  // Mark first load once promotions arrive
  useEffect(() => {
    if (promotions.length > 0) setHasLoaded(true)
  }, [promotions.length])

  // Show intro card, then start travel
  useEffect(() => {
    if (!hasLoaded) return
    setPhase('showing')
    const t1 = setTimeout(() => setPhase('traveling'), SHOW_MS)
    return () => clearTimeout(t1)
  }, [hasLoaded])

  // After travel animation completes, switch to bubble
  useEffect(() => {
    if (phase !== 'traveling') return
    const t2 = setTimeout(() => setPhase('bubble'), TRAVEL_MS + 50)
    return () => clearTimeout(t2)
  }, [phase])

  useEffect(() => {
    if (!open && !lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightbox) setLightbox(null)
        else setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, lightbox])

  if (promotions.length === 0) return null

  // Distance from card centre (viewport centre) to bubble centre (top-44 right-10)
  const exitX = window.innerWidth  / 2 - 68   // rightward
  const exitY = 204 - window.innerHeight / 2   // upward (negative)

  const isIntroVisible = phase === 'showing' || phase === 'traveling'

  return (
    <>
      {/* Dark backdrop */}
      <AnimatePresence>
        {isIntroVisible && (
          <motion.div
            key="intro-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 z-9998"
          />
        )}
      </AnimatePresence>

      {/* Intro card — animate prop drives both entrance and travel */}
      {isIntroVisible && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              phase === 'traveling'
                ? { scale: 0.07, x: exitX, y: exitY, opacity: 0 }
                : { scale: 1,    x: 0,     y: 0,     opacity: 1 }
            }
            transition={
              phase === 'traveling'
                ? { duration: TRAVEL_MS / 1000, ease: [0.4, 0, 1, 1] }
                : { duration: 0.4, ease: 'easeOut' }
            }
            className="rounded-3xl bg-linear-to-br from-orange-500 to-red-600 text-white px-20 py-12 shadow-2xl flex items-center gap-6"
          >
            <Tag className="w-20 h-20" />
            <span className="text-6xl font-extrabold tracking-tight">Προσφορές</span>
          </motion.div>
        </div>
      )}

      {/* Draggable bubble — pops in after travel */}
      {phase === 'bubble' && !open && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          drag
          dragMomentum={false}
          dragElastic={0.1}
          whileDrag={{ scale: 1.1 }}
          onDragStart={() => { dragging.current = true }}
          onDragEnd={() => { setTimeout(() => { dragging.current = false }, 0) }}
          onClick={() => { if (!dragging.current) setOpen(true) }}
          aria-label="Προβολή Προσφορών"
          className="fixed top-44 right-10 z-9999 w-14 h-14 rounded-full bg-linear-to-br from-orange-500 to-red-600 text-white shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing"
        >
          <span className="absolute inline-flex w-full h-full rounded-full bg-orange-400 opacity-40 animate-ping" />
          <Tag className="w-6 h-6 relative" />
        </motion.button>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-9999 bg-black/90 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              onClick={() => setLightbox(null)}
              aria-label="Κλείσιμο"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              src={lightbox}
              alt="Προσφορά"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.2 }}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop + slide-in panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[35vw] max-w-[95vw] bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 bg-linear-to-r from-orange-500 to-red-600 shrink-0">
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-base">Προσφορές</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white transition-colors p-1"
                  aria-label="Κλείσιμο"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative flex-1 min-h-0">
                <div
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="h-full overflow-y-auto flex flex-col gap-3 p-3"
                >
                  {promotions.map(p => (
                    <img
                      key={p.id}
                      src={`${API_BASE}/uploads/promotions/${p.filename}`}
                      alt="Προσφορά"
                      className="w-full object-contain rounded-lg cursor-zoom-in"
                      loading="lazy"
                      onClick={() => setLightbox(`${API_BASE}/uploads/promotions/${p.filename}`)}
                    />
                  ))}
                </div>

                {/* Scroll hint — fade + bouncing arrow */}
                {!atBottom && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none flex flex-col items-center justify-end pb-2 bg-linear-to-t from-white to-transparent">
                    <ChevronDown className="w-5 h-5 text-orange-500 animate-bounce" />
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
