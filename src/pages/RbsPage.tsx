import { useState, useRef, useEffect, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown, CheckCircle2, X } from 'lucide-react'
import { FadeUp } from '../components/ScrollReveal'

import rbsLogo from '../assets/LOGO-RBS-TRANSP-scaled-2048x742.png'
import pepper from '../assets/Pepper-all-in-one-full-body-kit.png'
import edo1 from '../assets/EDO1-100x100.png'
import edo2 from '../assets/EDO2-1-100x100.png'
import epia1 from '../assets/EPIA-MCR1-100x100.png'
import epia2 from '../assets/EPIA-MCR2-100x100.png'
import elio1 from '../assets/ELIO1-100x100.png'
import elio2 from '../assets/ELIO2-1-100x100.png'

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

/* ─── RBS Products ───────────────────────────────────────────────── */
const rbsProducts: Product[] = [
  {
    id: 'pepper-aio',
    name: 'PEPPER All In One',
    tagline: 'Ταμειακή & POS σε μία συσκευή!',
    description:
      'Φορητή Android ταμειακή μηχανή με ενσωματωμένο εκτυπωτή 58mm, 4G, WiFi και κάμερα. Ιδανική για επιχειρήσεις που χρειάζονται κινητικότητα.',
    images: [pepper],
    specs: [
      { label: 'Οθόνη',        value: '5.5" IPS HD+' },
      { label: 'Επεξεργαστής', value: 'Octa-core 2.0GHz' },
      { label: 'Μνήμη',        value: '3GB RAM / 32GB' },
      { label: 'Εκτυπωτής',    value: '58mm θερμικός' },
      { label: 'Σύνδεση',      value: '4G + WiFi' },
    ],
    longDescription: {
      paragraphs: [
        'Η PEPPER All In One είναι μία Android ταμειακή μηχανή All In One, αδειοδοτημένη βάσει ΑΑΔΕ Α1173, η οποία ενσωματώνει σε μία συσκευή ταμειακή μηχανή και POS.',
        'Με οθόνη 5.5" IPS HD+, διαθέτει λειτουργικό σύστημα Android 14 με GMS certificate, οκταπύρηνο επεξεργαστή 2.0GHz 64-bit, μνήμη 3GB RAM και αποθηκευτικό χώρο 32GB.',
        'Ο ενσωματωμένος θερμικός εκτυπωτής 58mm εξασφαλίζει γρήγορη και αξιόπιστη εκτύπωση αποδείξεων, ενώ η κάμερα 5MP αυτόματης εστίασης επιτρέπει ανάγνωση barcodes.',
        'Συνδέεται μέσω 4G και WiFi, διαθέτει 2 θέσεις SIM και φορτίζει μέσω καλωδίου type-C.',
      ],
    },
    characteristics: [
      'Android 14 GMS certificate',
      'Οθόνη 5.5" IPS HD+',
      'Οκταπύρηνος επεξεργαστής 2.0GHz, 64 bits',
      'Μνήμη 3GB, αποθηκευτικός χώρος 32GB',
      '2 θέσεις SIM, type-C καλώδιο',
      'Εκτυπωτής: 58mm*40mm',
      'Κάμερα: 5MP αυτόματης εστίασης',
      'Σύνδεση Internet: 4G, WIFI',
      'Λειτουργικό Σύστημα: Android 14 GMS certificate',
      'Οκταπύρηνος Επεξεργαστής 2.0GHz, 64 bits',
      'Μνήμη 3GB, αποθηκευτικός χώρος 32GB, 2 θέσεις SIM, type-C καλώδιο',
      'Εκτυπωτής: 58mm*40mm, κάμερα: 5MP αυτόματης εστίασης',
      'Σύνδεση Internet : 4G, WIFI',
    ],
  },
  {
    id: 'edo-cr',
    name: 'EDO CR',
    tagline: 'Κορυφαία Φορολογική Ταμειακή',
    description:
      'Εξαιρετική αισθητική και μοναδικά λειτουργικά χαρακτηριστικά. Η κορυφαία ταμειακή μηχανή της αγοράς από την RBS.',
    images: [edo1, edo2],
    specs: [
      { label: 'Εκτύπωση',     value: '200mm/sec' },
      { label: 'Πληκτρολόγιο', value: 'Φωτιζόμενο εργονομικό' },
      { label: 'Είδη',         value: 'Έως 50.000 με barcode' },
      { label: 'Έγκριση',      value: '15DNR 684/28-02-24' },
      { label: 'Πιστοποίηση',  value: 'ΑΑΔΕ' },
    ],
    longDescription: {
      paragraphs: [
        'Εξαιρετική αισθητική, μοναδικά λειτουργικά χαρακτηριστικά! — Νέα λειτουργία: Ψηφιακό Πελατολόγιο Οχημάτων',
        'Η EDO CR βρίσκεται εδώ, με την μοναδικά πρωτοποριακή αισθητική της.',
        'Το ανανεωμένο εργονομικό πληκτρολόγιο, με μηχανικές επίχρυσες επαφές, προσφέρει μοναδική αισθητική, εξασφαλίζοντας περισσότερα από 20Μ πατήματα.',
        'Με φωτιζόμενο πληκτρολόγιο ρυθμιζόμενης έντασης, ιδιαίτερα φιλικό στο χρήστη, αποτελεί την ιδανικότερη επιλογή για όλες τις επιχειρήσεις λιανικής.',
        'Η λειτουργικότητα του Ψηφιακού Πελατολογίου Οχημάτων, παρέχεται δωρεάν σε όλες τις εγκαταστάσεις ταμειακών που συνοδεύονται από ECR Connect ή ECR Invoicing.',
        'Αρ. Έγκρισης 15DNR 684/28-02-24 — Η κορυφαία ταμειακή μηχανή της αγοράς.',
        'Με την EDO CR μπορείτε να αποκτήσετε μία νέας τεχνολογίας ταμειακή μηχανή, με την υψηλότερη ταχύτητα εκτύπωσης της αγοράς (200mm/sec) και παράλληλα με εκτύπωση ακόμα περισσότερων χαρακτήρων ανά γραμμή, για καλύτερη περιγραφή είδους.',
        'Διαθέτει απλή & γρήγορη εγκατάσταση και αξιόπιστη διασύνδεση με τις γνωστότερες εφαρμογές λογισμικού της αγοράς.',
        'H EDO CR διαθέτει λειτουργικά χαρακτηριστικά που συμμορφώνονται πλήρως με τις τεχνικές προδιαγραφές που αναφέρονται αφενός στην Απόφαση του Διοικητή της ΑΑΔΕ Α. 1173 και αφετέρου στην ΠΟΛ 1220 όπου αυτή έχει εφαρμογή.',
      ],
    },
    characteristics: [
      'Εξαιρετική αισθητική',
      'Στιβαρή κατασκευή',
      'Μεγάλη ταχύτητα εκτύπωσης (200 mm/sec)',
      'Φωτιζόμενο εργονομικό πληκτρολόγιο',
      'Διαχείριση έως 50.000 ειδών με barcode',
      'Δυνατότητα σύνδεσης πολλαπλών περιφερειακών',
      'Μέσω συνδρομής ECR Invoicing',
      '✔ Ηλεκτρονική τιμολόγηση πάνω από την ταμειακή',
      '✔ Αυτόματη ενημέρωση myData',
      'Μέσω συνδρομής ECR Connect',
      '✔ Απομακρυσμένη υποστήριξη',
      '✔ Δωρεάν αναβαθμίσεις λογισμικού ταμειακής',
      '✔ Δωρεάν χρήση mobile app ECR Connect',
      'Σύνδεση με EFT POS ή SOFT POS',
      'Δωρεάν Λειτουργία "Ψηφιακό Πελατολόγιο Οχημάτων"',
      '✔ Μέσω συνδρομής ECR Connect ή ECR Invoicing',
    ],
  },
  {
    id: 'epia-cr',
    name: 'EPIA CR',
    tagline: 'Μικρή, οικονομική & σύγχρονη',
    description:
      'Μικρή και ταυτόχρονα σύγχρονη πρόταση για ένα ολοκληρωμένο αυτόνομο ταμειακό σύστημα.',
    images: [epia1, epia2],
    specs: [
      { label: 'Οθόνες',         value: '2 LCD υψηλής ευκρίνειας' },
      { label: 'Είδη',           value: 'Έως 6.000 με barcode' },
      { label: 'Αυτονομία',      value: 'Έως 40h (add-on μπαταρία)' },
      { label: 'Έγκριση',        value: '15DNC 664/22-01-24' },
      { label: 'Πιστοποίηση',    value: 'ΑΑΔΕ' },
    ],
    longDescription: {
      paragraphs: [
        'Μικρή, οικονομική & σύγχρονη — Νέα λειτουργία: Ψηφιακό Πελατολόγιο Οχημάτων',
        'Η EPIA CR βρίσκεται εδώ και αποτελεί μικρή και ταυτόχρονα σύγχρονη πρόταση για ένα ολοκληρωμένο αυτόνομο ταμειακό σύστημα.',
        'Διαθέτει μικρές διαστάσεις και στιβαρή κατασκευή, ενώ μπορεί να εκτυπώσει χαρακτήρες μεγαλύτερου μεγέθους (διπλού ύψους και πάχους), με παράλληλη ρύθμιση της έντασης του μαύρου χρώματος στην εκτύπωση.',
        'Διαθέτει 2 LCD οθόνες (πελάτη & χρήστη) υψηλής ευκρίνειας, 5 τμήματα σε 1ο επίπεδο και 10 σε 2ο, ενώ παράλληλα υποστηρίζει πλήρη διαχείριση έως 300 πελάτες, έως 5 χειριστές με χρήση κωδικού και έως 6.000 είδη με barcode.',
        'Η λειτουργικότητα του Ψηφιακού Πελατολογίου Οχημάτων, παρέχεται δωρεάν σε όλες τις εγκαταστάσεις ταμειακών που συνοδεύονται από ECR Connect ή ECR Invoicing.',
        'Αρ. Έγκρισης 15DNC 664/22-01-24 — Εξαιρετικό κόστος προς απόδοση - ValueForMoney.',
        'Με την EPIA CR μπορείτε να αποκτήσετε ένα οικονομικό αυτόνομο ταμειακό σύστημα και να αξιοποιήσετε το μικρό μέγεθος και τη μεγάλη ενεργειακή αυτονομία της (έως και 40h), για χρήση χωρίς διαθέσιμη τροφοδοσία ρεύματος, με την προσθήκη μπαταρίας (add-on).',
        'Διαθέτει απλή & γρήγορη εγκατάσταση και αξιόπιστη διασύνδεση με τις γνωστότερες εφαρμογές λογισμικού της αγοράς.',
        'H EPIA CR διαθέτει λειτουργικά χαρακτηριστικά που συμμορφώνονται πλήρως με τις τεχνικές προδιαγραφές που αναφέρονται αφενός στην Απόφαση του Διοικητή της ΑΑΔΕ Α. 1173 και αφετέρου στην ΠΟΛ 1220 όπου αυτή έχει εφαρμογή.',
      ],
    },
    characteristics: [
      'Μικρών διαστάσεων',
      'Εξαιρετικό κόστος προς απόδοση',
      'Στιβαρή κατασκευή',
      'Διαχείριση έως 6.000 ειδών με barcode',
      'Δυνατότητα σύνδεσης πολλαπλών περιφερειακών',
      'Μέσω συνδρομής ECR Invoicing',
      '✔ Ηλεκτρονική τιμολόγηση πάνω από την ταμειακή',
      '✔ Αυτόματη ενημέρωση myData',
      'Μέσω συνδρομής ECR Connect',
      '✔ Απομακρυσμένη υποστήριξη',
      '✔ Δωρεάν αναβαθμίσεις λογισμικού ταμειακής',
      '✔ Δωρεάν χρήση mobile app ECR Connect',
      'Σύνδεση με EFT POS ή SOFT POS',
      'Δωρεάν Λειτουργία "Ψηφιακό Πελατολόγιο Οχημάτων"',
      '✔ Μέσω συνδρομής ECR Connect ή ECR Invoicing',
    ],
  },
  {
    id: 'elio-cr',
    name: 'ELIO CR',
    tagline: 'Η πιο εργονομική ταμειακή μηχανή της αγοράς',
    description:
      'Το πιο εργονομικό και αξιόπιστο αυτόνομο ταμειακό σύστημα της αγοράς με μοναδικό design.',
    images: [elio1, elio2],
    specs: [
      { label: 'Οθόνες',      value: '2 LCD υψηλής ευκρίνειας' },
      { label: 'Είδη',        value: 'Έως 30.000 με barcode' },
      { label: 'Χειριστές',   value: 'Έως 10 με κωδικό' },
      { label: 'Έγκριση',     value: '15DNA 662/25-01-24' },
      { label: 'Πιστοποίηση', value: 'ΑΑΔΕ' },
    ],
    longDescription: {
      paragraphs: [
        'Η πιο εργονομική ταμειακή μηχανή της αγοράς — Νέα λειτουργία: Ψηφιακό Πελατολόγιο Οχημάτων',
        'Η ELIO CR βρίσκεται εδώ και αποτελεί το πιο εργονομικό και αξιόπιστο αυτόνομο ταμειακό σύστημα της αγοράς.',
        'Με μοναδικό design και ανανεωμένο εργονομικό πληκτρολόγιο, ιδιαίτερα φιλικό στο χρήστη, αποτελεί την πιο σύγχρονη και αξιόπιστη επιλογή για όλες τις επιχειρήσεις λιανικής.',
        'Διαθέτει 2 LCD οθόνες (πελάτη & χρήστη) υψηλής ευκρίνειας, 10 τμήματα σε 1ο επίπεδο και 20 σε 2ο, ενώ παράλληλα υποστηρίζει πλήρη διαχείριση έως 300 πελάτες, έως 10 χειριστές με χρήση κωδικού και έως 30.000 είδη με barcode.',
        'Η λειτουργικότητα του Ψηφιακού Πελατολογίου Οχημάτων, παρέχεται δωρεάν σε όλες τις εγκαταστάσεις ταμειακών που συνοδεύονται από ECR Connect ή ECR Invoicing.',
        'Αρ. Έγκρισης 15DNA 662/25-01-24 — Η μηχανή με τις περισσότερες πωλήσεις σε Ελλάδα και Ιταλία.',
        'Με την ELIO CR μπορείτε να αποκτήσετε ένα ολοκληρωμένο αυτόνομο ταμειακό σύστημα, αφού έχει καθιερωθεί ως η πιο αξιόπιστη λύση για συνδέσεις με εμπορικές εφαρμογές και ERP\'s.',
        'Διαθέτει απλή & γρήγορη εγκατάσταση και αξιόπιστη διασύνδεση με τις γνωστότερες εφαρμογές λογισμικού της αγοράς.',
        'H ELIO CR διαθέτει λειτουργικά χαρακτηριστικά που συμμορφώνονται πλήρως με τις τεχνικές προδιαγραφές που αναφέρονται αφενός στην Απόφαση του Διοικητή της ΑΑΔΕ Α. 1173 και αφετέρου στην ΠΟΛ 1220 όπου αυτή έχει εφαρμογή.',
      ],
    },
    characteristics: [
      'Η ταμειακή με το μεγαλύτερο μερίδιο αγοράς σε Ελλάδα και Ιταλία',
      'Στιβαρή, εργονομική κατασκευή',
      'Μοναδικό design',
      'Εργονομικό πληκτρολόγιο',
      'Διαχείριση έως 30.000 ειδών με barcode',
      'Δυνατότητα σύνδεσης πολλαπλών περιφερειακών',
      'Μέσω συνδρομής ECR Invoicing',
      '✔ Ηλεκτρονική τιμολόγηση πάνω από την ταμειακή',
      '✔ Αυτόματη ενημέρωση myData',
      'Μέσω συνδρομής ECR Connect',
      '✔ Απομακρυσμένη υποστήριξη',
      '✔ Δωρεάν αναβαθμίσεις λογισμικού ταμειακής',
      '✔ Δωρεάν χρήση mobile app ECR Connect',
      'Σύνδεση με EFT POS ή SOFT POS',
      'Δωρεάν Λειτουργία "Ψηφιακό Πελατολόγιο Οχημάτων"',
      '✔ Μέσω συνδρομής ECR Connect ή ECR Invoicing',
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
      {/* Left — gallery */}
      <ProductGallery images={product.images} />

      {/* Right — info */}
      <div className="flex flex-col justify-center">
        <span className={`text-xs font-bold uppercase tracking-widest ${accentText}`}>
          {product.tagline}
        </span>
        <h3 className="mt-2 text-2xl font-extrabold text-slate-900">{product.name}</h3>

        {/* Long description (rich) or short description + spec table — with read more */}
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

            {/* Gradient fade when collapsed */}
            {!textOpen && (
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-linear-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>

          {/* Read more / less toggle */}
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

        {/* Characteristics expandable button */}
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

            {/* Bullet-list style */}
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

            {/* Section style */}
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
export default function RbsPage() {
  const [displayIdx, setDisplayIdx] = useState(0)
  const [cardStyle, setCardStyle] = useState<CSSProperties>({
    transform: 'translateY(0)',
    opacity: 1,
    transition: 'transform 0.24s ease, opacity 0.24s ease',
  })
  const [textOpen, setTextOpen] = useState(false)
  const isAnimating = useRef(false)
  const idxRef = useRef(0) // always-fresh mirror of displayIdx for the interval
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
    // Slide current item out upward
    setCardStyle({ transform: 'translateY(-110%)', opacity: 0, transition: 'transform 0.24s ease, opacity 0.24s ease' })
    setTimeout(() => {
      idxRef.current = nextIdx
      setDisplayIdx(nextIdx)
      // Snap to below with no transition, then animate in
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
      slideTo((idxRef.current + 1) % rbsProducts.length)
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

  const product = rbsProducts[displayIdx]

  return (
    <div className="pt-20 lg:pt-28 bg-white min-h-screen">

      {/* ── Hero + Text — unified blue section ── */}
      <section className="bg-blue-950 px-4 pt-10 pb-14">
        <div className="max-w-5xl mx-auto">

          {/* Logo */}
          <div className="mb-10">
            <img src={rbsLogo} alt="RBS" className="h-12 sm:h-14 object-contain" />
          </div>

          {/* Expandable text content */}
          <div className="max-w-3xl">
            {/* Always-visible header */}
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-2">
              Φορολογικές Ταμειακές Μηχανές Λιανικής
            </p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-1">
              Ταμειακές Μηχανές Λιανικής RBS
            </h1>
            <p className="text-blue-300 text-sm font-medium mb-6">
              Η καινοτομία στην υπηρεσία της επιχείρησής σας
            </p>

            {/* Collapsible body */}
            <div
              className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
              style={{ maxHeight: textOpen ? '2000px' : '700px' }}
            >
              <div className="space-y-4 text-sm text-blue-100/70 leading-relaxed">
                <p>
                  Ανακαλύψτε σήμερα τα εξελιγμένα Ταμειακά Συστήματα RBS, που ενσωματώνουν τις πιο
                  σύγχρονες τεχνολογίες και πληρούν τις τρέχουσες φορολογικές απαιτήσεις.
                  Κατασκευασμένα εξολοκλήρου στην Ελλάδα, προσφέρουν την αξιοπιστία και την ποιότητα
                  που χρειάζεται και αξίζει η δική σας επιχείρηση.
                </p>
                <p>
                  Με τις ταμειακές μηχανές λιανικής RBS, μπορείτε να εκδίδετε νόμιμα κάθε είδους
                  παραστατικό και να ελέγχετε την επιχείρησή σας τόσο τοπικά, όσο &amp; απομακρυσμένα.
                  Αξιοποιήστε την πολλαπλή λειτουργικότητα, τη λειτουργική σταθερότητα και την
                  αξιοπιστία που προσφέρουν, σε συνδυασμό με τον σύγχρονο εργονομικό σχεδιασμό. Οι
                  ταμειακές λιανικής RBS ταιριάζουν σε κάθε είδους επιχείρησης λιανικής,
                  ενσωματώνοντας νέες αναβαθμισμένες λειτουργικότητες, είτε πρόκειται για ταμειακή
                  εμπορικού καταστήματος, ταμειακή μίνι μάρκετ ή ταμειακή υπαίθριας αγοράς.
                </p>
                <p>
                  Οι εξουσιοδοτημένοι συνεργάτες μας σε όλη την Ελλάδα είναι έτοιμοι να σας βοηθήσουν
                  να επιλέξετε το κατάλληλο ταμειακό σύστημα RBS για τις ανάγκες σας, μέσα από μια
                  μεγάλη γκάμα αισθητικής σχεδίασης και λειτουργικότητας.
                </p>
                <p className="font-semibold text-blue-100">
                  Επιλέξτε την ταμειακή λιανικής RBS για να αναβαθμίσετε την επιχείρησή σας με την
                  τελευταία λέξη της τεχνολογίας!
                </p>

                {/* Divider */}
                <div className="flex items-center gap-3 py-2">
                  <div className="flex-1 h-px bg-blue-800" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">
                    Νέα Λειτουργία
                  </span>
                  <div className="flex-1 h-px bg-blue-800" />
                </div>

                {/* Section 2 — Ψηφιακό Πελατολόγιο */}
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                  Δωρεάν με ECR Connect ή ECR Invoicing
                </p>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Ψηφιακό Πελατολόγιο Οχημάτων
                </h2>
                <p>
                  Όλες οι ταμειακές μηχανές RBS που συνοδεύονται από ECR Connect ή ECR Invoicing,
                  ενσωματώνουν πλήρως την λειτουργικότητα του ψηφιακού πελατολογίου οχημάτων, για
                  τους κλάδους που είναι άμεσα εφαρμοστέο με βάση τις κατευθύνσεις της ΑΑΔΕ.
                </p>
                <p>
                  Με την επιλογή συγκεκριμένου πλήκτρου, ενεργοποιείται η λειτουργία του Ψηφιακού
                  Πελατολογίου και καταγράφεται η είσοδος του οχήματος με βάση τον αριθμό
                  κυκλοφορίας. Η ταμειακή μηχανή RBS εκδίδει εκτύπωση με τετραψήφιο κωδικό
                  καταχώρησης, τον αριθμό κυκλοφορίας και την ώρα εισόδου. Η εκτύπωση τοποθετείται
                  στο όχημα και ταυτόχρονα αποστέλλονται τα στοιχεία καταχώρησης στην ΑΑΔΕ.
                </p>
                <p>
                  Κατά την ολοκλήρωση της υπηρεσίας, εκδίδεται η απόδειξη και στο τέλος της έκδοσης
                  εμφανίζεται η επιλογή «Συσχέτιση» όπου ο χειριστής πληκτρολογεί τον τετραψήφιο
                  κωδικό. Η ταμειακή μηχανή RBS αποστέλλει στο myDATA τα στοιχεία της απόδειξης,
                  συσχετισμένα με το αριθμό κυκλοφορίας του οχήματος.
                </p>
                <p>
                  H διαδικασία χειρισμού είναι απλή, φιλική στο χρήστη και σύμφωνα με τις κατευθύνσεις
                  της ΑΑΔΕ, καλύπτοντας την υποχρέωση τήρησης ψηφιακού πελατολογίου για Συνεργεία,
                  Πλυντήρια Οχημάτων και Εταιρείες Ενοικίασης Οχημάτων.
                </p>
                <p>
                  Η λειτουργικότητα του ψηφιακού πελατολογίου οχημάτων παρέχεται δωρεάν σε όλες τις
                  εγκαταστάσεις ταμειακών που συνοδεύονται από ECR Connect ή ECR Invoicing.
                </p>
              </div>

              {/* Gradient fade when collapsed */}
              {!textOpen && (
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-blue-950 to-transparent pointer-events-none" />
              )}
            </div>

            {/* Read more toggle */}
            <button
              onClick={() => setTextOpen(!textOpen)}
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
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
        <div className="bg-linear-to-r from-blue-700 to-blue-500 px-4 py-3">
          <p className="text-[9px] font-black uppercase tracking-widest text-blue-100">Προϊόντα RBS</p>
        </div>

        {/* Sliding product card */}
        <div className="overflow-hidden">
          <button
            onClick={() => goToProduct(product.id)}
            style={cardStyle}
            className="w-full flex flex-col items-center px-4 pt-4 pb-4 hover:bg-blue-50 group text-left transition-colors"
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
            <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug w-full">
              {product.name}
            </p>
            {/* CTA */}
            <div className="mt-2 w-full flex items-center justify-center gap-1.5 bg-blue-600 group-hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
              Δείτε το <ArrowRight size={12} />
            </div>
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 pb-3">
          {rbsProducts.map((_, i) => (
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
        {rbsProducts.map((p) => (
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
