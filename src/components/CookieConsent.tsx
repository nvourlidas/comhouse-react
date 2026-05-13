import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie } from 'lucide-react'

const STORAGE_KEY = 'cookie-consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-9998 w-[calc(100%-2rem)] max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl shadow-black/40 px-6 py-5"
        >
          {/* Icon + text */}
          <div className="flex items-start gap-4 mb-5">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
              <Cookie size={18} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-1">Χρήση Cookies</p>
              <p className="text-slate-400 text-xs leading-relaxed">Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία πλοήγησής σας. Μπορείτε να αποδεχτείτε ή να απορρίψετε τη χρήση τους.</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={decline}
              className="flex-1 py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-slate-700/80 hover:bg-slate-700 transition-colors"
            >
              Απόρριψη
            </button>
            <button
              onClick={accept}
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50"
            >
              Αποδοχή
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
