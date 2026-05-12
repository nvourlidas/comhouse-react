import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import prosvasisLogo from '../assets/prosvasis-go-logo.webp'

const features = [
  {
    title: 'Ταμείο POS',
    desc: 'Γρήγορη λειτουργία ταμείου, πολλαπλές μεθόδους πληρωμής, εκπτώσεις και διαχείριση βαρδιών.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M7 8h10M7 12h6M7 16h4" />
        <path d="M17 14l1.5 1.5L21 13" />
      </svg>
    ),
  },
  {
    title: 'Αποθήκη & Αποθέματα',
    desc: 'Παρακολούθηση αποθεμάτων σε πραγματικό χρόνο, barcode scanning, παρτίδες και ημερομηνίες λήξης.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
  },
  {
    title: 'Πελατολόγιο & Πιστότητα',
    desc: 'Διαχείριση πελατών, πρόγραμμα πιστότητας, κουπόνια, δωροεπιταγές και ιστορικό αγορών.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Αλυσίδες Καταστημάτων',
    desc: 'Κεντρική διαχείριση πολλαπλών καταστημάτων, κοινό πελατολόγιο και αποθεματολόγιο.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    title: 'Αναφορές & Στατιστικά',
    desc: 'Αναλυτικές αναφορές πωλήσεων, κορυφαία είδη, απόδοση υπαλλήλων και ωριαία ανάλυση κίνησης.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: 'myDATA & Φορολογική Συμμόρφωση',
    desc: 'Πλήρης ενσωμάτωση με myDATA, αυτόματη διαβίβαση αποδείξεων και τιμολογίων στην ΑΑΔΕ.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M16 12l-4-4-4 4M12 3v13" />
      </svg>
    ),
  },
]

const services = [
  'Εγκατάσταση & παραμετροποίηση λογισμικού',
  'Εισαγωγή αρχικού αποθεματολογίου & πελατολογίου',
  'Εκπαίδευση χρηστών & στελεχών',
  'Σύνδεση με hardware (scanners, εκτυπωτές, ζυγοί)',
  'Τεχνική υποστήριξη on-site & απομακρυσμένα',
  'Ενσωμάτωση myDATA & φορολογική συμμόρφωση',
]

export default function ProsvasisPage() {
  return (
    <div className="pt-20 bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-[#0d2535]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Left — text */}
            <div className="py-12 lg:py-16">
              <div className="mb-8">
                <img src={prosvasisLogo} alt="Prosvasis Go" className="h-10 sm:h-14 object-contain brightness-0 invert" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#5bb8d4] mb-2">
                Λύσεις Μηχανογράφησης
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                Prosvasis Go<br />Λογισμικό Λιανικής
              </h1>
              <p className="text-[#5bb8d4]/70 text-sm leading-relaxed mb-7 max-w-md">
                Η ComHouse είναι εξουσιοδοτημένος συνεργάτης για το Prosvasis Go — το ολοκληρωμένο
                λογισμικό λιανικής της Epsilon Net για καταστήματα, αλυσίδες και εστίαση.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['✓ Εξουσιοδοτημένος Συνεργάτης', '✓ myDATA Ready', '✓ Υποστήριξη Αλυσίδων'].map((b) => (
                  <span key={b} className="bg-white/10 border border-white/20 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#0d2535] font-bold px-5 py-2.5 rounded-xl shadow-lg hover:bg-[#5bb8d4]/10 transition-all text-sm"
              >
                Ζητήστε ενημέρωση <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right — module preview panel */}
            <div className="hidden lg:flex justify-end items-center py-8">
              <div className="w-72 bg-white/10 border border-white/15 rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#5bb8d4] mb-5">
                  Βασικά Modules
                </p>
                <div className="space-y-3">
                  {features.map((f) => (
                    <div key={f.title} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#5bb8d4]/20 text-[#5bb8d4] flex items-center justify-center shrink-0">
                        {f.icon}
                      </div>
                      <span className="text-white/70 text-sm">{f.title}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/10 space-y-1.5">
                  {['✓ myDATA Ready', '✓ Εξουσ. Συνεργάτης', '✓ ΑΑΔΕ Συμμόρφωση'].map((b) => (
                    <p key={b} className="text-[#5bb8d4]/60 text-xs">{b}</p>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-[#5bb8d4] font-bold text-xs uppercase tracking-[0.2em]">Δυνατότητες</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Τι περιλαμβάνει</h2>
            <p className="mt-2 text-slate-500 text-sm max-w-lg leading-relaxed">
              Το Prosvasis Go καλύπτει κάθε ανάγκη της λιανικής σας, από το ταμείο ως τη διαχείριση αποθήκης.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group flex items-start gap-5 bg-slate-50 hover:bg-[#5bb8d4]/10 rounded-2xl px-6 py-5 transition-all duration-300 border border-transparent hover:border-[#5bb8d4]/30"
              >
                <div className="shrink-0 flex flex-col items-center gap-1">
                  <span className="text-xs font-black text-[#5bb8d4]/50 group-hover:text-[#5bb8d4] transition-colors leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-white group-hover:bg-[#5bb8d4] border border-slate-200 group-hover:border-[#5bb8d4] text-[#5bb8d4] group-hover:text-white flex items-center justify-center shadow-sm transition-all duration-300">
                    {f.icon}
                  </div>
                </div>
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
              <span className="text-[#5bb8d4] font-bold text-xs uppercase tracking-[0.2em]">Τι προσφέρουμε</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Υπηρεσίες<br />ComHouse
              </h2>
              <p className="mt-3 text-slate-500 text-sm leading-relaxed max-w-xs">
                Αναλαμβάνουμε την πλήρη εγκατάσταση και υποστήριξη του Prosvasis Go για την επιχείρησή σας.
              </p>
            </div>
            <div className="divide-y divide-slate-200">
              {services.map((s, i) => (
                <div key={s} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="text-[11px] font-black text-[#5bb8d4]/60 w-6 shrink-0 mt-0.5">
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
      <section className="py-14 bg-[#0d2535]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Ενδιαφέρεστε για το Prosvasis Go;
              </h2>
              <p className="text-[#5bb8d4]/50 text-sm mt-1">
                Δωρεάν παρουσίαση & προσφορά εγκατάστασης.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#0d2535] font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-[#5bb8d4]/10 transition-all text-sm"
            >
              Επικοινωνία <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
