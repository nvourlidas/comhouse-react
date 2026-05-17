import { ArrowUp, ArrowDown } from 'lucide-react'

const STEP = 400

export default function ScrollControls() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col rounded-full bg-slate-900/50 backdrop-blur-sm border border-white/10 shadow-md overflow-hidden">
      <button
        onClick={() => window.scrollBy({ top: -STEP, behavior: 'smooth' })}
        aria-label="Πάνω"
        className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
      >
        <ArrowUp size={14} />
      </button>
      <div className="h-px bg-white/10" />
      <button
        onClick={() => window.scrollBy({ top: STEP, behavior: 'smooth' })}
        aria-label="Κάτω"
        className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
      >
        <ArrowDown size={14} />
      </button>
    </div>
  )
}
