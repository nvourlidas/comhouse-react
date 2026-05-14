import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import entersoftLogo from '../assets/ENTERSOFTONE_logo.png'

const features = [
  {
    title: 'Λογιστήριο & Φορολογικά',
    desc: 'Πλήρης λογιστική παρακολούθηση, φορολογικές καταστάσεις, ηλεκτρονικά βιβλία και δηλώσεις ΑΑΔΕ.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
  },
  {
    title: 'Εμπορική Διαχείριση',
    desc: 'Αγορές, πωλήσεις, τιμολόγηση, εκπτώσεις και διαχείριση παραστατικών με πλήρη myDATA ενσωμάτωση.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: 'Αποθήκη & Logistics',
    desc: 'Διαχείριση αποθεμάτων, παρακολούθηση κινήσεων, serial numbers, παρτίδες και πολλαπλές αποθήκες.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
  },
  {
    title: 'Μισθοδοσία & HR',
    desc: 'Μισθοδοτικές καταστάσεις, αναλυτικές εργασίας ΕΦΚΑ, Εργάνη, ΑΠΔ και διαχείριση αδειών.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'CRM & Πελάτες',
    desc: 'Διαχείριση πελατολογίου, ευκαιρίες πωλήσεων, ιστορικό επικοινωνίας και καμπάνιες marketing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: 'myDATA & e-Invoicing',
    desc: 'Αυτόματη διαβίβαση παραστατικών στην ΑΑΔΕ, σύνδεση με παρόχους ΥΠΑΗΕΣ και ηλεκτρονική τιμολόγηση.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M16 12l-4-4-4 4M12 3v13" />
      </svg>
    ),
  },
]

const services = [
  'Εγκατάσταση & παραμετροποίηση λογισμικού',
  'Μεταφορά δεδομένων από παλαιότερα συστήματα',
  'Εκπαίδευση χρηστών & στελεχών',
  'Υποστήριξη on-site & απομακρυσμένα',
  'Διασυνδέσεις με τρίτα συστήματα (ταμειακές, e-shop)',
  'Ενσωμάτωση myDATA & παρόχου ΥΠΑΗΕΣ',
]

export default function SoftonePage() {
  return (
    <div className="pt-20 lg:pt-28 bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative bg-blue-950 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Left — text */}
            <div className="py-12 lg:py-16">
              <div className="mb-8">
                <img src={entersoftLogo} alt="EntersoftOne" className="h-10 sm:h-14 object-contain brightness-0 invert" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-2">
                Λύσεις Μηχανογράφησης
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                EntersoftOne<br />ERP & CRM
              </h1>
              <p className="text-blue-200/70 text-sm leading-relaxed mb-7 max-w-md">
                Η Computer House είναι εξουσιοδοτημένος συνεργάτης για εγκατάσταση, παραμετροποίηση
                και υποστήριξη — ένα από τα πιο ολοκληρωμένα ERP/CRM για ελληνικές επιχειρήσεις.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['✓ Εξουσιοδοτημένος Συνεργάτης', '✓ myDATA Ready', '✓ On-site Υποστήριξη'].map((b) => (
                  <span key={b} className="bg-white/10 border border-white/20 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-5 py-2.5 rounded-xl shadow-lg hover:bg-blue-50 transition-all text-sm"
              >
                Ζητήστε ενημέρωση <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right — module preview panel */}
            <div className="hidden lg:flex justify-end items-center py-8">
              <div className="w-72 bg-white/10 border border-white/15 rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-5">
                  Βασικά Modules
                </p>
                <div className="space-y-3">
                  {features.map((f) => (
                    <div key={f.title} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-900/70 text-blue-300 flex items-center justify-center shrink-0">
                        {f.icon}
                      </div>
                      <span className="text-white/70 text-sm">{f.title}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/10 space-y-1.5">
                  {['✓ myDATA Ready', '✓ Εξουσ. Συνεργάτης', '✓ ΑΑΔΕ Συμμόρφωση'].map((b) => (
                    <p key={b} className="text-blue-300/60 text-xs">{b}</p>
                  ))}
                </div>
              </div>
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

      {/* ── Features ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em]">Δυνατότητες</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Τι περιλαμβάνει</h2>
            <p className="mt-2 text-slate-500 text-sm max-w-lg leading-relaxed">
              Το EntersoftOne καλύπτει κάθε ανάγκη της επιχείρησής σας από ένα ενιαίο περιβάλλον.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group flex items-start gap-5 bg-slate-50 hover:bg-blue-50 rounded-2xl px-6 py-5 transition-all duration-300 border border-transparent hover:border-blue-100"
              >
                {/* Step number + icon stacked */}
                <div className="shrink-0 flex flex-col items-center gap-1">
                  <span className="text-xs font-black text-blue-200 group-hover:text-blue-400 transition-colors leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-white group-hover:bg-blue-600 border border-slate-200 group-hover:border-blue-600 text-blue-500 group-hover:text-white flex items-center justify-center shadow-sm transition-all duration-300">
                    {f.icon}
                  </div>
                </div>
                {/* Text */}
                <div className="pt-1">
                  <h3 className="font-extrabold text-slate-900 mb-1">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em]">Τι προσφέρουμε</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Υπηρεσίες<br />Computer House
              </h2>
              <p className="mt-3 text-slate-500 text-sm leading-relaxed max-w-xs">
                Αναλαμβάνουμε κάθε βήμα από την εγκατάσταση έως την καθημερινή υποστήριξη.
              </p>
            </div>
            <div className="divide-y divide-slate-200">
              {services.map((s, i) => (
                <div key={s} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="text-[11px] font-black text-blue-400/60 w-6 shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-slate-700 text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-blue-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Ενδιαφέρεστε για το EntersoftOne;
              </h2>
              <p className="text-blue-200/50 text-sm mt-1">
                Δωρεάν παρουσίαση & προσφορά εγκατάστασης.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-50 transition-all text-sm"
            >
              Επικοινωνία <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
