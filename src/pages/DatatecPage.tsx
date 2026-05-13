import { useState, useRef, useEffect, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown, CheckCircle2, X } from 'lucide-react'
import { FadeUp } from '../components/ScrollReveal'

import datatecLogo from '../assets/logo-removebg-preview.png'
import dtec100 from '../assets/dtec100md1-removebg-preview.png'
import dtec50 from '../assets/dTEC50md.png'

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

/* ─── DataTec Products ───────────────────────────────────────────── */
const datatecProducts: Product[] = [
  {
    id: 'dtec-100',
    name: 'dTEC-100mD',
    tagline: 'Ταμειακή Λιανικής & Εστιατορίου',
    description:
      'Νέα Ταμειακή Μηχανή Λιανικής και Εστιατορίου κατασκευασμένη και αδειοδοτημένη βάσει ΑΑΔΕ Α1173.',
    images: [dtec100],
    specs: [
      { label: 'Έγκριση',     value: '15DMP677/28-02-2024' },
      { label: 'Είδη',        value: '10.000 λιανική / 5.000 εστιατόριο' },
      { label: 'Εκτύπωση',    value: '150 mm/sec' },
      { label: 'Τραπέζια',    value: 'Διαχείριση 150 τραπεζιών' },
      { label: 'Πιστοποίηση', value: 'ΑΑΔΕ Α1173' },
    ],
    longDescription: {
      paragraphs: [
        'Η dTEC100mD είναι μία Νέα Ταμειακή Μηχανή Λιανικής και Εστιατορίου και έχει κατασκευαστεί και αδειοδοτηθεί με βάση της ΑΑΔΕ Α1173. Συνδέεται με ΠΑΡΟΧΟ ΥΠΑΗΕΣ για την έκδοση Τιμολογίων.',
      ],
      bullets: [
        'ΕΓΚΡΙΣΗ ΥΠΟΥΡΓΕΙΟΥ ΟΙΚΟΝΟΜΙΚΩΝ: 15DMP677/28-02-2024',
        'VOUCHER PRODUCT ID — Κατηγορία 5 K.05.01 ΑΝΤΙΚΑΤΑΣΤΑΣΗ ΕΦΔΣΣ 160240',
        'VOUCHER PRODUCT ID — Κατηγορία 6 K.06.01 ΕΣΤΙΑΣΗ 160241',
        'VOUCHER PRODUCT ID firmware update — Κατηγορία 4 K.04.01 177434',
      ],
      sections: [
        {
          title: 'Ειδικά χαρακτηριστικά εστιατορίου',
          bullets: [
            'Προαιρετική εκτύπωση ΠΡΟΣΩΡΙΝΩΝ ΑΠΟΔΕΙΞΕΩΝ',
            'Ψηφιακό πελατολόγιο',
            'Έκδοση παραστατικών ΤΙΜΟΛΟΓΙΩΝ μέσω ΠΑΡΟΧΩΝ ΥΠΑΗΕΣ',
            'Ακύρωση Απόδειξης που έχει εκδοθεί',
            'Πιστωτική Απόδειξη - Τιμολόγιο',
            'Σύνδεση με myData και αποστολή Τιμολογίου',
            'Εύρεση Στοιχείων πελάτη από την ΑΑΔΕ',
            'Τέλος Παρεπιδημούντων',
            'Φόρος Διαμονής',
            'Διαχείριση 150 τραπεζιών',
            'Εκτύπωση Τελικής Απόδειξης με αριθμό & ώρα προσωρινών αποδείξεων',
            'Διαχείριση Επιστροφών Ειδών προηγούμενης παραγγελίας',
            'Διαχείριση 5.000 ειδών με αποθήκη',
            'Διαχείριση 30 Οδηγιών παρασκευής ειδών',
            'Διαχείριση 50 τμημάτων & 20 κατηγοριών',
            'Διαχείριση 10 πληρωμών & 16 χειριστών',
            'Μεταφορά Τραπεζιού από Τραπέζι σε Τραπέζι',
            'Μεταφορά Πιάτων σε άλλο τραπέζι',
            'Μερική Πληρωμή Τραπεζιού',
            'Αυτόματο κλείσιμο Ανοικτών τραπεζιών',
            'Εκτύπωση ανάλυσης λογαριασμού & συνόλων ανά τραπέζι',
            'Διαχείριση Εισιτηρίου',
            'Αποστολή παραγγελίας έως 16 διαφορετικούς εκτυπωτές',
          ],
        },
        {
          title: 'Επιπλέον αναφορές',
          bullets: [
            'Ανοικτών τραπεζιών',
            'Συγκεκριμένου τραπεζιού με πλήρη καταγραφή παραγγελιών',
            'Ημερήσιες πωλήσεις με ανάλυση ανά Φ.Π.Α.',
            'Συγκεντρωτικές πωλήσεις ανά τμήμα και ημερομηνία',
            'Απόδοση Φ.Π.Α. από ημερομηνία έως ημερομηνία',
            'Σύνδεση με SERVER Γ.Γ.Π.Σ.',
          ],
        },
        {
          title: 'Συνδέσεις συσκευών',
          bullets: [
            'BarCode Reader',
            'Εκτυπωτή κουζίνας',
            'Ηλεκτρονικό ζυγό',
            'Εξωτερική Οθόνη 5 γραμμών',
            'Εξωτερικό Windows keyboard',
            'EFT POS',
            'Συμβατό με ARMPOS',
          ],
        },
      ],
    },
    characteristicSections: [
      {
        title: 'Είδη',
        bullets: ['10.000 Είδη στην Λιανική και 5.000 στο Εστιατόριο'],
      },
      {
        title: 'Τμήματα',
        bullets: ['Έως 100 τμήματα προγραμματιζόμενα — 20 κατηγορίες προϊόντων'],
      },
      {
        title: 'Χειριστές',
        bullets: ['16 χειριστές με κωδικό ή με πλήκτρο'],
      },
      {
        title: 'Πελάτες - Τιμολόγιο',
        bullets: ['Διαχείριση 1.000 πελατών για το Τιμολόγιο που εκδίδεται σε αντικατάσταση της Νόμιμης Απόδειξης'],
      },
      {
        title: 'Οθόνη - Πληκτρολόγιο',
        bullets: [
          'Οθόνη LCD φωτιζόμενη 4 γραμμών, 16 χαρακτήρων',
          'Πληκτρολόγιο 30 προγραμματιζόμενων πλήκτρων',
        ],
      },
      {
        title: 'Εκτυπωτής',
        bullets: [
          'Ταχύτητα εκτύπωσης 150 mm/sec',
          'Αυτόματη εισαγωγή χαρτιού (Easy load)',
          'Ανιχνευτής τέλους χαρτοταινίας',
          'Διαστάσεις χαρτοταινίας 57mm',
        ],
      },
      {
        title: 'Λεκτικό - Γραφικές Εικόνες',
        bullets: [
          'Δυνατότητα γραφικής εικόνας στην αρχή και στο τέλος της απόδειξης',
          'Εκτύπωση λογοτύπου 8 γραμμών 28-32 χαρακτήρων',
          'Διαφημιστικό μήνυμα στο τέλος της απόδειξης 2 γραμμών των 32 χαρακτήρων',
        ],
      },
    ],
  },
  {
    id: 'dtec-50',
    name: 'dTEC-50mD',
    tagline: 'Ταμειακή Λιανικής & Εστιατορίου',
    description:
      'Νέα Ταμειακή Μηχανή Λιανικής και Εστιατορίου κατασκευασμένη και αδειοδοτημένη βάσει ΑΑΔΕ Α1173.',
    images: [dtec50],
    specs: [
      { label: 'Έγκριση',     value: '15DMS686/08-04-2024' },
      { label: 'Είδη',        value: '10.000 λιανική / 5.000 εστιατόριο' },
      { label: 'Εκτύπωση',    value: '150 mm/sec' },
      { label: 'Τραπέζια',    value: 'Διαχείριση 150 τραπεζιών' },
      { label: 'Πιστοποίηση', value: 'ΑΑΔΕ Α1173' },
    ],
    longDescription: {
      paragraphs: [
        'Η dTEC50mD είναι μία Νέα Ταμειακή Μηχανή Λιανικής και Εστιατορίου και έχει κατασκευαστεί και αδειοδοτηθεί με βάση της ΑΑΔΕ Α1173.',
      ],
      bullets: [
        'ΕΓΚΡΙΣΗ ΥΠΟΥΡΓΕΙΟΥ ΟΙΚΟΝΟΜΙΚΩΝ: 15DMS686/08-04-2024',
        'VOUCHER PRODUCT ID — Κατηγορία 5 K.05.01 160569',
        'VOUCHER PRODUCT ID — Κατηγορία 6 K.06.01 160570',
        'VOUCHER PRODUCT ID firmware update — Κατηγορία 4 K.04.01 177435',
      ],
      sections: [
        {
          title: 'Ειδικά χαρακτηριστικά εστιατορίου',
          bullets: [
            'Ακύρωση Απόδειξης που έχει εκδοθεί',
            'Ψηφιακό Πελατολόγιο',
            'Εκτύπωση ή όχι Προσωρινών Αποδείξεων',
            'Πιστωτική Απόδειξη - Τιμολόγιο',
            'Σύνδεση με myData και αποστολή Τιμολογίου μέσω Παρόχου ΥΠΑΗΕΣ',
            'Εύρεση Στοιχείων πελάτη από την ΑΑΔΕ',
            'Τέλος Παρεπιδημούντων',
            'Φόρος Διαμονής',
            'Διαχείριση 150 τραπεζιών',
            'Εκτύπωση Τελικής Απόδειξης με αριθμό & ώρα προσωρινών αποδείξεων',
            'Διαχείριση Επιστροφών Ειδών προηγούμενης παραγγελίας',
            'Διαχείριση 5.000 ειδών με αποθήκη',
            'Διαχείριση 30 Οδηγιών παρασκευής ειδών',
            'Διαχείριση 50 τμημάτων & 20 κατηγοριών',
            'Διαχείριση 10 πληρωμών & 16 χειριστών',
            'Μεταφορά Τραπεζιού από Τραπέζι σε Τραπέζι',
            'Μεταφορά Πιάτων σε άλλο τραπέζι',
            'Μερική Πληρωμή Τραπεζιού',
            'Αυτόματο κλείσιμο Ανοικτών τραπεζιών',
            'Εκτύπωση ανάλυσης λογαριασμού & συνόλων ανά τραπέζι',
            'Διαχείριση Εισιτηρίου',
            'Αποστολή παραγγελίας έως 16 διαφορετικούς εκτυπωτές',
          ],
        },
        {
          title: 'Επιπλέον αναφορές',
          bullets: [
            'Ανοικτών τραπεζιών',
            'Συγκεκριμένου τραπεζιού με πλήρη καταγραφή παραγγελιών',
            'Ημερήσιες πωλήσεις με ανάλυση ανά Φ.Π.Α.',
            'Συγκεντρωτικές πωλήσεις ανά τμήμα και ημερομηνία',
            'Απόδοση Φ.Π.Α. από ημερομηνία έως ημερομηνία',
            'Σύνδεση με SERVER Γ.Γ.Π.Σ.',
          ],
        },
        {
          title: 'Συνδέσεις συσκευών',
          bullets: [
            'BarCode Reader',
            'Εκτυπωτή κουζίνας',
            'Ηλεκτρονικό ζυγό',
            'Εξωτερική Οθόνη 5 γραμμών',
            'Εξωτερικό Windows keyboard',
            'EFT POS',
            'Συρτάρι με option adaptor',
            'Συμβατό με Λογισμικό ARMPOS',
          ],
        },
      ],
    },
    characteristicSections: [
      {
        title: 'Είδη',
        bullets: ['10.000 Είδη στην Λιανική και 5.000 στο Εστιατόριο'],
      },
      {
        title: 'Τμήματα',
        bullets: ['Έως 100 τμήματα προγραμματιζόμενα — 20 κατηγορίες προϊόντων'],
      },
      {
        title: 'Χειριστές',
        bullets: ['16 χειριστές με κωδικό ή με πλήκτρο'],
      },
      {
        title: 'Πελάτες - Τιμολόγιο',
        bullets: ['Διαχείριση 1.000 πελατών για το Τιμολόγιο που εκδίδεται σε αντικατάσταση της Νόμιμης Απόδειξης'],
      },
      {
        title: 'Οθόνη - Πληκτρολόγιο',
        bullets: [
          'Οθόνη LCD φωτιζόμενη 2 γραμμών, 16 χαρακτήρων',
          'Πληκτρολόγιο 30 προγραμματιζόμενων πλήκτρων',
        ],
      },
      {
        title: 'Εκτυπωτής',
        bullets: [
          'Ταχύτητα εκτύπωσης 150 mm/sec',
          'Αυτόματη εισαγωγή χαρτιού (Easy load)',
          'Ανιχνευτής τέλους χαρτοταινίας',
          'Διαστάσεις χαρτοταινίας 57mm',
        ],
      },
      {
        title: 'Λεκτικό - Γραφικές Εικόνες',
        bullets: [
          'Δυνατότητα γραφικής εικόνας στην αρχή και στο τέλος της απόδειξης',
          'Εκτύπωση λογοτύπου 8 γραμμών 28-32 χαρακτήρων',
          'Διαφημιστικό μήνυμα στο τέλος της απόδειξης 2 γραμμών των 32 χαρακτήρων',
        ],
      },
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
  const [textOpen, setTextOpen] = useState(false)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-12 border-b border-slate-100 last:border-0">
      <ProductGallery images={product.images} />

      <div className="flex flex-col justify-center">
        <span className={`text-xs font-bold uppercase tracking-widest ${accentText}`}>
          {product.tagline}
        </span>
        <h3 className="mt-2 text-2xl font-extrabold text-slate-900">{product.name}</h3>

        <div className="mt-4">
          <div
            className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
            style={{ maxHeight: textOpen ? '2000px' : '300px' }}
          >
            {product.longDescription ? (
              <div className="space-y-3 text-sm text-slate-500 leading-relaxed">
                {product.longDescription.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {product.longDescription.bullets && product.longDescription.bullets.length > 0 && (
                  <ul className="space-y-1.5 py-1">
                    {product.longDescription.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <ChevronRight size={14} className="text-cyan-500 shrink-0 mt-0.5" />
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
                          <ChevronRight size={11} className="text-cyan-400 shrink-0 mt-0.5" />
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

            {!textOpen && (
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-linear-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>

          <button
            onClick={() => setTextOpen(!textOpen)}
            className={`mt-2 inline-flex items-center gap-1 text-sm font-semibold transition-colors ${accentText} hover:opacity-70`}
          >
            {textOpen ? 'Διαβάστε λιγότερα' : 'Διαβάστε περισσότερα'}
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${textOpen ? 'rotate-180' : ''}`}
            />
          </button>
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
                {product.characteristics.map((c, i) =>
                  c.startsWith('✔') ? (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-500 ml-6">
                      <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                      {c.slice(2)}
                    </li>
                  ) : (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 size={15} className="text-cyan-500 shrink-0 mt-0.5" />
                      {c}
                    </li>
                  )
                )}
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
                          <ChevronRight size={12} className="text-cyan-500 shrink-0 mt-0.5" />
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
export default function DatatecPage() {
  const [displayIdx, setDisplayIdx] = useState(0)
  const [cardStyle, setCardStyle] = useState<CSSProperties>({
    transform: 'translateY(0)',
    opacity: 1,
    transition: 'transform 0.24s ease, opacity 0.24s ease',
  })
  const [textOpen, setTextOpen] = useState(false)
  const isAnimating = useRef(false)
  const idxRef = useRef(0)
  const productsRef = useRef<HTMLDivElement>(null)
  const [widgetVisible, setWidgetVisible] = useState(true)

  // Hide widget when the products section enters the viewport, show when it leaves
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

  // Auto-advance every 3.5 s
  useEffect(() => {
    const id = setInterval(() => {
      slideTo((idxRef.current + 1) % datatecProducts.length)
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

  const product = datatecProducts[displayIdx]

  return (
    <div className="pt-20 lg:pt-28 bg-white min-h-screen">

      {/* ── Hero + Text — unified cyan section ── */}
      <section className="bg-cyan-950 px-4 pt-10 pb-14">
        <div className="max-w-5xl mx-auto">

          {/* Logo */}
          <div className="mb-10 inline-block bg-white rounded-2xl px-6 py-3 shadow-lg">
            <img src={datatecLogo} alt="DataTec" className="h-14 sm:h-16 object-contain" />
          </div>

          {/* Expandable text content */}
          <div className="max-w-3xl">
            {/* Always-visible header */}
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400 mb-2">
              Φορολογικές Ταμειακές Μηχανές Λιανικής &amp; Εστιατορίου
            </p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-1">
              Ταμειακές Μηχανές DataTec
            </h1>
            <p className="text-cyan-300 text-sm font-medium mb-6">
              Αξιόπιστες λύσεις για κάθε είδους επιχείρηση
            </p>

            {/* Always-visible body */}
            <div className="space-y-4 text-sm text-cyan-100/70 leading-relaxed">
              <p>
                Ανακαλύψτε τις ταμειακές μηχανές DataTec — μία σειρά σύγχρονων φορολογικών
                συστημάτων που συνδυάζουν αξιοπιστία, ευελιξία και πλήρη συμμόρφωση με τις
                απαιτήσεις της ΑΑΔΕ. Κατασκευασμένες για να καλύπτουν τόσο τις ανάγκες της
                λιανικής πώλησης όσο και της εστίασης, οι dTEC αποτελούν ολοκληρωμένη λύση
                για κάθε επιχείρηση.
              </p>
              <p>
                Με πιστοποίηση βάσει ΑΑΔΕ Α1173 και πλήρη ενσωμάτωση με τo myDATA, οι
                ταμειακές DataTec επιτρέπουν την έκδοση όλων των απαραίτητων παραστατικών —
                αποδείξεων, τιμολογίων και πιστωτικών — απευθείας από τη συσκευή. Η απρόσκοπτη
                σύνδεση με παρόχους ΥΠΑΗΕΣ εξασφαλίζει αυτόματη αποστολή δεδομένων, μηδενίζοντας
                τον διοικητικό φόρτο της επιχείρησής σας.
              </p>
              <p>
                Η ComputerHouse αναλαμβάνει την εγκατάσταση, προγραμματισμό και τεχνική
                υποστήριξη των ταμειακών DataTec. Από την πρώτη ρύθμιση έως την καθημερινή
                λειτουργία, η ομάδα μας είναι πάντα δίπλα σας για να εξασφαλίσει αδιάλειπτη
                λειτουργία του ταμειακού σας συστήματος.
              </p>
              <p className="font-semibold text-cyan-100">
                Επιλέξτε DataTec για να αναβαθμίσετε την επιχείρησή σας με αξιόπιστη και
                σύγχρονη φορολογική τεχνολογία!
              </p>

              {/* Divider */}
              <div className="flex items-center gap-3 py-2">
                <div className="flex-1 h-px bg-cyan-800" />
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-500">
                  Διπλή Λειτουργία
                </span>
                <div className="flex-1 h-px bg-cyan-800" />
              </div>

              {/* Section 2 — always visible up to and including restaurant paragraph */}
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
                Λιανική & Εστίαση σε μία συσκευή
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Ταμειακή για Λιανική και Εστιατόριο
              </h2>
              <p>
                Οι ταμειακές μηχανές DataTec dTEC αποτελούν μία από τις λίγες λύσεις στην
                αγορά που καλύπτουν ταυτόχρονα τις ανάγκες λιανικής πώλησης και εστιατορίου
                από μία και μόνο συσκευή, απλοποιώντας δραστικά τη διαχείριση της επιχείρησης.
              </p>
              <p>
                Στη λειτουργία εστιατορίου, η συσκευή διαχειρίζεται έως 150 τραπέζια,
                υποστηρίζει εκτύπωση προσωρινών αποδείξεων, μεταφορά παραγγελιών μεταξύ
                τραπεζιών, μερικές πληρωμές και αποστολή παραγγελιών έως 16 διαφορετικούς
                εκτυπωτές κουζίνας. Το Ψηφιακό Πελατολόγιο ενσωματώνεται πλήρως για κλάδους
                που το απαιτεί η ΑΑΔΕ.
              </p>

              {/* Collapsible — remaining 2 paragraphs */}
              <div
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{ maxHeight: textOpen ? '400px' : '0px' }}
              >
                <div className="space-y-4">
                  <p>
                    Στη λιανική, παρέχει διαχείριση έως 10.000 ειδών με barcode, 100
                    προγραμματιζόμενα τμήματα, 16 χειριστές και σύνδεση με ζυγούς, scanners
                    και EFT POS. Η ταχύτητα εκτύπωσης 150 mm/sec εξασφαλίζει γρήγορη εξυπηρέτηση
                    πελατών ακόμα και σε ώρες αιχμής.
                  </p>
                  <p>
                    Η πλήρης συμβατότητα με το λογισμικό ARMPOS και η δυνατότητα σύνδεσης με
                    εξωτερική οθόνη πελάτη καθιστούν τις dTEC ταμειακές ιδανική επιλογή για
                    επιχειρήσεις που αναζητούν επεκτάσιμη και μελλοντικά ασφαλή λύση.
                  </p>
                </div>
              </div>
            </div>

            {/* Read more toggle */}
            <button
              onClick={() => setTextOpen(!textOpen)}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {textOpen ? 'Διαβάστε λιγότερα' : 'Διαβάστε περισσότερα'}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${textOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

        </div>
      </section>

      {/* ── Bottom-right product carousel widget ── */}
      <div className={`fixed bottom-6 right-6 z-40 w-56 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
        widgetVisible ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0 pointer-events-none'
      }`}>

        {/* Gradient header */}
        <div className="bg-linear-to-r from-cyan-700 to-cyan-500 px-4 py-3">
          <p className="text-[9px] font-black uppercase tracking-widest text-cyan-100">Προϊόντα DataTec</p>
        </div>

        {/* Sliding product card */}
        <div className="overflow-hidden">
          <button
            onClick={() => goToProduct(product.id)}
            style={cardStyle}
            className="w-full flex flex-col items-center px-4 pt-4 pb-4 hover:bg-cyan-50 group text-left transition-colors"
          >
            {/* Image */}
            <div className="w-full flex items-center justify-center bg-slate-50 rounded-xl py-4 mb-3">
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="h-24 w-24 object-contain"
              />
            </div>
            {/* Name */}
            <p className="text-sm font-bold text-slate-800 group-hover:text-cyan-600 transition-colors leading-snug w-full">
              {product.name}
            </p>
            {/* CTA */}
            <div className="mt-2 w-full flex items-center justify-center gap-1.5 bg-cyan-600 group-hover:bg-cyan-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
              Δείτε το <ArrowRight size={12} />
            </div>
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 pb-3">
          {datatecProducts.map((_, i) => (
            <button
              key={i}
              onClick={() => slideTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === displayIdx
                  ? 'w-4 h-1.5 bg-cyan-500'
                  : 'w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>


      {/* Products */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600">Τα Προϊόντα μας</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>
      </div>
      <div ref={productsRef} className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
        {datatecProducts.map((p) => (
          <FadeUp key={p.id}>
            <div id={p.id} className="scroll-mt-24">
              <ProductRow product={p} accentText="text-cyan-600" />
            </div>
          </FadeUp>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16 px-4 bg-linear-to-br from-blue-700 to-blue-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white">
            Δεν ξέρετε ποια ταμειακή σας ταιριάζει;
          </h2>
          <p className="mt-3 text-blue-200 text-sm">
            Ο έμπειρος τεχνικός μας θα σας καθοδηγήσει στην καλύτερη επιλογή.
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
