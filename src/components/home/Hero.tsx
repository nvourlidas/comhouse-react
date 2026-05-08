import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    headline: 'Computer House',
    subheadline: 'Βουρλίδας – Σεμέλογλου',
    body: 'Αξιόπιστες λύσεις τεχνολογίας για επιχειρήσεις και ιδιώτες στις Σέρρες και Πανελλαδικά.',
    cta: { label: 'Μάθετε περισσότερα', href: '/contact' },
    gradient: 'from-blue-900 via-blue-700 to-cyan-500',
  },
  {
    headline: 'Επισκευή Ταμειακών',
    subheadline: 'Εξουσιοδοτημένο Τεχνικό Τμήμα',
    body: 'Εγκατάσταση, επισκευή και κλείσιμο–παύση ταμειακών μηχανών & φορολογικών μηχανισμών.',
    cta: { label: 'Περισσότερα', href: '/tameiakes' },
    gradient: 'from-slate-900 via-cyan-900 to-cyan-600',
  },
  {
    headline: 'Service Υπολογιστών',
    subheadline: 'Laptop · Desktop · Server',
    body: 'Έμπειρο τεχνικό τμήμα για αξιόπιστη και αποτελεσματική αντιμετώπιση τεχνικών προβλημάτων.',
    cta: { label: 'Περισσότερα', href: '/computers' },
    gradient: 'from-blue-950 via-blue-800 to-blue-500',
  },
  {
    headline: 'Λύσεις Μηχανογράφησης',
    subheadline: 'Softone · Unisoft · PBS ONE',
    body: 'Εγκατάσταση, παραμετροποίηση και υποστήριξη προγραμμάτων μεγαλύτερων Ελληνικών Software houses.',
    cta: { label: 'Περισσότερα', href: '/mixanografisi' },
    gradient: 'from-cyan-950 via-cyan-800 to-teal-500',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const go = (index: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 300)
  }

  const prev = () => go((current - 1 + slides.length) % slides.length)
  const next = () => go((current + 1) % slides.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [current])

  const slide = slides[current]

  return (
    <section className={`relative min-h-screen flex items-center bg-gradient-to-br ${slide.gradient} transition-all duration-700`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className={`transition-all duration-300 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">ComHouse · Σέρρες</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3">
              {slide.headline}
            </h1>
            <p className="text-xl text-cyan-200 font-semibold mb-4">{slide.subheadline}</p>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              {slide.body}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={slide.cta.href}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:bg-cyan-50 transition-all"
              >
                {slide.cta.label}
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-all"
              >
                Επικοινωνία
              </Link>
            </div>
          </div>

          {/* Decorative card */}
          <div className={`hidden lg:flex justify-center transition-all duration-300 ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 mx-auto mb-4 flex items-center justify-center shadow-xl">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-12 h-12">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-2xl tracking-tight">ComHouse</p>
                  <p className="text-white/60 text-sm mt-1">Βουρλίδας – Σεμέλογλου</p>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-2 text-sm font-semibold text-blue-700">
                ✓ Εξουσιοδοτημένο Service
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-2 text-sm font-semibold text-cyan-700">
                📍 Σέρρες & Πανελλαδικά
              </div>
            </div>
          </div>
        </div>

        {/* Slider controls */}
        <div className="flex items-center gap-4 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`rounded-full transition-all ${
                  i === current ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
