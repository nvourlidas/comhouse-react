import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { FadeUp } from '../ScrollReveal'

const serviceIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M7 8h10M7 12h6M7 16h4" />
      <path d="M17 14l1.5 1.5L21 13" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M16 12l-4-4-4 4M12 3v13" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9Z" />
      <path d="M8 10l-2 2 2 2M16 10l2 2-2 2M13 9l-2 6" />
    </svg>
  ),
]

const ac: Record<string, {
  bar: string; iconColor: string; iconBg: string; tag: string; check: string
  activeBg: string; activeBorder: string; btn: string
  cardGradient: string; cardBorder: string; cardShadow: string
}> = {
  blue:    { bar: 'bg-blue-500',    iconColor: 'text-blue-600',    iconBg: 'bg-blue-100',    tag: 'text-blue-600',    check: 'text-blue-500',    activeBg: 'bg-blue-50',    activeBorder: 'border-blue-300',    btn: 'text-blue-600 hover:text-blue-500',    cardGradient: 'bg-gradient-to-b from-white to-blue-50',    cardBorder: 'border-blue-200',    cardShadow: 'shadow-blue-100' },
  violet:  { bar: 'bg-violet-500',  iconColor: 'text-violet-600',  iconBg: 'bg-violet-100',  tag: 'text-violet-600',  check: 'text-violet-500',  activeBg: 'bg-violet-50',  activeBorder: 'border-violet-300',  btn: 'text-violet-600 hover:text-violet-500',  cardGradient: 'bg-gradient-to-b from-white to-violet-50',  cardBorder: 'border-violet-200',  cardShadow: 'shadow-violet-100' },
  amber:   { bar: 'bg-amber-500',   iconColor: 'text-amber-600',   iconBg: 'bg-amber-100',   tag: 'text-amber-600',   check: 'text-amber-500',   activeBg: 'bg-amber-50',   activeBorder: 'border-amber-300',   btn: 'text-amber-600 hover:text-amber-500',   cardGradient: 'bg-gradient-to-b from-white to-amber-50',   cardBorder: 'border-amber-200',   cardShadow: 'shadow-amber-100' },
  indigo:  { bar: 'bg-indigo-500',  iconColor: 'text-indigo-600',  iconBg: 'bg-indigo-100',  tag: 'text-indigo-600',  check: 'text-indigo-500',  activeBg: 'bg-indigo-50',  activeBorder: 'border-indigo-300',  btn: 'text-indigo-600 hover:text-indigo-500',  cardGradient: 'bg-gradient-to-b from-white to-indigo-50',  cardBorder: 'border-indigo-200',  cardShadow: 'shadow-indigo-100' },
  emerald: { bar: 'bg-emerald-500', iconColor: 'text-emerald-600', iconBg: 'bg-emerald-100', tag: 'text-emerald-600', check: 'text-emerald-500', activeBg: 'bg-emerald-50', activeBorder: 'border-emerald-300', btn: 'text-emerald-600 hover:text-emerald-500', cardGradient: 'bg-gradient-to-b from-white to-emerald-50', cardBorder: 'border-emerald-200', cardShadow: 'shadow-emerald-100' },
}

const services = [
  {
    id: 's1',
    tag: 'Μηχανογράφηση',
    title: 'Λύσεις Μηχανογράφησης',
    subtitle: 'SOFTONE · UNISOFT · PBS ONE',
    bullets: [
      'Συμβουλευτικές Υπηρεσίες',
      'Μεταφορά Δεδομένων & Ειδικές διασυνδέσεις',
      'Εκπαίδευση στελεχών',
      'Υποστήριξη On-site & απομακρυσμένα',
    ],
    href: '/mixanografisi',
    accent: 'blue',
    icon: serviceIcons[0],
  },
  {
    id: 's2',
    tag: 'Υπολογιστές',
    title: 'Service Υπολογιστών & Δικτύων',
    subtitle: 'LAPTOP · DESKTOP · SERVER',
    bullets: [
      'Επισκευή Laptop & Desktop',
      'Εγκατάσταση & παραμετροποίηση server',
      'Δίκτυα & Υποδομές',
      'Περιφερειακές συσκευές Η/Υ',
    ],
    href: '/computers',
    accent: 'violet',
    icon: serviceIcons[1],
  },
  {
    id: 's3',
    tag: 'Ταμειακές',
    title: 'Ταμειακές & Φορολογικοί Μηχανισμοί',
    subtitle: 'ΕΓΚΑΤΑΣΤΑΣΗ · ΕΠΙΣΚΕΥΗ · ΠΑΥΣΗ',
    bullets: [
      'Εγκατάσταση & Προγραμματισμός',
      'Επισκευή & Συντήρηση',
      'Κλείσιμο & Παύση λειτουργίας',
      'Ανάγνωση Φορολογικής Μνήμης',
    ],
    href: '/tameiakes',
    accent: 'amber',
    icon: serviceIcons[2],
  },
  {
    id: 's4',
    tag: 'myDATA',
    title: 'Ενσωμάτωση & Υποστήριξη myDATA',
    subtitle: 'ΑΑΔΕ · ΥΠΑΗΕΣ · E-INVOICING',
    bullets: [
      'Σύνδεση λογισμικού με myDATA',
      'Διαβίβαση παραστατικών ΑΑΔΕ',
      'Ενσωμάτωση παρόχου ΥΠΑΗΕΣ',
      'Υποστήριξη & παρακολούθηση',
    ],
    href: '/mydata',
    accent: 'indigo',
    icon: serviceIcons[3],
  },
  {
    id: 's5',
    tag: 'Web & Mobile',
    title: 'Web Apps, Mobile Apps & Websites',
    subtitle: 'WEB · MOBILE · E-COMMERCE',
    bullets: [
      'Εταιρικά Websites & Landing Pages',
      'Web Applications & Dashboards',
      'Mobile Apps (iOS & Android)',
      'E-Commerce & Online Stores',
    ],
    href: '/webdev',
    accent: 'emerald',
    icon: serviceIcons[4],
  },
]

export default function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="mb-12">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em]">
            Τι προσφέρουμε
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Υπηρεσίες
          </h2>
          <p className="mt-2 text-slate-500 max-w-lg text-sm leading-relaxed">
            Ολοκληρωμένες λύσεις τεχνολογίας για κάθε επιχειρηματική ανάγκη.
          </p>
        </FadeUp>

        {/* ── Mobile: stacked cards ── */}
        <div className="flex flex-col gap-3 lg:hidden">
          {services.map((service, i) => {
            const a = ac[service.accent]
            return (
              <FadeUp key={service.id} delay={i * 0.08}>
                <Link
                  to={service.href}
                  className={`flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 hover:${a.activeBg} hover:${a.activeBorder} transition-all`}
                >
                  <div className={`shrink-0 ${a.iconColor}`}>{service.icon}</div>
                  <div className="min-w-0">
                    <span className={`text-xs font-bold uppercase tracking-widest ${a.tag}`}>{service.tag}</span>
                    <p className="text-slate-800 font-semibold text-sm leading-snug">{service.title}</p>
                  </div>
                  <ArrowRight size={14} className={`shrink-0 ml-auto ${a.iconColor}`} />
                </Link>
              </FadeUp>
            )
          })}
        </div>

        {/* ── Desktop: horizontal accordion ── */}
        <FadeUp delay={0.1} className="hidden lg:flex gap-3 h-80">
          {services.map((service, i) => {
            const a = ac[service.accent]
            const isActive = hovered === i
            const isInactive = hovered !== null && hovered !== i

            return (
              <div
                key={service.id}
                className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ease-in-out cursor-pointer shadow-md
                  ${isActive
                    ? `flex-5 ${a.activeBg} ${a.activeBorder} shadow-none`
                    : isInactive
                    ? `flex-[0.9] bg-white border-slate-200 opacity-60 shadow-none`
                    : `flex-1 ${a.cardGradient} ${a.cardBorder} ${a.cardShadow}`
                  }`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Default state: large frameless icon + divider + text */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 transition-opacity duration-200
                  ${!isActive && !isInactive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <div className={`${a.iconColor} scale-[2.2] transform`}>{service.icon}</div>
                  <div className={`h-px w-8 ${a.bar} rounded-full opacity-60`} />
                  <div className="text-center">
                    <p className="text-slate-800 font-bold text-sm leading-snug">{service.title}</p>
                  </div>
                </div>

                {/* Compressed state: vertical name (another card is open) */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-200
                  ${isInactive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <div className={`w-9 h-9 rounded-lg ${a.iconBg} flex items-center justify-center shrink-0`}>
                    <div className={`${a.iconColor}`}>{service.icon}</div>
                  </div>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider ${a.tag} select-none`}
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Expanded content */}
                <div className={`h-full flex flex-col px-7 pt-7 pb-6 transition-opacity duration-200 min-w-60 ${isActive ? 'opacity-100 delay-150' : 'opacity-0 pointer-events-none'}`}>
                  {/* Icon + tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`${a.iconColor}`}>{service.icon}</div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${a.tag}`}>{service.tag}</span>
                  </div>

                  {/* Title + subtitle */}
                  <h3 className="text-slate-900 font-bold text-base leading-snug mb-0.5">{service.title}</h3>
                  <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-widest mb-4">{service.subtitle}</p>

                  {/* Bullets */}
                  <ul className="space-y-1.5 flex-1">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-slate-600 text-sm">
                        <CheckCircle2 size={12} className={`${a.check} shrink-0 mt-0.5`} />
                        {b}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            )
          })}
        </FadeUp>

      </div>
    </section>
  )
}
