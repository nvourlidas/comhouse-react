import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Laptop, Monitor, Leaf, ShieldCheck, BadgePercent, Wrench } from 'lucide-react'

const benefits = [
  {
    icon: BadgePercent,
    title: 'Χαμηλότερο Κόστος',
    body: 'Αποκτήστε αξιόπιστο εξοπλισμό με σημαντικά μικρότερο κόστος σε σχέση με νέες συσκευές ισοδύναμων προδιαγραφών.',
  },
  {
    icon: ShieldCheck,
    title: 'Ελεγμένα & Εγγυημένα',
    body: 'Κάθε συσκευή περνά από πλήρη τεχνικό έλεγχο πριν τη διάθεσή της. Προσφέρουμε εγγύηση καλής λειτουργίας.',
  },
  {
    icon: Wrench,
    title: 'Πλήρης Ανακατασκευή',
    body: 'Αντικατάσταση φθαρμένων εξαρτημάτων, καθαρισμός, επανεγκατάσταση λειτουργικού και αποθήκευση δεδομένων.',
  },
  {
    icon: Leaf,
    title: 'Οικολογική Επιλογή',
    body: 'Η επιλογή ανακατασκευασμένου εξοπλισμού μειώνει τα ηλεκτρονικά απόβλητα και συμβάλλει στη βιώσιμη ανάπτυξη.',
  },
]

const laptopFeatures = [
  'Επεξεργαστές Intel Core i5 / i7 & AMD Ryzen',
  'SSD αποθήκευση για γρήγορη εκκίνηση',
  'Οθόνες Full HD 13" έως 15.6"',
  'Μνήμη RAM 8GB – 16GB',
  'Διαθέσιμα με Windows 11 Pro',
  'Εγγύηση καλής λειτουργίας',
]

const desktopFeatures = [
  'Επεξεργαστές Intel Core i5 / i7 & Xeon',
  'SSD + HDD για ταχύτητα & χωρητικότητα',
  'Ιδανικά για γραφεία & επιχειρήσεις',
  'Μνήμη RAM 8GB – 32GB',
  'Διαθέσιμα με Windows 10/11 Pro',
  'Εγγύηση καλής λειτουργίας',
]

const checklist = [
  'Επανεγκατάσταση & ενημέρωση λειτουργικού',
  'Εγκατάσταση Microsoft Office',
  'Έλεγχος οθόνης, πληκτρολογίου & θυρών',
  'Τελικός λειτουργικός έλεγχος πριν την παράδοση',
]

export default function RefurbishedPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  return (
    <div className="pt-20 lg:pt-28 bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 px-4 pt-14 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
            Ανακατασκευασμένος Εξοπλισμός
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Refurbished<br />
            <span className="text-cyan-400">Laptops & Desktops</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-8">
            Διαθέτουμε επιλεγμένο ανακατασκευασμένο εξοπλισμό — αποκλειστικά laptops και desktop υπολογιστές — πλήρως ελεγμένα, έτοιμα για χρήση.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-cyan-400 text-slate-900 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-cyan-300 transition-all"
            >
              Ρωτήστε μας <ArrowRight size={16} />
            </Link>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-all"
            >
              Κατηγορίες
            </a>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-50 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Γιατί Refurbished</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Έξυπνη επιλογή για κάθε επιχείρηση</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Gradient top bar */}
                <div className="h-1.5 bg-linear-to-r from-slate-700 to-slate-500 group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300" />
                <div className="p-6">
                  <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-slate-800 to-slate-600 flex items-center justify-center mb-4 shadow-md">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Διαθέσιμες Κατηγορίες</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Laptops & Desktops</h2>
            <p className="mt-2 text-slate-500 text-sm max-w-lg">
              Διαθέτουμε αποκλειστικά φορητούς και επιτραπέζιους υπολογιστές από αξιόπιστες μάρκες, σε επιλεγμένες προδιαγραφές.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Laptops */}
            <div
              className={`rounded-3xl border-2 overflow-hidden transition-all duration-300 group ${
                hoveredCard === 'laptops' ? 'shadow-2xl -translate-y-2 scale-[1.02] border-cyan-300 ring-4 ring-cyan-200' : 'border-slate-100'
              } ${hoveredCard !== null && hoveredCard !== 'laptops' ? 'opacity-50 scale-[0.98]' : ''}`}
              onMouseEnter={() => setHoveredCard('laptops')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-linear-to-br from-slate-800 to-slate-700 px-8 py-10 flex flex-col items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Laptop size={30} className="text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">Laptops</h3>
                  <p className="text-slate-400 text-sm mt-1">Φορητοί υπολογιστές για γραφείο & κινητή εργασία</p>
                </div>
              </div>
              <div className="bg-white px-8 py-6">
                <ul className="space-y-2.5">
                  {laptopFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 size={15} className="text-cyan-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors"
                >
                  Ρωτήστε για διαθεσιμότητα <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Desktops */}
            <div
              className={`rounded-3xl border-2 overflow-hidden transition-all duration-300 group ${
                hoveredCard === 'desktops' ? 'shadow-2xl -translate-y-2 scale-[1.02] border-blue-300 ring-4 ring-blue-200' : 'border-slate-100'
              } ${hoveredCard !== null && hoveredCard !== 'desktops' ? 'opacity-50 scale-[0.98]' : ''}`}
              onMouseEnter={() => setHoveredCard('desktops')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-linear-to-br from-blue-800 to-blue-700 px-8 py-10 flex flex-col items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Monitor size={30} className="text-blue-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">Desktops</h3>
                  <p className="text-blue-300 text-sm mt-1">Επιτραπέζιοι υπολογιστές για γραφεία & επιχειρήσεις</p>
                </div>
              </div>
              <div className="bg-white px-8 py-6">
                <ul className="space-y-2.5">
                  {desktopFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 size={15} className="text-blue-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                >
                  Ρωτήστε για διαθεσιμότητα <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we check */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Διαδικασία Ελέγχου</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Τι ελέγχουμε σε κάθε συσκευή
              </h2>
              <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                Πριν διατεθεί οποιαδήποτε συσκευή, υποβάλλεται σε πλήρη τεχνικό έλεγχο από το εξουσιοδοτημένο τεχνικό μας τμήμα.
              </p>
            </div>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-100 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-linear-to-br from-slate-900 to-slate-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Ενδιαφέρεστε για refurbished εξοπλισμό;
          </h2>
          <p className="text-slate-400 text-sm mb-7">
            Επικοινωνήστε μαζί μας για να σας ενημερώσουμε για τη διαθέσιμη ποσότητα και τις τρέχουσες τιμές.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all"
          >
            Επικοινωνία <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  )
}
