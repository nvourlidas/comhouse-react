import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ClipboardList, Settings2, GraduationCap, Headphones, Zap, ChevronDown, Users, Store, Briefcase, FileText, Package, Cpu, RotateCcw } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeUp } from '../components/ScrollReveal'
import SEO from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'
import entersoftLogo from '../assets/ENTERSOFTONE_logo.png'
import prosvasisLogo from '../assets/prosvasis-go-logo.webp'
import pbsoneLogo from '../assets/pbsone-logo.png'

/* ─── Services ───────────────────────────────────────────────────── */
const services = [
  {
    icon: ClipboardList,
    title: 'Ανάλυση Αναγκών',
    description: 'Πριν προτείνουμε οτιδήποτε, μελετάμε σε βάθος τη λειτουργία της επιχείρησής σας. Καταγράφουμε τις ανάγκες σας, τον αριθμό χρηστών και τις διαδικασίες, ώστε να επιλέξουμε μαζί το κατάλληλο λογισμικό.',
  },
  {
    icon: Settings2,
    title: 'Εγκατάσταση & Παραμετροποίηση',
    description: 'Αναλαμβάνουμε πλήρως την εγκατάσταση και τη ρύθμιση του λογισμικού στα μέτρα σας — παράμετροι επιχείρησης, συνδέσεις με myDATA και ΑΑΔΕ, ρυθμίσεις αποθήκης, τιμολόγησης και λογαριασμών.',
  },
  {
    icon: GraduationCap,
    title: 'Εκπαίδευση Χρηστών',
    description: 'Δεν παραδίδουμε και εξαφανιζόμαστε. Εκπαιδεύουμε εσάς και την ομάδα σας ώστε να αξιοποιείτε το λογισμικό στο 100% — από τις βασικές λειτουργίες έως τα reports και τα προχωρημένα εργαλεία.',
  },
  {
    icon: Headphones,
    title: 'Τεχνική Υποστήριξη',
    description: 'Παρέχουμε συνεχή τεχνική υποστήριξη μετά την εγκατάσταση — τηλεφωνικά ή εξ αποστάσεως. Η επιχείρησή σας δεν σταματά ποτέ για τεχνικό θέμα.',
  },
  {
    icon: Zap,
    title: 'Αναβαθμίσεις',
    description: 'Το λογισμικό ενημερώνεται συνεχώς με νέες δυνατότητες και φορολογικές αλλαγές. Αναλαμβάνουμε τις αναβαθμίσεις ώστε να είστε πάντα συμβατοί με την ΑΑΔΕ και ενήμεροι με τις νέες εκδόσεις.',
  },
]

/* ─── Partners ───────────────────────────────────────────────────── */
const partners = [
  { name: 'EntersoftOne', logo: entersoftLogo, href: '/mixanografisi/softone',   invert: false },
  { name: 'Prosvasis Go', logo: prosvasisLogo, href: '/mixanografisi/prosvasis', invert: false },
  { name: 'PBS ONE',      logo: pbsoneLogo,    href: '/mixanografisi/pbs',       invert: false },
]

/* ─── Quiz ───────────────────────────────────────────────────────── */
const quizSteps = [
  {
    id: 'size',
    question: 'Πόσα άτομα εργάζονται στην επιχείρησή σας;',
    options: [
      { id: 'small',  label: 'Έως 5 άτομα',  sublabel: 'Μικρή επιχείρηση',      icon: Users    },
      { id: 'medium', label: '5–20 άτομα',    sublabel: 'Μεσαία επιχείρηση',     icon: Users    },
      { id: 'large',  label: '20+ άτομα',     sublabel: 'Μεγάλη επιχείρηση',     icon: Users    },
    ],
  },
  {
    id: 'sector',
    question: 'Ποιος είναι ο κλάδος σας;',
    options: [
      { id: 'lianikh',   label: 'Λιανική / Εμπόριο',         sublabel: 'Κατάστημα, μίνι μάρκετ',           icon: Store    },
      { id: 'estiaseh',  label: 'Εστίαση',                    sublabel: 'Καφέ, εστιατόριο, μπαρ',            icon: Store    },
      { id: 'ypiresia',  label: 'Υπηρεσίες / Άλλο',          sublabel: 'Συνεργείο, ιατρείο, γραφείο',       icon: Briefcase },
    ],
  },
  {
    id: 'needs',
    question: 'Ποια είναι η κύρια ανάγκη σας;',
    options: [
      { id: 'invoicing', label: 'Τιμολόγηση & myDATA',        sublabel: 'Αποδείξεις, τιμολόγια, ΑΑΔΕ',     icon: FileText },
      { id: 'stock',     label: 'Διαχείριση αποθήκης & stock', sublabel: 'Παρακολούθηση αποθεμάτων',        icon: Package  },
      { id: 'erp',       label: 'Πλήρες ERP',                 sublabel: 'Λογιστήριο, αγορές, πωλήσεις',    icon: Cpu      },
    ],
  },
]

type Answers = Record<string, string>

const results: Record<string, { name: string; logo: string; href: string; type: string; description: string }> = {
  entersoft: {
    name: 'EntersoftOne', logo: entersoftLogo, href: '/mixanografisi/softone',
    type: 'EntersoftOne ERP & CRM',
    description: 'Για επιχειρήσεις που χρειάζονται ολοκληρωμένη λύση, το EntersoftOne καλύπτει πωλήσεις, αγορές, αποθήκη, λογιστήριο και CRM σε ένα σύστημα. Ιδανικό για μεσαίες και μεγάλες επιχειρήσεις με σύνθετες ανάγκες.',
  },
  pbs: {
    name: 'PBS ONE', logo: pbsoneLogo, href: '/mixanografisi/pbs',
    type: 'PBS ONE — Λογισμικό ERP Λιανικής',
    description: 'Το PBS ONE συνδυάζει διαχείριση αποθήκης, λιανικές πωλήσεις και τιμολόγηση σε ένα αξιόπιστο σύστημα. Ιδανικό για εμπορικές επιχειρήσεις που θέλουν πλήρη έλεγχο του stock τους.',
  },
  prosvasis: {
    name: 'Prosvasis Go', logo: prosvasisLogo, href: '/mixanografisi/prosvasis',
    type: 'Prosvasis Go — Λογισμικό Λιανικής',
    description: 'Το Prosvasis Go είναι η απλή, γρήγορη και οικονομική λύση για μικρές επιχειρήσεις. Τιμολόγηση, myDATA, αποδείξεις και βασική αποθήκη — όλα σε ένα εύχρηστο περιβάλλον.',
  },
}

function getResult(answers: Answers): string {
  const { size, needs } = answers
  if (size === 'large' || needs === 'erp') return 'entersoft'
  if (needs === 'stock') return 'pbs'
  return 'prosvasis'
}

/* ─── FAQ ────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: 'Τι είναι το myDATA και γιατί με αφορά;',
    a: 'Το myDATA είναι η ηλεκτρονική πλατφόρμα της ΑΑΔΕ για την αυτόματη διαβίβαση παραστατικών (τιμολόγια, αποδείξεις). Από το 2024 είναι υποχρεωτικό για τις περισσότερες επιχειρήσεις. Όλα τα λογισμικά που διαθέτουμε είναι πλήρως συμβατά και αναλαμβάνουμε εμείς τη σύνδεση.',
  },
  {
    q: 'Μπορώ να μεταφέρω τα δεδομένα μου από παλιό πρόγραμμα;',
    a: 'Στις περισσότερες περιπτώσεις ναι. Μπορούμε να μεταφέρουμε πελατολόγιο, προϊόντα, αποθέματα και λογιστικά υπόλοιπα από το παλιό σας σύστημα. Ο τρόπος και ο χρόνος εξαρτάται από το πρόγραμμα που χρησιμοποιείτε σήμερα — επικοινωνήστε μαζί μας για να το αξιολογήσουμε.',
  },
  {
    q: 'Πόσο καιρό διαρκεί η εγκατάσταση;',
    a: 'Μια βασική εγκατάσταση με παραμετροποίηση ολοκληρώνεται συνήθως σε 1–3 εργάσιμες ημέρες, ανάλογα με το μέγεθος της επιχείρησης και τις ανάγκες. Η εκπαίδευση γίνεται επί τόπου και διαρκεί μερικές ώρες έως μία ημέρα.',
  },
  {
    q: 'Χρειάζομαι ειδικό εξοπλισμό ή server;',
    a: 'Όχι απαραίτητα. Τα σύγχρονα λογισμικά που διαθέτουμε λειτουργούν και σε cloud, χωρίς ανάγκη για τοπικό server. Για on-premise εγκαταστάσεις σε μεγαλύτερες επιχειρήσεις, σας καθοδηγούμε στις απαιτήσεις υλικού.',
  },
  {
    q: 'Προσφέρετε υποστήριξη μετά την εγκατάσταση;',
    a: 'Ναι, αυτό είναι ένα από τα πιο σημαντικά πράγματα που προσφέρουμε. Παρέχουμε τεχνική υποστήριξη τηλεφωνικά και εξ αποστάσεως, ανανεώσεις αδειών και αναβαθμίσεις λογισμικού. Δεν εξαφανιζόμαστε μετά την παράδοση.',
  },
]

/* ─── Page ───────────────────────────────────────────────────────── */
export default function MixanografisiPage() {
  const [openFaq, setOpenFaq]     = useState<number | null>(null)
  const [quizStep, setQuizStep]   = useState(0)
  const [answers, setAnswers]     = useState<Answers>({})
  const isDone = quizStep === quizSteps.length

  function handleAnswer(stepId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [stepId]: optionId }))
    setQuizStep((s) => s + 1)
  }

  function resetQuiz() {
    setAnswers({})
    setQuizStep(0)
  }

  return (
    <div className="pt-20 lg:pt-28 bg-white min-h-screen">
      <SEO
        title="Λύσεις Μηχανογράφησης Σέρρες | ComHouse"
        description="Λογισμικό μηχανογράφησης για επιχειρήσεις στις Σέρρες. EntersoftOne, Prosvasis Go και PBS ONE — εγκατάσταση, εκπαίδευση και υποστήριξη από εξουσιοδοτημένο συνεργάτη."
        canonical="https://www.comhouse.gr/mixanografisi"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'ComHouse — Λύσεις Μηχανογράφησης Σέρρες',
          url: 'https://www.comhouse.gr',
          telephone: '+302321098466',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Εθνικής Αντίστασης 40',
            addressLocality: 'Σέρρες',
            addressCountry: 'GR',
          },
          areaServed: ['Σέρρες', 'Νομός Σερρών'],
          description: 'Εξουσιοδοτημένος συνεργάτης EntersoftOne, Prosvasis Go και PBS ONE στις Σέρρες. Εγκατάσταση, εκπαίδευση και υποστήριξη λογισμικού μηχανογράφησης.',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Υπηρεσίες Μηχανογράφησης',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Εγκατάσταση λογισμικού μηχανογράφησης' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Εκπαίδευση χρηστών ERP' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Τεχνική υποστήριξη λογισμικού' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Αναβαθμίσεις & myDATA σύνδεση' } },
            ],
          },
        }}
      />

      {/* ── Hero ── */}
      <section className="relative bg-indigo-950 px-4 pt-10 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: 'Αρχική', href: '/' },
            { label: 'Λύσεις Μηχανογράφησης' },
          ]} />

          <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-3 mt-2">
            Λογισμικό Επιχειρήσεων
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Λύσεις Μηχανογράφησης<br />
            <span className="text-indigo-300">για κάθε επιχείρηση</span>
          </h1>
          <p className="text-indigo-100/80 text-lg max-w-2xl leading-relaxed mb-8">
            Εγκατάσταση, εκπαίδευση και υποστήριξη λογισμικού ERP από εξουσιοδοτημένο συνεργάτη{' '}
            <strong className="text-indigo-300">EntersoftOne</strong>,{' '}
            <strong className="text-indigo-300">Prosvasis Go</strong> και{' '}
            <strong className="text-indigo-300">PBS ONE</strong> στις Σέρρες.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-indigo-400 text-indigo-950 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-300 transition-all"
            >
              Ζητήστε προσφορά <ArrowRight size={16} />
            </Link>
            <a
              href="#partners"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-all"
            >
              Δείτε τα λογισμικά
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── About text ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Ποιοι είμαστε</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
              Εξουσιοδοτημένος συνεργάτης στις Σέρρες
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Η <strong className="text-slate-800">ComHouse</strong>, με έδρα τις <strong className="text-slate-800">Σέρρες</strong>,
                προσφέρει ολοκληρωμένες λύσεις μηχανογράφησης για επιχειρήσεις κάθε μεγέθους και κλάδου.
                Με πολυετή εμπειρία στον χώρο του επιχειρησιακού λογισμικού, αναλαμβάνουμε πλήρως κάθε ανάγκη σας —
                από την επιλογή του κατάλληλου προγράμματος έως την καθημερινή υποστήριξη.
              </p>
              <p>
                Προσφέρουμε <strong className="text-slate-800">ανάλυση αναγκών</strong>,{' '}
                <strong className="text-slate-800">εγκατάσταση</strong>,{' '}
                <strong className="text-slate-800">παραμετροποίηση</strong>,{' '}
                <strong className="text-slate-800">εκπαίδευση χρηστών</strong>,{' '}
                <strong className="text-slate-800">τεχνική υποστήριξη</strong> και{' '}
                <strong className="text-slate-800">αναβαθμίσεις</strong> για όλα τα λογισμικά που διαθέτουμε.
                Γνωρίζουμε ότι η αλλαγή ή η εγκατάσταση νέου λογισμικού μπορεί να φαίνεται περίπλοκη —
                γι' αυτό είμαστε δίπλα σας σε κάθε βήμα, ώστε η μετάβαση να γίνει ομαλά και χωρίς διακοπές.
              </p>
              <p>
                Συνεργαζόμαστε αποκλειστικά με τρεις από τις πιο αξιόπιστες εταιρείες λογισμικού στην ελληνική αγορά:{' '}
                <Link to="/mixanografisi/softone" className="text-indigo-600 font-semibold hover:underline">EntersoftOne</Link>,{' '}
                <Link to="/mixanografisi/prosvasis" className="text-indigo-600 font-semibold hover:underline">Prosvasis Go</Link> και{' '}
                <Link to="/mixanografisi/pbs" className="text-indigo-600 font-semibold hover:underline">PBS ONE</Link>.
                Κάθε μία απευθύνεται σε διαφορετικό μέγεθος και ανάγκη επιχείρησης,
                εξασφαλίζοντας ότι θα βρείτε ακριβώς αυτό που χρειάζεστε — χωρίς να πληρώσετε για όσα δεν χρειάζεστε.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="mb-10">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Τι Προσφέρουμε</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Πλήρης κάλυψη σε κάθε στάδιο</h2>
              <p className="mt-2 text-slate-500 text-sm max-w-lg">
                Από την πρώτη συζήτηση έως τη συνεχή υποστήριξη χρόνια αργότερα.
              </p>
            </div>
          </FadeUp>

          <div className="divide-y divide-slate-200">
            {services.map(({ icon: Icon, title, description }, i) => (
              <FadeUp key={title}>
                <div className="flex items-start gap-6 py-6 group">
                  <span className="shrink-0 text-xs font-black text-slate-300 w-6 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center transition-colors">
                    <Icon size={16} className="text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section id="partners" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="mb-10">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Συνεργάτες μας</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Τα λογισμικά που διαθέτουμε</h2>
              <p className="mt-2 text-slate-500 text-sm max-w-lg">
                Τρεις αξιόπιστες λύσεις — επιλέξτε αυτή που ταιριάζει στην επιχείρησή σας.
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-3 gap-5">
            {partners.map((p) => (
              <FadeUp key={p.name}>
                <Link
                  to={p.href}
                  className="flex items-center justify-center bg-white border border-slate-200 rounded-2xl px-8 py-12 hover:border-indigo-300 hover:shadow-md transition-all duration-300 group"
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-12 max-w-40 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quiz ── */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <div className="mb-8">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Βρείτε τη λύση σας</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Ποιο λογισμικό σας ταιριάζει;</h2>
              <p className="mt-2 text-slate-500 text-sm">Απαντήστε σε 3 σύντομες ερωτήσεις και θα σας προτείνουμε την κατάλληλη λύση.</p>
            </div>
          </FadeUp>

          {/* Progress */}
          <div className="flex gap-1.5 mb-8">
            {quizSteps.map((_, i) => (
              <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-slate-200">
                <motion.div
                  className="h-full bg-indigo-600 rounded-full"
                  initial={false}
                  animate={{ width: quizStep > i ? '100%' : '0%' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!isDone ? (
              <motion.div
                key={quizStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <p className="font-bold text-slate-800 mb-5 text-lg">
                  <span className="text-indigo-500 mr-2">{quizStep + 1}.</span>
                  {quizSteps[quizStep].question}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {quizSteps[quizStep].options.map(({ id, label, sublabel, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => handleAnswer(quizSteps[quizStep].id, id)}
                      className="flex items-center gap-4 p-4 bg-white border-2 border-slate-200 rounded-2xl text-left hover:border-indigo-400 hover:bg-indigo-50/40 transition-all duration-200 group"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center transition-colors duration-200">
                        <Icon size={18} className="text-slate-500 group-hover:text-indigo-600 transition-colors duration-200" />
                      </div>
                      <div>
                        <span className="block font-bold text-sm text-slate-800">{label}</span>
                        <span className="block text-xs text-slate-400 mt-0.5">{sublabel}</span>
                      </div>
                    </button>
                  ))}
                </div>
                {quizStep > 0 && (
                  <button
                    onClick={() => setQuizStep((s) => s - 1)}
                    className="mt-5 text-xs text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    ← Προηγούμενο
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {(() => {
                  const r = results[getResult(answers)]
                  return (
                    <div className="rounded-2xl bg-indigo-950 overflow-hidden">
                      <div className="px-7 pt-7 pb-5 flex flex-col sm:flex-row gap-5 items-start">
                        <div className="shrink-0 bg-white/10 rounded-xl px-5 py-4 flex items-center justify-center">
                          <img src={r.logo} alt={r.name} className="h-10 w-auto object-contain brightness-0 invert" />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400">Η πρότασή μας</span>
                          <h3 className="mt-1 text-lg font-extrabold text-white">{r.type}</h3>
                          <p className="mt-2 text-white/70 text-sm leading-relaxed">{r.description}</p>
                        </div>
                      </div>
                      <div className="px-7 pb-7 flex flex-wrap gap-3">
                        <Link
                          to={r.href}
                          className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                        >
                          Μάθετε περισσότερα <ArrowRight size={14} />
                        </Link>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                        >
                          Ζητήστε συμβουλή
                        </Link>
                        <button
                          onClick={resetQuiz}
                          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm transition-colors ml-auto"
                        >
                          <RotateCcw size={13} /> Ξανά
                        </button>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4 bg-linear-to-br from-indigo-100 to-indigo-50">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="mb-10">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-500">Συχνές Ερωτήσεις</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Έχετε απορίες;</h2>
            </div>
          </FadeUp>
          <div className="divide-y divide-indigo-100">
            {faqs.map((faq, i) => (
              <FadeUp key={i}>
                <button
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${openFaq === i ? 'text-indigo-600' : 'text-slate-800 group-hover:text-indigo-600'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-all duration-300 ${openFaq === i ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
