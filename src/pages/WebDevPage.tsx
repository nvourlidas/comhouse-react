import { useState } from 'react'
import { Link } from 'react-router-dom'
import cloudtecLogo from '../assets/cloudtec-trans.png'
import { ArrowRight, CheckCircle2, ShoppingCart, Globe, LayoutDashboard, Smartphone, Zap, Search, ShieldCheck, HeartHandshake } from 'lucide-react'

const services = [
  {
    icon: ShoppingCart,
    title: 'E-Shop',
    subtitle: 'Ηλεκτρονικό Κατάστημα',
    description: 'Πλήρης ανάπτυξη ηλεκτρονικού καταστήματος με διαχείριση προϊόντων, online πληρωμές, αυτόματες ειδοποιήσεις και σύνδεση με λογιστικό λογισμικό.',
    features: ['Διαχείριση προϊόντων & αποθέματος', 'Online πληρωμές (κάρτα, PayPal, αντικαταβολή)', 'Σύνδεση με myDATA & ERP', 'Mobile-first σχεδιασμός'],
    color: 'emerald',
  },
  {
    icon: Globe,
    title: 'Website',
    subtitle: 'Εταιρικό Website',
    description: 'Σύγχρονα, γρήγορα και SEO-friendly εταιρικά websites που αντιπροσωπεύουν αξιόπιστα την επιχείρησή σας και μετατρέπουν επισκέπτες σε πελάτες.',
    features: ['Custom σχεδιασμός & ανάπτυξη', 'SEO βελτιστοποίηση', 'Γρήγορη φόρτωση & Core Web Vitals', 'Εύκολη διαχείριση περιεχομένου'],
    color: 'blue',
  },
  {
    icon: LayoutDashboard,
    title: 'Web App',
    subtitle: 'Διαδικτυακή Εφαρμογή',
    description: 'Ανάπτυξη εξειδικευμένων web εφαρμογών για αυτοματοποίηση εσωτερικών διαδικασιών, διαχείριση πελατών, reporting και κάθε προσαρμοσμένη επιχειρηματική ανάγκη.',
    features: ['Dashboards & reporting', 'Σύνδεση με APIs & εξωτερικά συστήματα', 'Role-based πρόσβαση χρηστών', 'Cloud ή on-premise ανάπτυξη'],
    color: 'violet',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    subtitle: 'Εφαρμογή για iOS & Android',
    description: 'Native και cross-platform mobile εφαρμογές για iOS και Android. Από B2C εφαρμογές καταστήματος έως B2B εργαλεία πωλητών και τεχνικών.',
    features: ['iOS & Android (React Native)', 'Push notifications', 'Offline λειτουργία', 'Σύνδεση με backend & APIs'],
    color: 'cyan',
  },
]

const colorMap: Record<string, { gradient: string; check: string; tag: string; glow: string; ring: string }> = {
  emerald: { gradient: 'from-emerald-600 to-teal-500',   check: 'text-emerald-500', tag: 'text-emerald-600', glow: 'shadow-emerald-100', ring: 'ring-emerald-200' },
  blue:    { gradient: 'from-blue-600 to-blue-400',      check: 'text-blue-500',    tag: 'text-blue-600',    glow: 'shadow-blue-100',    ring: 'ring-blue-200'    },
  violet:  { gradient: 'from-violet-600 to-purple-400',  check: 'text-violet-500',  tag: 'text-violet-600',  glow: 'shadow-violet-100',  ring: 'ring-violet-200'  },
  cyan:    { gradient: 'from-cyan-600 to-sky-400',       check: 'text-cyan-500',    tag: 'text-cyan-600',    glow: 'shadow-cyan-100',    ring: 'ring-cyan-200'    },
}

const process = [
  { step: '01', title: 'Ανάλυση Αναγκών', body: 'Συζητάμε μαζί σας τους στόχους, το κοινό-στόχο και τις λειτουργικές απαιτήσεις του έργου.' },
  { step: '02', title: 'Σχεδιασμός UI/UX', body: 'Δημιουργούμε wireframes και mockups για να εγκρίνετε τη δομή και την αισθητική πριν ξεκινήσει η ανάπτυξη.' },
  { step: '03', title: 'Ανάπτυξη', body: 'Κωδικοποίηση με σύγχρονες τεχνολογίες, agile προσέγγιση και τακτικά checkpoints για να είστε πάντα ενήμεροι.' },
  { step: '04', title: 'Testing & Launch', body: 'Πλήρης έλεγχος σε συσκευές και browsers, βελτιστοποίηση απόδοσης και σταδιακό deployment.' },
  { step: '05', title: 'Υποστήριξη', body: 'Μετά την παράδοση παρέχουμε τεχνική υποστήριξη, αναβαθμίσεις και hosting management.' },
]

const whyUs = [
  { icon: Zap,          title: 'Γρήγορα & Βελτιστοποιημένα', body: 'Κάθε έργο αναπτύσσεται με έμφαση στην ταχύτητα φόρτωσης και τα Core Web Vitals — κρίσιμα για SEO και μετατροπές.' },
  { icon: Search,       title: 'SEO-first Προσέγγιση',        body: 'Η βελτιστοποίηση για μηχανές αναζήτησης ενσωματώνεται από την αρχή, όχι σαν «add-on» στο τέλος.' },
  { icon: ShieldCheck,  title: 'Ασφάλεια & Αξιοπιστία',      body: 'SSL, GDPR compliance, τακτικά backups και προστασία από κακόβουλες επιθέσεις σε κάθε έργο.' },
  { icon: HeartHandshake, title: 'Μακροχρόνια Συνεργασία',   body: 'Δεν παραδίδουμε και εξαφανιζόμαστε. Είμαστε δίπλα σας για αναβαθμίσεις, νέα features και τεχνική υποστήριξη.' },
]

export default function WebDevPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <div className="pt-20 lg:pt-28 bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-linear-to-br from-emerald-950 via-emerald-900 to-teal-800 px-4 pt-14 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-emerald-400 mb-3">
            Ψηφιακή Ανάπτυξη
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            E-Shops, Websites,<br />
            <span className="text-teal-300">Web & Mobile Apps</span>
          </h1>
          <p className="text-emerald-100/80 text-lg max-w-2xl leading-relaxed mb-8">
            Σχεδιάζουμε και αναπτύσσουμε σύγχρονες ψηφιακές λύσεις που βοηθούν την επιχείρησή σας να αναπτυχθεί — από το ηλεκτρονικό κατάστημα έως την πλήρη mobile εφαρμογή.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-teal-400 text-emerald-950 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-teal-300 transition-all"
            >
              Ζητήστε προσφορά <ArrowRight size={16} />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-all"
            >
              Υπηρεσίες
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Τι Αναπτύσσουμε</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Υπηρεσίες Ανάπτυξης</h2>
            <p className="mt-2 text-slate-500 text-sm max-w-lg">
              Από το απλό εταιρικό website έως την πολύπλοκη web εφαρμογή — καλύπτουμε κάθε ψηφιακή ανάγκη.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, subtitle, description, features, color }) => {
              const c = colorMap[color]
              const isHovered = hoveredService === title
              const isDimmed = hoveredService !== null && !isHovered
              return (
                <div
                  key={title}
                  className={`rounded-3xl overflow-hidden shadow-lg ${c.glow} transition-all duration-300 ${
                    isHovered ? `shadow-2xl -translate-y-2 scale-[1.02] ring-4 ${c.ring}` : ''
                  } ${isDimmed ? 'opacity-50 scale-[0.98]' : ''}`}
                  onMouseEnter={() => setHoveredService(title)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Gradient header */}
                  <div className={`relative bg-linear-to-br ${c.gradient} px-7 py-7 overflow-hidden`}>
                    {/* Watermark icon */}
                    <Icon size={110} className="absolute -right-5 -bottom-5 text-white/10 pointer-events-none" />
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20">
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">{title}</h3>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-0.5">{subtitle}</p>
                  </div>
                  {/* Card body */}
                  <div className="bg-white px-7 py-6">
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>
                    <ul className="space-y-2.5">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                          <CheckCircle2 size={15} className={`${c.check} shrink-0`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-linear-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">Πώς Δουλεύουμε</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">Η Διαδικασία μας</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map(({ step, title, body }, i) => (
              <div key={step} className="relative flex flex-col rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-emerald-400/40 transition-all duration-300 group">
                {/* Connector arrow */}
                {i < process.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center">
                    <ArrowRight size={14} className="text-emerald-400/50" />
                  </div>
                )}
                {/* Step number */}
                <span className="text-5xl font-black text-white/10 group-hover:text-emerald-400/30 leading-none mb-4 transition-colors duration-300">{step}</span>
                {/* Accent line */}
                <div className="w-8 h-0.5 bg-emerald-400 rounded-full mb-3 opacity-70" />
                <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Γιατί Εμάς</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Η διαφορά μας</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {whyUs.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative flex gap-5 items-start bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-emerald-200 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                {/* Background watermark */}
                <Icon size={120} className="absolute -right-6 -bottom-6 text-slate-50 group-hover:text-emerald-50 pointer-events-none transition-colors duration-300" />
                {/* Icon */}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-md shadow-emerald-100">
                  <Icon size={22} className="text-white" />
                </div>
                {/* Text */}
                <div>
                  <h3 className="font-extrabold text-slate-900 mb-1.5">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="relative flex flex-col md:flex-row items-center gap-8 bg-slate-900 rounded-3xl px-10 py-10 overflow-hidden shadow-xl">
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-10 right-32 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
            {/* Logo */}
            <div className="shrink-0 flex items-center justify-center">
              <img src={cloudtecLogo} alt="CloudTec" className="w-36 object-contain brightness-0 invert" />
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px self-stretch bg-white/10" />
            <div className="h-px w-full md:hidden bg-white/10" />
            {/* Text */}
            <div className="flex-1">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">Συνεργασία</span>
              <h3 className="mt-1 text-xl font-extrabold text-white">
                Αναπτύσσουμε σε συνεργασία με την <span style={{ color: '#f5c325' }}>CloudTec</span>
              </h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed max-w-lg">
                Για την ανάπτυξη e-shops, websites, web και mobile εφαρμογών συνεργαζόμαστε με την CloudTec — εξειδικευμένη εταιρεία ψηφιακής ανάπτυξης — εξασφαλίζοντας υψηλής ποιότητας αποτέλεσμα και αξιόπιστη υποστήριξη.
              </p>
              <a
                href="https://cloudtec.gr/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
              >
                <ArrowRight size={14} style={{ color: '#f5c325' }} />
                Επισκεφθείτε το cloudtec.gr
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-linear-to-br from-emerald-950 to-teal-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Έχετε ιδέα για ένα project;
          </h2>
          <p className="text-emerald-300/80 text-sm mb-7 max-w-lg mx-auto">
            Επικοινωνήστε μαζί μας για μια δωρεάν αρχική συζήτηση. Θα αναλύσουμε τις ανάγκες σας και θα σας στείλουμε αναλυτική προσφορά.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-300 text-emerald-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all"
          >
            Ζητήστε προσφορά <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  )
}
