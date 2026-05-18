import { useState, useRef, useEffect, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown, CheckCircle2, Star, X } from 'lucide-react'
import { FadeUp } from '../components/ScrollReveal'
import SEO from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'

import lexmarkLogo from '../assets/lexmark-logo.png'
import ms331dn1    from '../assets/Lexmark-MS331dn.jpg'
import ms331dn2    from '../assets/Lexmark-MS331dn-back.jpg'
import ms331dn3    from '../assets/Lexmark-MS331dn-top.jpg'
import mx431adn1   from '../assets/Lexmark-MX431adn.jpg'
import mx431adn2   from '../assets/Lexmark-MX431adn-open.jpg'
import mx431adn3   from '../assets/Lexmark-MX431adn-back.jpg'
import mx431adn4   from '../assets/Lexmark-MX431adn-top.jpg'
import mx532adwe1  from '../assets/Lexmark-MX532adwe.jpg'
import mx532adwe2  from '../assets/Lexmark-MX532adwe-side.jpg'

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
    id: 'lexmark-ms331dn',
    name: 'Lexmark MS331dn',
    tagline: 'Συμπαγής Επαγγελματικός Εκτυπωτής Laser',
    description:
      'Αξιόπιστος μονόχρωμος εκτυπωτής laser με αυτόματη εκτύπωση διπλής όψης, ατσάλινο σκελετό και μόνιμο fuser για καθημερινή επαγγελματική χρήση.',
    images: [ms331dn1, ms331dn2, ms331dn3],
    specs: [
      { label: 'Ταχύτητα',      value: '40 σελ./λεπτό (A4)' },
      { label: 'Ανάλυση',       value: '2400 × 600 dpi' },
      { label: 'Σύνδεση',       value: 'Ethernet + USB 2.0' },
      { label: 'Μνήμη',         value: '256 MB' },
      { label: 'Μηνιαία χρήση', value: 'Έως 50.000 σελίδες' },
    ],
    longDescription: {
      paragraphs: [
        'Ο Lexmark MS331dn είναι ένας συμπαγής μονόχρωμος εκτυπωτής laser ιδανικός για μικρές επιχειρήσεις και γραφεία που χρειάζονται γρήγορη, αξιόπιστη και οικονομική εκτύπωση υψηλής ποιότητας.',
        'Με ταχύτητα 40 σελίδων ανά λεπτό και ανάλυση 2400 × 600 dpi, παράγει κρυστάλλινα καθαρά έγγραφα. Ο dual-core επεξεργαστής 1,0 GHz εξασφαλίζει γρήγορη επεξεργασία ακόμα και σύνθετων εργασιών εκτύπωσης.',
        'Ο ατσάλινος σκελετός και ο μόνιμος fuser (lifetime fuser) εγγυώνται εξαιρετική ανθεκτικότητα, μειώνοντας τα κόστη συντήρησης στο ελάχιστο. Το τόνερ υψηλής απόδοσης καλύπτει έως 15.000 σελίδες.',
      ],
    },
    characteristics: [
      'Μονόχρωμος εκτυπωτής laser — μόνο εκτύπωση',
      'Ταχύτητα: 40 σελ./λεπτό (A4)',
      'Ανάλυση: 2400 × 600 dpi (2400 IQ)',
      'Επεξεργαστής: Dual Core 1,0 GHz',
      'Μνήμη: 256 MB',
      'Σύνδεση: Ethernet 10/100BaseT + USB 2.0',
      'Αυτόματη εκτύπωση διπλής όψης (Auto Duplex)',
      'Χωρητικότητα: 350 φύλλα (επεκτάσιμη έως 900)',
      'Οθόνη: 2 γραμμών LCD',
      'Μηνιαίος κύκλος: έως 50.000 σελίδες',
      'Τόνερ High Yield: έως 15.000 σελίδες',
      'Μόνιμος fuser (Lifetime Fuser) — χωρίς κόστος αντικατάστασης',
      'Ατσάλινος σκελετός — εξαιρετική ανθεκτικότητα',
      'ENERGY STAR πιστοποιημένο',
    ],
  },
  {
    id: 'lexmark-mx431adn',
    name: 'Lexmark MX431adn',
    tagline: 'Πολυμηχάνημα 4 σε 1 για Μικρομεσαίες Επιχειρήσεις',
    description:
      'Ολοκληρωμένο πολυμηχάνημα laser με εκτύπωση, αντιγραφή, σάρωση και φαξ. Αυτόματος τροφοδότης 50 φύλλων, οθόνη αφής 2,8" και υψηλή ταχύτητα εκτύπωσης.',
    images: [mx431adn1, mx431adn2, mx431adn3, mx431adn4],
    specs: [
      { label: 'Ταχύτητα',      value: '42 σελ./λεπτό (A4)' },
      { label: 'Ανάλυση',       value: '2400 × 600 dpi' },
      { label: 'Σύνδεση',       value: 'Gigabit Ethernet + USB 2.0' },
      { label: 'Μνήμη',         value: '512 MB' },
      { label: 'Μηνιαία χρήση', value: 'Έως 80.000 σελίδες' },
    ],
    longDescription: {
      paragraphs: [
        'Το Lexmark MX431adn είναι ένα ολοκληρωμένο πολυμηχάνημα laser που συνδυάζει εκτύπωση, αντιγραφή, έγχρωμη σάρωση και φαξ σε μία συμπαγή συσκευή — η ιδανική λύση για μικρομεσαίες επιχειρήσεις.',
        'Με ταχύτητα 42 σελίδων ανά λεπτό, επεξεργαστή dual-core 1,0 GHz και μνήμη 512 MB, διαχειρίζεται με άνεση τις απαιτήσεις ενός πολυάσχολου γραφείου. Η οθόνη αφής 2,8" καθιστά τον χειρισμό εξαιρετικά απλό και διαισθητικό.',
        'Ο αυτόματος τροφοδότης εγγράφων 50 φύλλων με duplex σάρωση επιτρέπει την αντιγραφή και σάρωση δίφυλλων εγγράφων χωρίς χειρισμό. Η σύνδεση Gigabit Ethernet εξυπηρετεί ολόκληρο το δίκτυο του γραφείου ταυτόχρονα.',
        'Το τόνερ Extra High Yield καλύπτει έως 20.000 σελίδες, εξασφαλίζοντας εξαιρετικά χαμηλό κόστος ανά σελίδα.',
      ],
    },
    characteristics: [
      'Πολυμηχάνημα 4 σε 1: Εκτύπωση / Αντιγραφή / Σάρωση / Φαξ',
      'Ταχύτητα: 42 σελ./λεπτό (A4)',
      'Ανάλυση: 2400 × 600 dpi (2400 IQ)',
      'Επεξεργαστής: Dual Core 1,0 GHz',
      'Μνήμη: 512 MB',
      'Σύνδεση: Gigabit Ethernet (10/100/1000) + USB 2.0',
      'Οθόνη αφής: 2,8 ιντσών (7,2 cm) LCD touch',
      'ADF: 50 φύλλα με duplex σάρωση',
      'Αυτόματη εκτύπωση διπλής όψης (Auto Duplex)',
      'Χωρητικότητα: 350 φύλλα (επεκτάσιμη έως 900)',
      'Μηνιαίος κύκλος: έως 80.000 σελίδες',
      'Τόνερ Extra High Yield: έως 20.000 σελίδες',
      'ENERGY STAR πιστοποιημένο',
    ],
  },
  {
    id: 'lexmark-mx532adwe',
    name: 'Lexmark MX532adwe',
    tagline: 'Επαγγελματικό MFP Υψηλής Απόδοσης με WiFi',
    description:
      'Κορυφαίο πολυμηχάνημα laser με quad-core επεξεργαστή, 2 GB μνήμη, WiFi, έγχρωμη οθόνη αφής 4,3" και ADF 100 φύλλων. Για απαιτητικά εργασιακά περιβάλλοντα.',
    images: [mx532adwe1, mx532adwe2],
    specs: [
      { label: 'Ταχύτητα',      value: '46 σελ./λεπτό (A4)' },
      { label: 'Ανάλυση',       value: '1200 × 1200 dpi' },
      { label: 'Σύνδεση',       value: 'Gigabit Ethernet + WiFi 802.11ac' },
      { label: 'Μνήμη',         value: '2048 MB (2 GB)' },
      { label: 'Μηνιαία χρήση', value: 'Έως 120.000 σελίδες' },
    ],
    longDescription: {
      paragraphs: [
        'Το Lexmark MX532adwe είναι το κορυφαίο πολυμηχάνημα laser της σειράς, σχεδιασμένο για επιχειρήσεις που απαιτούν υψηλές ταχύτητες, εξαιρετική ασφάλεια και τεράστια αυτονομία εκτύπωσης.',
        'Με quad-core επεξεργαστή 1,2 GHz και εντυπωσιακή μνήμη 2 GB, χειρίζεται άνετα τις πιο απαιτητικές εργασίες εκτύπωσης και σάρωσης. Η ταχύτητα των 46 σελίδων ανά λεπτό και η ανάλυση 1200 × 1200 dpi εγγυώνται έξοχη ποιότητα.',
        'Η ενσωματωμένη WiFi 802.11ac επιτρέπει ασύρματη σύνδεση από οποιαδήποτε συσκευή, ενώ η έγχρωμη οθόνη αφής 4,3" Lexmark e-Task προσφέρει πλήρη πρόσβαση σε όλες τις λειτουργίες.',
        'Ο αυτόματος τροφοδότης 100 φύλλων με duplex σάρωση και η χωρητικότητα χαρτιού έως 2.300 φύλλα καθιστούν το MX532adwe την ιδανική επιλογή για γραφεία με έντονη καθημερινή χρήση. Το τόνερ Ultra High Yield φτάνει έως τις 28.400 σελίδες.',
      ],
    },
    characteristics: [
      'Πολυμηχάνημα 4 σε 1: Εκτύπωση / Αντιγραφή / Σάρωση / Φαξ',
      'Ταχύτητα: 46 σελ./λεπτό (A4)',
      'Ανάλυση: 1200 × 1200 dpi',
      'Επεξεργαστής: Quad Core 1,2 GHz',
      'Μνήμη: 2048 MB (2 GB)',
      'Σύνδεση: Gigabit Ethernet + WiFi 802.11a/b/g/n/ac + USB 2.0',
      'Έγχρωμη οθόνη αφής: 4,3 ιντσών Lexmark e-Task',
      'ADF: 100 φύλλα με duplex σάρωση',
      'Αυτόματη εκτύπωση διπλής όψης (Auto Duplex)',
      'Χωρητικότητα: 650 φύλλα standard (επεκτάσιμη έως 2.300)',
      'Μηνιαίος κύκλος: έως 120.000 σελίδες',
      'Τόνερ Ultra High Yield: έως 28.400 σελίδες',
      'Trusted Platform Module (TPM) — ενισχυμένη ασφάλεια δεδομένων',
      'ENERGY STAR πιστοποιημένο',
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

/* ─── Gallery ────────────────────────────────────────────────────── */
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
function ProductRow({ product }: { product: Product }) {
  const [charOpen, setCharOpen] = useState(false)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-12 border-b border-slate-100 last:border-0">
      {/* Left — gallery */}
      <div className="relative">
        {/* Best seller badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow">
          <Star size={9} className="fill-white" />
          Best Seller
        </div>
        <ProductGallery images={product.images} />
      </div>

      {/* Right — info */}
      <div className="flex flex-col justify-center">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
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
                      <ChevronRight size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
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

        {/* Quick specs */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          {product.specs.map((spec) => (
            <div key={spec.label} className="bg-slate-50 rounded-lg px-3 py-2">
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">{spec.label}</p>
              <p className="text-xs font-bold text-slate-700 mt-0.5">{spec.value}</p>
            </div>
          ))}
        </div>

        {product.characteristics && (
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

            {charOpen && (
              <ul className="mt-4 space-y-1.5">
                {product.characteristics.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function LexmarkPage() {
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
        title="Lexmark Εκτυπωτές | ComHouse"
        description="Εξουσιοδοτημένος αντιπρόσωπος Lexmark. Laser εκτυπωτές, toner και service για επαγγελματική χρήση."
      />

      {/* ── Hero ── */}
      <section className="relative bg-emerald-950 px-4 pt-10 pb-24">
        <div className="max-w-5xl mx-auto">

          <Breadcrumb items={[
            { label: 'Αρχική', href: '/' },
            { label: 'Εκτυπωτές', href: '/printers/lexmark' },
            { label: 'Lexmark' },
          ]} />

          {/* Logo */}
          <div className="mb-10 inline-block bg-white px-5 py-3 rounded-lg shadow-md">
            <img src={lexmarkLogo} alt="Lexmark" className="h-10 sm:h-12 object-contain" />
          </div>

          {/* Text */}
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400 mb-2">
              Επαγγελματικοί Εκτυπωτές Laser
            </p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-1">
              Lexmark — Αξιόπιστη εκτύπωση για κάθε επιχείρηση
            </h1>
            <p className="text-emerald-300 text-sm font-medium mb-6">
              Υψηλή ταχύτητα, χαμηλό κόστος ανά σελίδα, εξαιρετική ανθεκτικότητα
            </p>

            <div className="space-y-4 text-sm text-emerald-100/70 leading-relaxed">
              <p>Η Lexmark είναι παγκοσμίως αναγνωρισμένη για την κατασκευή επαγγελματικών εκτυπωτών και πολυμηχανημάτων laser υψηλής αξιοπιστίας. Με δεκαετίες εμπειρίας στον κλάδο, προσφέρει λύσεις εκτύπωσης για επιχειρήσεις κάθε μεγέθους — από το μικρό γραφείο έως τη μεγάλη εταιρεία.</p>
              <p>Οι εκτυπωτές Lexmark διακρίνονται για τον ατσάλινο σκελετό τους, τον μόνιμο fuser και το εξαιρετικά χαμηλό κόστος ανά σελίδα που επιτυγχάνεται με τα τόνερ υψηλής απόδοσης. Χαρακτηριστικά που τους καθιστούν επένδυση μακράς διάρκειας για κάθε εργασιακό περιβάλλον.</p>
              <p className="font-semibold text-emerald-100">Παρακάτω θα βρείτε τα 3 πιο δημοφιλή μοντέλα μας — τα best sellers της σειράς. Εκτός από αυτά, διαθέτουμε πλήρη γκάμα Lexmark για κάθε ανάγκη. Επικοινωνήστε μαζί μας για να σας προτείνουμε το κατάλληλο μοντέλο για την επιχείρησή σας.</p>
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
        <div className="bg-linear-to-r from-emerald-700 to-emerald-500 px-4 py-3">
          <p className="text-[9px] font-black uppercase tracking-widest text-emerald-100">Best Sellers Lexmark</p>
        </div>

        <div className="overflow-hidden">
          <button
            onClick={() => goToProduct(product.id)}
            style={cardStyle}
            className="w-full flex flex-col items-center px-4 pt-4 pb-4 hover:bg-emerald-50 group text-left transition-colors"
          >
            <div className="w-full flex items-center justify-center bg-slate-50 rounded-xl py-4 mb-3">
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="h-24 w-24 object-contain"
              />
            </div>
            <p className="text-sm font-bold text-slate-800 group-hover:text-emerald-600 transition-colors leading-snug w-full">
              {product.name}
            </p>
            <div className="mt-2 w-full flex items-center justify-center gap-1.5 bg-emerald-600 group-hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
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
                  ? 'w-4 h-1.5 bg-emerald-500'
                  : 'w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Products header ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">Best Sellers</span>
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-xs text-slate-400 italic">Διαθέτουμε και άλλα μοντέλα — επικοινωνήστε μαζί μας</span>
        </div>
      </div>

      {/* ── Products ── */}
      <div ref={productsRef} className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
        {printerProducts.map((p) => (
          <FadeUp key={p.id}>
            <div id={p.id} className="scroll-mt-24">
              <ProductRow product={p} />
            </div>
          </FadeUp>
        ))}
      </div>

      {/* ── More products banner ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-extrabold text-emerald-900">Αναζητάτε άλλο μοντέλο;</p>
            <p className="text-xs text-emerald-700 mt-1">Διαθέτουμε πλήρη γκάμα εκτυπωτών και πολυμηχανημάτων Lexmark. Ρωτήστε μας για τιμές και διαθεσιμότητα.</p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 text-sm rounded-xl shadow transition-colors"
          >
            Επικοινωνία <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="py-16 px-4 bg-linear-to-br from-emerald-700 to-emerald-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white">
            Δεν ξέρετε ποιος εκτυπωτής σας ταιριάζει;
          </h2>
          <p className="mt-3 text-emerald-200 text-sm">
            Ο έμπειρος τεχνικός μας θα σας καθοδηγήσει στην καλύτερη επιλογή για την επιχείρησή σας.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-emerald-800 font-semibold px-7 py-3 text-sm rounded-xl shadow-md transition-colors"
          >
            Επικοινωνία <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  )
}
