import { useState, useRef, useEffect, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown, CheckCircle2, X } from 'lucide-react'
import { FadeUp } from '../components/ScrollReveal'
import SEO from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'

import pantumLogo from '../assets/Pantum-Logo.png'
import p2509w1 from '../assets/pantum-p2509w.jpg'
import p2509w2 from '../assets/pantum-p2509w-2.jpg'
import m65591 from '../assets/pantum-m6559.jpeg'
import m65592 from '../assets/pantum-m6559-2.jpeg'
import m65593 from '../assets/pantum-m6559-3.jpeg'

/* ─── Types ──────────────────────────────────────────────────────── */
interface Spec { label: string; value: string }
interface DescriptionSection { title: string; bullets: string[] }
interface LongDescription {
  paragraphs: string[]
  bullets?: string[]
  closing?: string[]
  sections?: DescriptionSection[]
}
interface Product {
  id: string
  name: string
  tagline: string
  description: string
  specs: Spec[]
  images?: string[]
  longDescription?: LongDescription
  characteristics?: string[]
  characteristicSections?: DescriptionSection[]
}

/* ─── Products ───────────────────────────────────────────────────── */
const printerProducts: Product[] = [
  {
    id: 'pantum-p2509w',
    name: 'Pantum P2509W',
    tagline: 'Ασύρματη Μονόχρωμη Λέιζερ Εκτύπωση',
    description:
      'Συμπαγής ασύρματος μονόχρωμος εκτυπωτής λέιζερ, ιδανικός για γραφεία και μικρές επιχειρήσεις που αναζητούν αξιόπιστη και οικονομική εκτύπωση.',
    images: [p2509w1, p2509w2],
    specs: [
      { label: 'Ταχύτητα',       value: '22 σελ./λεπτό (A4)' },
      { label: 'Ανάλυση',        value: '1200 × 1200 dpi' },
      { label: 'Σύνδεση',        value: 'USB + WiFi' },
      { label: 'Μνήμη',          value: '128 MB' },
      { label: 'Μηνιαία χρήση',  value: 'Έως 15.000 σελίδες' },
    ],
    longDescription: {
      paragraphs: [
        'Ο Pantum P2509W είναι ένας συμπαγής μονόχρωμος εκτυπωτής λέιζερ, σχεδιασμένος για επαγγελματίες και μικρές επιχειρήσεις που χρειάζονται γρήγορη και αξιόπιστη εκτύπωση χωρίς περιττές επιπλοκές.',
        'Με ταχύτητα εκτύπωσης 22 σελίδων ανά λεπτό και μέγιστη ανάλυση 1200 × 1200 dpi, προσφέρει κρυστάλλινα καθαρά κείμενα και έγγραφα επαγγελματικής ποιότητας.',
        'Η ασύρματη σύνδεση WiFi επιτρέπει την εκτύπωση από οποιαδήποτε συσκευή στο δίκτυο, ενώ η θύρα USB εξασφαλίζει άμεση σύνδεση με τον υπολογιστή σας.',
        'Με μνήμη 128 MB και μηνιαία δυνατότητα έως 15.000 σελίδες, ο P2509W ανταποκρίνεται με άνεση στις καθημερινές ανάγκες εκτύπωσης κάθε γραφείου.',
      ],
    },
    characteristics: [
      'Μονόχρωμος εκτυπωτής λέιζερ',
      'Ταχύτητα εκτύπωσης: 22 σελ./λεπτό (A4)',
      'Μέγιστη ανάλυση: 1200 × 1200 dpi',
      'Μνήμη: 128 MB',
      'Σύνδεση: USB + WiFi',
      'Χωρητικότητα δίσκου: 150 φύλλα εισόδου / 100 φύλλα εξόδου',
      'Μηνιαίος κύκλος εργασίας: έως 15.000 σελίδες',
      'Εκτύπωση duplex: χειροκίνητη αμφίπλευρη εκτύπωση',
      'Τόνερ: PD-219 (1.600 σελίδες)',
      'Συμβατό με Windows, macOS και Linux',
      'Συμπαγής σχεδίαση για ελεύθερη τοποθέτηση',
    ],
  },
  {
    id: 'pantum-m6559',
    name: 'Pantum M6559',
    tagline: 'Εκτύπωση, Αντιγραφή & Σάρωση σε μία συσκευή',
    description:
      'Πολυλειτουργικός μονόχρωμος εκτυπωτής λέιζερ με ADF, ιδανικός για επιχειρήσεις που χρειάζονται πλήρη αυτονομία εγγράφων.',
    images: [m65591, m65592, m65593],
    specs: [
      { label: 'Ταχύτητα',     value: '22 σελ./λεπτό (A4)' },
      { label: 'Ανάλυση',      value: '1200 × 1200 dpi' },
      { label: 'Σύνδεση',      value: 'USB + Δίκτυο + WiFi' },
      { label: 'Λειτουργίες',  value: 'Εκτύπωση / Αντιγραφή / Σάρωση' },
      { label: 'ADF',          value: 'Αυτόματος τροφοδότης εγγράφων' },
    ],
    longDescription: {
      paragraphs: [
        'Ο Pantum M6559 είναι ένας πολυλειτουργικός μονόχρωμος εκτυπωτής λέιζερ που συνδυάζει εκτύπωση, αντιγραφή και σάρωση σε μία συμπαγή συσκευή.',
        'Με ταχύτητα 22 σελίδων ανά λεπτό και ανάλυση έως 1200 × 1200 dpi, εγγυάται εξαιρετική ποιότητα εκτύπωσης για επαγγελματικά έγγραφα.',
        'Ο ενσωματωμένος αυτόματος τροφοδότης εγγράφων (ADF) επιτρέπει τη σάρωση και αντιγραφή πολλαπλών σελίδων αυτόματα, εξοικονομώντας πολύτιμο χρόνο στο γραφείο.',
        'Η τριπλή σύνδεση μέσω USB, δικτύου (Ethernet) και WiFi εξασφαλίζει ευελιξία σε κάθε εργασιακό περιβάλλον, από μικρά γραφεία έως μεσαίες επιχειρήσεις.',
      ],
    },
    characteristics: [
      'Πολυλειτουργικός: Εκτύπωση, Αντιγραφή, Σάρωση',
      'Ταχύτητα εκτύπωσης: 22 σελ./λεπτό (A4)',
      'Μέγιστη ανάλυση: 1200 × 1200 dpi',
      'Επεξεργαστής: 600 MHz',
      'Μνήμη: 128 MB',
      'Σύνδεση: USB + Δίκτυο (Ethernet) + WiFi',
      'Αυτόματος τροφοδότης εγγράφων (ADF): 216 × 356 mm',
      'Flatbed σαρωτής: 216 × 297 mm',
      'Χωρητικότητα δίσκου: 150 φύλλα + προαιρετικός δίσκος 100 φύλλων',
      'Ταχύτητα αντιγραφής: 22 αντίγραφα/λεπτό',
      'Επιλογές αντιγραφής: ID copy, N-up, Clone, Receipt copy',
      'Μεγέθυνση/Σμίκρυνση: 25% – 400%',
      'Συμβατό με Windows, macOS και Linux',
    ],
  },
]

/* ─── Placeholder ────────────────────────────────────────────────── */
function PlaceholderMain() {
  return (
    <div className="w-full aspect-4/3 bg-slate-50 border border-slate-200 flex items-center justify-center">
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2"
        className="w-16 h-16 text-slate-300">
        <rect x="4" y="10" width="56" height="40" rx="4" />
        <path d="M10 18h44M10 26h28M10 34h20" />
        <rect x="42" y="30" width="14" height="12" rx="2" />
        <path d="M48 36l2 2 4-4" />
        <rect x="4" y="50" width="56" height="4" rx="2" />
      </svg>
    </div>
  )
}

/* ─── Gallery — slide transition + cursor zoom ───────────────────── */
function ProductGallery({ images }: { images?: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive]     = useState(0)
  const [hovering, setHovering] = useState(false)
  const [zoomed, setZoomed]     = useState(false)
  const [origin, setOrigin]     = useState({ x: 50, y: 50 })
  const [lightbox, setLightbox] = useState<number | null>(null)

  useEffect(() => {
    if (!images || images.length <= 1 || hovering) return
    const id = setInterval(() => setActive(prev => (prev + 1) % images.length), 3000)
    return () => clearInterval(id)
  }, [images, hovering])

  useEffect(() => { setZoomed(false) }, [active])

  useEffect(() => {
    if (lightbox === null) return
    document.body.style.overflow = 'hidden'
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight' && images) setLightbox(prev => prev !== null ? (prev + 1) % images.length : null)
      if (e.key === 'ArrowLeft'  && images) setLightbox(prev => prev !== null ? (prev - 1 + images.length) % images.length : null)
    }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [lightbox, images])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setOrigin({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top)  / rect.height) * 100,
    })
  }

  if (!images || images.length === 0) return <PlaceholderMain />

  return (
    <>
      <div className="flex flex-col gap-3">
        <div
          ref={containerRef}
          className="relative w-full aspect-4/3 bg-slate-50 border border-slate-200 overflow-hidden cursor-zoom-in"
          onMouseEnter={() => { setZoomed(true);  setHovering(true)  }}
          onMouseLeave={() => { setZoomed(false); setHovering(false) }}
          onMouseMove={handleMouseMove}
          onClick={() => setLightbox(active)}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${(i - active) * 100}%)` }}
            >
              <img
                src={src}
                alt={`product-${i}`}
                className="max-h-full max-w-full object-contain select-none"
                style={i === active ? {
                  transform: zoomed ? 'scale(3.5)' : 'scale(1)',
                  transformOrigin: `${origin.x}% ${origin.y}%`,
                  transition: zoomed ? 'transform 0.15s ease' : 'transform 0.25s ease',
                  willChange: 'transform',
                } : undefined}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <div className="flex gap-2">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-16 h-16 border-2 flex items-center justify-center bg-slate-50 transition-colors ${
                  i === active ? 'border-slate-800' : 'border-slate-200 hover:border-slate-400'
                }`}
              >
                <img src={src} alt={`thumb-${i}`} className="w-10 h-10 object-contain" />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-9999 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>

          {images.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length) }}
            >
              <ChevronLeft size={36} />
            </button>
          )}

          <img
            src={images[lightbox]}
            alt={`product-fullscreen-${lightbox}`}
            className="max-h-[90vh] max-w-[90vw] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />

          {images.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length) }}
            >
              <ChevronRight size={36} />
            </button>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-6 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i) }}
                  className={`rounded-full transition-all ${
                    i === lightbox ? 'w-4 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}

/* ─── Product row ────────────────────────────────────────────────── */
function ProductRow({ product, accentText }: { product: Product; accentText: string }) {
  const [charOpen, setCharOpen] = useState(false)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-12 border-b border-slate-100 last:border-0">
      {/* Left — gallery */}
      <ProductGallery images={product.images} />

      {/* Right — info */}
      <div className="flex flex-col justify-center">
        <span className={`text-xs font-bold uppercase tracking-widest ${accentText}`}>
          {product.tagline}
        </span>
        <h3 className="mt-2 text-2xl font-extrabold text-slate-900">{product.name}</h3>

        <div className="mt-4">
          {product.longDescription ? (
            <div className="space-y-3 text-sm text-slate-500 leading-relaxed">
              {product.longDescription.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {product.longDescription.bullets && product.longDescription.bullets.length > 0 && (
                <ul className="space-y-1.5 py-1">
                  {product.longDescription.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <ChevronRight size={14} className="text-blue-500 shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {product.longDescription.sections && product.longDescription.sections.map((section, si) => (
                <div key={si} className="pt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-px flex-1 bg-slate-200" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {section.title}
                    </span>
                    <span className="h-px flex-1 bg-slate-200" />
                  </div>
                  <ul className="space-y-1.5">
                    {section.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-slate-600 text-xs leading-relaxed">
                        <ChevronRight size={11} className="text-blue-400 shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {product.longDescription.closing && product.longDescription.closing.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-slate-500 text-sm leading-relaxed">{product.description}</p>
              <div className="space-y-2.5">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex items-baseline gap-3 text-sm">
                    <span className="w-32 shrink-0 text-slate-400">{spec.label}</span>
                    <span className="h-px flex-1 bg-slate-100" />
                    <span className="text-slate-700 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {(product.characteristics || product.characteristicSections) && (
          <div className="mt-6">
            <button
              onClick={() => setCharOpen(!charOpen)}
              className={`inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 border transition-colors ${
                charOpen
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-800 border-slate-300 hover:border-slate-700'
              }`}
            >
              Χαρακτηριστικά
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${charOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {charOpen && product.characteristics && (
              <ul className="mt-4 space-y-1.5">
                {product.characteristics.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                    {c.startsWith('✔') ? c.slice(2) : c}
                  </li>
                ))}
              </ul>
            )}

            {charOpen && product.characteristicSections && (
              <div className="mt-4 divide-y divide-slate-100">
                {product.characteristicSections.map((section, si) => (
                  <div key={si} className="py-3 first:pt-0 last:pb-0">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {section.title}
                    </span>
                    <ul className="mt-1.5 space-y-1">
                      {section.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm text-slate-600">
                          <ChevronRight size={12} className="text-blue-500 shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function PantumPage() {
  const [displayIdx, setDisplayIdx] = useState(0)
  const [cardStyle, setCardStyle] = useState<CSSProperties>({
    transform: 'translateY(0)',
    opacity: 1,
    transition: 'transform 0.24s ease, opacity 0.24s ease',
  })
  const isAnimating = useRef(false)
  const idxRef = useRef(0)
  const productsRef = useRef<HTMLDivElement>(null)
  const [widgetVisible, setWidgetVisible] = useState(true)

  useEffect(() => {
    const el = productsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setWidgetVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function slideTo(nextIdx: number) {
    if (isAnimating.current) return
    isAnimating.current = true
    setCardStyle({ transform: 'translateY(-110%)', opacity: 0, transition: 'transform 0.24s ease, opacity 0.24s ease' })
    setTimeout(() => {
      idxRef.current = nextIdx
      setDisplayIdx(nextIdx)
      setCardStyle({ transform: 'translateY(110%)', opacity: 0, transition: 'none' })
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setCardStyle({ transform: 'translateY(0)', opacity: 1, transition: 'transform 0.24s ease, opacity 0.24s ease' })
        setTimeout(() => { isAnimating.current = false }, 260)
      }))
    }, 260)
  }

  useEffect(() => {
    const id = setInterval(() => {
      slideTo((idxRef.current + 1) % printerProducts.length)
    }, 3500)
    return () => clearInterval(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function goToProduct(id: string) {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      el?.classList.add('product-highlight')
      setTimeout(() => el?.classList.remove('product-highlight'), 1400)
    }, 700)
  }

  const product = printerProducts[displayIdx]

  return (
    <div className="pt-20 lg:pt-28 bg-white min-h-screen">
      <SEO
        title="Pantum Εκτυπωτές | ComHouse"
        description="Εξουσιοδοτημένος αντιπρόσωπος Pantum. Οικονομικοί laser εκτυπωτές για γραφείο και επαγγελματική χρήση."
      />

      {/* ── Hero ── */}
      <section className="relative bg-blue-950 px-4 pt-10 pb-24">
        <div className="max-w-5xl mx-auto">

          <Breadcrumb items={[
            { label: 'Αρχική', href: '/' },
            { label: 'Εκτυπωτές', href: '/printers/lexmark' },
            { label: 'Pantum' },
          ]} />

          {/* Logo */}
          <div className="mb-10 inline-block bg-white px-5 py-3 rounded-lg shadow-md">
            <img src={pantumLogo} alt="Pantum" className="h-7 sm:h-8 object-contain" />
          </div>

          {/* Text */}
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-2">
              Επαγγελματικοί Εκτυπωτές Laser
            </p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-1">
              Εκτυπωτές Pantum για κάθε επιχείρηση
            </h1>
            <p className="text-blue-300 text-sm font-medium mb-6">
              Αξιόπιστη εκτύπωση laser με χαμηλό κόστος λειτουργίας
            </p>

            <div className="space-y-4 text-sm text-blue-100/70 leading-relaxed">
              <p>Οι εκτυπωτές Pantum συνδυάζουν υψηλή απόδοση, αξιοπιστία και χαμηλό κόστος εκτύπωσης, καθιστώντας τους ιδανική επιλογή για επιχειρήσεις κάθε μεγέθους. Από τον απλό μονόχρωμο εκτυπωτή γραφείου έως τον πολυλειτουργικό με ADF, η σειρά Pantum καλύπτει όλες τις σύγχρονες ανάγκες εκτύπωσης εγγράφων.</p>
              <p>Με τεχνολογία λέιζερ υψηλής ακρίβειας, ταχύτητα έως 22 σελίδες ανά λεπτό και ανάλυση 1200 dpi, κάθε έγγραφο εκτυπώνεται με εξαιρετική διαύγεια και ευκρίνεια. Η ασύρματη σύνδεση WiFi επιτρέπει εκτύπωση από οποιαδήποτε συσκευή, ενώ η υποστήριξη δικτύου (Ethernet) στα πολυλειτουργικά μοντέλα εξυπηρετεί ολόκληρο το γραφείο ταυτόχρονα.</p>
              <p className="font-semibold text-blue-100">Επιλέξτε Pantum και απολαύστε επαγγελματική εκτύπωση με το χαμηλότερο δυνατό κόστος ανά σελίδα.</p>
            </div>
          </div>

        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Bottom-right product carousel widget ── */}
      <div className={`fixed bottom-6 right-6 z-40 w-56 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
        widgetVisible ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0 pointer-events-none'
      }`}>

        <div className="bg-linear-to-r from-blue-700 to-blue-500 px-4 py-3">
          <p className="text-[9px] font-black uppercase tracking-widest text-blue-100">Εκτυπωτές Pantum</p>
        </div>

        <div className="overflow-hidden">
          <button
            onClick={() => goToProduct(product.id)}
            style={cardStyle}
            className="w-full flex flex-col items-center px-4 pt-4 pb-4 hover:bg-blue-50 group text-left transition-colors"
          >
            <div className="w-full flex items-center justify-center bg-slate-50 rounded-xl py-4 mb-3">
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="h-24 w-24 object-contain"
              />
            </div>
            <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug w-full">
              {product.name}
            </p>
            <div className="mt-2 w-full flex items-center justify-center gap-1.5 bg-blue-600 group-hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
              Δείτε το <ArrowRight size={12} />
            </div>
          </button>
        </div>

        <div className="flex items-center justify-center gap-1.5 pb-3">
          {printerProducts.map((_, i) => (
            <button
              key={i}
              onClick={() => slideTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === displayIdx
                  ? 'w-4 h-1.5 bg-blue-500'
                  : 'w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Τα Προϊόντα μας</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>
      </div>
      <div ref={productsRef} className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
        {printerProducts.map((p) => (
          <FadeUp key={p.id}>
            <div id={p.id} className="scroll-mt-24">
              <ProductRow product={p} accentText="text-blue-600" />
            </div>
          </FadeUp>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16 px-4 bg-linear-to-br from-blue-700 to-blue-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white">
            Δεν ξέρετε ποιος εκτυπωτής σας ταιριάζει;
          </h2>
          <p className="mt-3 text-blue-200 text-sm">
            Ο έμπειρος τεχνικός μας θα σας καθοδηγήσει στην καλύτερη επιλογή για την επιχείρησή σας.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-800 font-semibold px-7 py-3 text-sm rounded-xl shadow-md transition-colors"
          >
            Επικοινωνία <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  )
}
