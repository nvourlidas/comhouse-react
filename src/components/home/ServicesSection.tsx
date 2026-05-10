import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    id: 'mixanografisi',
    tag: 'Μηχανογράφηση',
    title: 'Λύσεις Μηχανογράφησης',
    subtitle: 'SOFTONE · UNISOFT · PBS ONE',
    description:
      'Η εταιρεία μας εγκαθιστά, παραμετροποιεί και υποστηρίζει προγράμματα των μεγαλύτερων Ελληνικών Software houses (Softone, Unisoft). Από την ίδρυσή μας αποτελούμε βασικό συνεργάτη της Unisoft.',
    bullets: [
      'Συμβουλευτικές Υπηρεσίες',
      'Μεταφορά Δεδομένων & Ειδικές διασυνδέσεις',
      'Εκπαίδευση στελεχών',
      'Υποστήριξη On-site & απομακρυσμένα',
    ],
    href: '/mixanografisi',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
      </svg>
    ),
  },
  {
    id: 'computers',
    tag: 'Υπολογιστές',
    title: 'Υποστήριξη Service Υπολογιστών',
    subtitle: 'LAPTOP · DESKTOP · SERVER',
    description:
      'Η ComputerHouse διαθέτει έμπειρο τεχνικό τμήμα για την επισκευή ηλεκτρονικών υπολογιστών. Αξιόπιστη και αποτελεσματική αντιμετώπιση τεχνικών προβλημάτων.',
    bullets: [
      'Ηλεκτρονικών Υπολογιστών (Laptop & Desktop)',
      'Εγκατάσταση και παραμετροποίηση server',
      'Δικτύων',
      'Περιφερειακών συσκευών Η/Υ',
    ],
    extra: 'Η τεχνική υποστήριξη παρέχεται είτε στο service της εταιρείας μας, είτε στο χώρο σας.',
    href: '/computers',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: 'tameiakes',
    tag: 'Ταμειακές',
    title: 'Επισκευή Ταμειακών Μηχανών & Φορολογικών Μηχανισμών',
    subtitle: 'ΕΠΙΣΚΕΥΗ · ΚΛΕΙΣΙΜΟ · ΠΑΥΣΗ',
    description:
      'Η ComputerHouse διαθέτει εξουσιοδοτημένο έμπειρο τεχνικό τμήμα για την εγκατάσταση, επισκευή, και κλείσιμο–παύση ταμειακών μηχανών και φορολογικών μηχανισμών.',
    extra:
      'Αναλαμβάνουμε το κλείσιμο, παύση ταμειακών μηχανών, φορολογικών μηχανισμών και την ανάγνωση της φορολογικής μνήμης. Παρέχουμε τις υπηρεσίες μας τόσο στην περιοχή των Σερρών, αλλά και Πανελλαδικά κατόπιν συνεννόησης.',
    href: '/tameiakes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M7 8h10M7 12h6M7 16h4" />
        <path d="M17 14l1.5 1.5L21 13" />
      </svg>
    ),
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Τι προσφέρουμε
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Υπηρεσίες
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg">
            Ολοκληρωμένες λύσεις τεχνολογίας για κάθε επιχειρηματική ανάγκη.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full bg-blue-600 rounded-t-2xl" />

              {/* Icon + heading */}
              <div className="flex items-start gap-4 px-6 pt-6 pb-5 border-b border-slate-200">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  {service.icon}
                </div>
                <div className="min-w-0">
                  <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
                    {service.tag}
                  </span>
                  <h3 className="text-slate-900 font-extrabold text-base leading-snug mt-0.5">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mt-1">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 px-6 py-5">
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>

                {service.bullets && (
                  <ul className="space-y-2 mb-4">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-slate-600 text-sm">
                        <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {service.extra && (
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">{service.extra}</p>
                )}

                <div className="mt-auto pt-3">
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
                  >
                    Περισσότερα <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
