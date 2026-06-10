import { useState, useEffect } from 'react'
import { X, Tag } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { API_BASE } from '../lib/api'

interface Promotion {
  id: number
  filename: string
}

export default function PromotionsPanel() {
  const [open, setOpen] = useState(false)
  const [promotions, setPromotions] = useState<Promotion[]>([])

  useEffect(() => {
    fetch(`${API_BASE}/api/promotions.php`)
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setPromotions(data) })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (promotions.length === 0) return null

  return (
    <>
      {/* Tab trigger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Προβολή Προσφορών"
        className="fixed top-1/3 right-0 z-40 flex flex-col items-center gap-1.5 bg-gradient-to-b from-orange-500 to-red-600 text-white px-2.5 py-5 rounded-l-2xl shadow-2xl hover:from-orange-400 hover:to-red-500 hover:px-4 transition-all duration-200"
      >
        <Tag className="w-4 h-4" />
        <span
          className="text-[10px] font-bold tracking-widest uppercase leading-none"
          style={{ writingMode: 'vertical-lr' }}
        >
          Προσφορές
        </span>
      </button>

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
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-orange-500 to-red-600 shrink-0">
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

              <div className="flex-1 overflow-y-auto">
                {promotions.map(p => (
                  <img
                    key={p.id}
                    src={`${API_BASE}/uploads/promotions/${p.filename}`}
                    alt="Προσφορά"
                    className="w-full object-contain block"
                    loading="lazy"
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
