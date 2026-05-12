import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import myDataLogo from '../../assets/MyDataLogo.png'

const slides = [
  {
    headline: 'Λύσεις Μηχανογράφησης',
    subheadline: 'Entersoftone · Prosvasis GO · PBS ONE',
    body: 'Εγκατάσταση, παραμετροποίηση και υποστήριξη προγραμμάτων μεγαλύτερων Ελληνικών Software houses.',
    cta: { label: 'Περισσότερα', href: '/mixanografisi' },
    gradient: 'from-blue-950 via-blue-800 to-blue-600',
    visual: {
      badge: '✓ Πιστοποιημένος Συνεργάτης',
      tags: ['Entersoftone', 'Prosvasis GO', 'PBS ONE', 'Εκπαίδευση', 'On-site Support'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-12 h-12">
          <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
        </svg>
      ),
    },
  },
  {
    headline: 'Επισκευή Ταμειακών',
    subheadline: 'Εξουσιοδοτημένο Τεχνικό Τμήμα',
    body: 'Εγκατάσταση, επισκευή και κλείσιμο–παύση ταμειακών μηχανών & φορολογικών μηχανισμών.',
    cta: { label: 'Περισσότερα', href: '/tameiakes' },
    gradient: 'from-slate-900 via-blue-900 to-blue-700',
    visual: {
      badge: '✓ Εξουσιοδοτημένο Service',
      tags: ['Εγκατάσταση', 'Επισκευή', 'Κλείσιμο', 'Παύση', 'Φορολογική Μνήμη'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-12 h-12">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M7 8h10M7 12h6M7 16h4" />
          <path d="M17 14l1.5 1.5L21 13" />
        </svg>
      ),
    },
  },
  {
    headline: 'Service Υπολογιστών',
    subheadline: 'Laptop · Desktop · Server',
    body: 'Έμπειρο τεχνικό τμήμα για αξιόπιστη και αποτελεσματική αντιμετώπιση τεχνικών προβλημάτων.',
    cta: { label: 'Περισσότερα', href: '/computers' },
    gradient: 'from-blue-900 via-blue-700 to-cyan-600',
    visual: {
      badge: '✓ On-site & Απομακρυσμένα',
      tags: ['Laptop', 'Desktop', 'Server', 'Δίκτυα', 'Περιφερειακά'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-12 h-12">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
  },
  {
    headline: 'myDATA',
    subheadline: 'ΑΑΔΕ · ΥΠΑΗΕΣ · E-Invoicing',
    body: 'Πλήρης ενσωμάτωση με την πλατφόρμα myDATA της ΑΑΔΕ. Διαβίβαση παραστατικών, σύνδεση με παρόχους ΥΠΑΗΕΣ και αυτόματη συμμόρφωση για κάθε επιχείρηση.',
    cta: { label: 'Περισσότερα', href: '/mydata' },
    gradient: 'from-indigo-950 via-indigo-800 to-violet-600',
    visual: {
      badge: '✓ Πιστοποιημένη Ενσωμάτωση',
      tags: ['myDATA', 'ΑΑΔΕ', 'ΥΠΑΗΕΣ', 'E-Invoicing', 'Παραστατικά'],
      iconNoBg: true,
      icon: (
        <img src={myDataLogo} alt="myDATA" className="w-32 h-32 object-contain" />
      ),
    },
  },
  {
    headline: 'Web & Mobile Apps',
    subheadline: 'Websites · Web Apps · Mobile · E-Shop',
    body: 'Σχεδιάζουμε και αναπτύσσουμε σύγχρονες web εφαρμογές, mobile apps, e-shops και εταιρικά websites με έμφαση στην απόδοση.',
    cta: { label: 'Περισσότερα', href: '/webdev' },
    gradient: 'from-emerald-950 via-emerald-800 to-teal-600',
    visual: {
      badge: '✓ Web · Mobile · E-Commerce',
      tags: ['Websites', 'Web Apps', 'Mobile Apps', 'E-Shop'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-12 h-12">
          <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9Z" />
          <path d="M8 10l-2 2 2 2M16 10l2 2-2 2M13 9l-2 6" />
        </svg>
      ),
    },
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
    <section className={`relative min-h-[80vh] flex items-center bg-gradient-to-br ${slide.gradient} transition-all duration-700`}>
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Glow behind text */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className={`transition-all duration-300 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3">
              {slide.headline}
            </h1>
            <p className="text-xl text-cyan-200 font-semibold mb-4">{slide.subheadline}</p>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              {slide.body}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-all"
              >
                Επικοινωνία
              </Link>
            </div>
          </div>

          {/* Slide-specific visual card */}
          <div className={`hidden lg:flex justify-center transition-all duration-300 ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="relative w-80">
              <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-8">
                {/* Icon */}
                {slide.visual.iconNoBg ? (
                  <div className="mb-5">{slide.visual.icon}</div>
                ) : (
                  <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-5 shadow-lg">
                    {slide.visual.icon}
                  </div>
                )}
                {/* Title */}
                <p className="text-white font-extrabold text-xl mb-1">{slide.headline}</p>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">{slide.subheadline}</p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {slide.visual.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold bg-white/15 text-white px-3 py-1 rounded-full border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-5 py-2 text-sm font-semibold text-blue-700 whitespace-nowrap">
                {slide.visual.badge}
              </div>
            </div>
          </div>
        </div>

        {/* Slider controls */}
        <div className="flex items-center gap-4 mt-16">
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
