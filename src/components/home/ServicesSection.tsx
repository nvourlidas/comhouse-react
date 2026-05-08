import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
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
    accent: 'from-cyan-500 to-blue-600',
    lightBg: 'from-cyan-50 to-blue-50',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M7 8h10M7 12h6M7 16h4" />
        <path d="M17 14l1.5 1.5L21 13" />
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
    accent: 'from-violet-500 to-blue-600',
    lightBg: 'from-violet-50 to-blue-50',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
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
    accent: 'from-teal-500 to-cyan-600',
    lightBg: 'from-teal-50 to-cyan-50',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
      </svg>
    ),
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">
            Τι προσφέρουμε
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Υπηρεσίες
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg">
            Ολοκληρωμένες λύσεις τεχνολογίας για κάθε επιχειρηματική ανάγκη.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`rounded-3xl overflow-hidden bg-white shadow-sm border border-slate-100 hover:shadow-lg transition-shadow`}
            >
              <div className={`grid lg:grid-cols-2 ${idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.accent} text-white flex items-center justify-center shadow-md`}>
                      {service.icon}
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${service.accent} bg-clip-text text-transparent`}>
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{service.title}</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{service.subtitle}</p>
                  <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                  {service.bullets && (
                    <ul className="space-y-2 mb-4">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-slate-600 text-sm">
                          <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.extra && (
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.extra}</p>
                  )}
                  <Link
                    to={service.href}
                    className={`inline-flex items-center gap-2 self-start bg-gradient-to-r ${service.accent} text-white font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all text-sm`}
                  >
                    Περισσότερα <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Visual panel */}
                <div className={`bg-gradient-to-br ${service.lightBg} p-8 lg:p-12 flex items-center justify-center min-h-48`}>
                  <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${service.accent} opacity-20 absolute`} />
                  <div className={`relative w-40 h-40 rounded-3xl bg-gradient-to-br ${service.accent} flex items-center justify-center shadow-2xl`}>
                    <div className="text-white scale-[2.5] opacity-80">{service.icon}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
