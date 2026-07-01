import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingCart, Wrench, Headphones, Settings2, Zap, ChevronDown, UtensilsCrossed, ShoppingBag, Briefcase, MapPin, Store, Smartphone, Receipt, Table2, Cable, RotateCcw } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeUp } from '../components/ScrollReveal'
import SEO from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'
import rbsLogo from '../assets/LOGO-RBS-TRANSP-scaled-2048x742.png'
import datatecLogo from '../assets/logo-removebg-preview.png'

const services = [
  {
    icon: ShoppingCart,
    title: 'Πωλήσεις',
    description:
      'Διαθέτουμε πλήρη γκάμα ταμειακών μηχανών και POS συστημάτων για κάθε κλάδο. Εμπορικά καταστήματα, εστίαση, υπηρεσίες — έχουμε την ιδανική λύση για εσάς.',
    highlights: ['Φορητές & επιτραπέζιες', 'Android & κλασικές', 'All-in-One POS', 'Για κάθε κλάδο'],
  },
  {
    icon: Wrench,
    title: 'Εγκατάσταση',
    description:
      'Αναλαμβάνουμε την πλήρη εγκατάσταση και παραμετροποίηση — από τη σύνδεση με ΑΑΔΕ/myDATA έως τη ρύθμιση προϊόντων, τιμών και περιφερειακών.',
    highlights: ['Σύνδεση με ΑΑΔΕ & myDATA', 'Παραμετροποίηση προϊόντων', 'Σύνδεση με λογισμικό', 'Εκπαίδευση χρηστών'],
  },
  {
    icon: Headphones,
    title: 'Υποστήριξη',
    description:
      'Άμεση τεχνική υποστήριξη τηλεφωνικά, εξ αποστάσεως ή επί τόπου. Η επιχείρησή σας δεν σταματά ποτέ λόγω τεχνικού προβλήματος.',
    highlights: ['Τηλεφωνική εξυπηρέτηση', 'Remote υποστήριξη', 'Επίσκεψη επί τόπου', 'Γρήγοροι χρόνοι απόκρισης'],
  },
  {
    icon: Settings2,
    title: 'Service & Επισκευές',
    description:
      'Εξουσιοδοτημένο service για RBS και DataTec. Επισκευές, αντικατάσταση ανταλλακτικών, κλείσιμο και παύση φορολογικής μνήμης.',
    highlights: ['Εξουσιοδοτημένο service', 'Γνήσια ανταλλακτικά', 'Κλείσιμο φορολογικής μνήμης', 'Εκτύπωση αναφορών'],
  },
  {
    icon: Zap,
    title: 'Αναβαθμίσεις',
    description:
      'Κρατάμε τις ταμειακές σας πάντα ενημερωμένες με τις τελευταίες εκδόσεις λογισμικού, φορολογικές αλλαγές και βελτιώσεις απόδοσης.',
    highlights: ['Software updates', 'Φορολογικές αλλαγές ΑΑΔΕ', 'Αναβαθμίσεις υλικού', 'Μετάβαση σε νέο μοντέλο'],
  },
]

const partners = [
  { name: 'RBS',     logo: rbsLogo,     href: '/tameiakes/rbs' },
  { name: 'DataTec', logo: datatecLogo, href: '/tameiakes/datatec' },
]

const quizSteps = [
  {
    id: 'type',
    question: 'Τι είδους επιχείρηση έχετε;',
    options: [
      { id: 'estiaseh', label: 'Εστίαση',              sublabel: 'Καφέ, εστιατόριο, μπαρ',              icon: UtensilsCrossed },
      { id: 'lianikh',  label: 'Λιανική',               sublabel: 'Κατάστημα, μίνι μάρκετ',              icon: ShoppingBag     },
      { id: 'ypiresia', label: 'Υπηρεσίες',             sublabel: 'Συνεργείο, κομμωτήριο, ιατρείο',      icon: Briefcase       },
      { id: 'kiniti',   label: 'Κινητή / Λαϊκή',        sublabel: 'Λαϊκή αγορά, catering, delivery',     icon: MapPin          },
    ],
  },
  {
    id: 'mobility',
    question: 'Πώς θα χρησιμοποιείτε το ταμείο;',
    options: [
      { id: 'static', label: 'Σε σταθερό σημείο', sublabel: 'Πάγκος ή γραφείο χωρίς μετακίνηση', icon: Store      },
      { id: 'mobile', label: 'Φορητά / σε κίνηση', sublabel: 'Ελευθερία κίνησης, χωρίς καλώδια',  icon: Smartphone },
    ],
  },
  {
    id: 'needs',
    question: 'Ποια είναι η κύρια ανάγκη σας;',
    options: [
      { id: 'simple',   label: 'Γρήγορη έκδοση αποδείξεων', sublabel: 'Απλή και αποτελεσματική λειτουργία',       icon: Receipt },
      { id: 'tables',   label: 'Διαχείριση τραπεζιών',       sublabel: 'Παραγγελίες, σέρβις, πολυάσχολο περιβάλλον', icon: Table2  },
      { id: 'erp',      label: 'Σύνδεση με λογισμικό',       sublabel: 'Ενοποίηση με ERP ή πρόγραμμα λογιστηρίου',  icon: Cable  },
    ],
  },
]

type Answers = Record<string, string>

const results: Record<string, { brand: string; logo: string; href: string; type: string; description: string }> = {
  'rbs-portable': {
    brand: 'RBS', logo: rbsLogo, href: '/tameiakes/rbs',
    type: 'Φορητή Android Ταμειακή RBS',
    description: 'Η ιδανική λύση για κινητικότητα και ευελιξία. Λειτουργεί με μπαταρία, έχει 4G και ενσωματωμένο εκτυπωτή — δουλεύει παντού χωρίς καλώδια. Κατάλληλη για delivery, λαϊκές αγορές και κινητές δραστηριότητες.',
  },
  'rbs-aio': {
    brand: 'RBS', logo: rbsLogo, href: '/tameiakes/rbs',
    type: 'RBS All-in-One POS',
    description: 'Πλήρες Android σύστημα POS για εστίαση. Υποστηρίζει διαχείριση τραπεζιών, παραγγελίες σέρβις, delivery και ταχεία εξυπηρέτηση — ιδανικό για πολυάσχολα περιβάλλοντα.',
  },
  'datatec-classic': {
    brand: 'DataTec', logo: datatecLogo, href: '/tameiakes/datatec',
    type: 'DataTec Κλασική Ταμειακή',
    description: 'Αξιόπιστη και εύκολη στη χρήση, η DataTec καλύπτει πλήρως τις καθημερινές ανάγκες λιανικής ή υπηρεσιών. Πλούσια γκάμα μοντέλων, πλήρης συμβατότητα με ΑΑΔΕ και myDATA.',
  },
  'datatec-erp': {
    brand: 'DataTec', logo: datatecLogo, href: '/tameiakes/datatec',
    type: 'DataTec με Σύνδεση Λογισμικού',
    description: 'Για επιχειρήσεις που χρειάζονται ενοποίηση με ERP ή λογιστικό πρόγραμμα, η DataTec προσφέρει πλήρεις δυνατότητες σύνδεσης. Αξιόπιστη βάση με επεκτάσιμη λειτουργικότητα.',
  },
  'datatec-50md': {
    brand: 'DataTec', logo: datatecLogo, href: '/tameiakes/datatec',
    type: 'DataTec DT-50mD',
    description: 'Η DataTec DT-50mD είναι η ιδανική φορητή λύση για λαϊκές αγορές και κινητές δραστηριότητες. Συμπαγής, ανθεκτική, με μπαταρία μακράς διαρκείας και γρήγορη θερμική εκτύπωση — εκδίδει αποδείξεις αξιόπιστα παντού.',
  },
}

function getResult(answers: Answers): string {
  const { type, mobility, needs } = answers
  if (type === 'kiniti' && mobility === 'mobile' && needs === 'simple') return 'datatec-50md'
  if (type === 'kiniti' || mobility === 'mobile') return 'rbs-portable'
  if (type === 'estiaseh') return 'rbs-aio'
  if (needs === 'erp') return 'datatec-erp'
  return 'datatec-classic'
}

const faqs = [
  {
    q: 'Είμαι υποχρεωμένος να έχω ταμειακή μηχανή;',
    a: 'Ναι. Σύμφωνα με την ελληνική φορολογική νομοθεσία, κάθε επιχείρηση που πωλεί αγαθά ή παρέχει υπηρεσίες σε ιδιώτες υποχρεούται να χρησιμοποιεί εγκεκριμένη ταμειακή μηχανή ή POS σύστημα. Η μη συμμόρφωση επισύρει βαριές κυρώσεις από την ΑΑΔΕ. Αν δεν είστε σίγουροι για την υποχρέωσή σας, επικοινωνήστε μαζί μας και θα σας καθοδηγήσουμε.',
  },
  {
    q: 'Πόσο διαρκεί η εγκατάσταση;',
    a: 'Στις περισσότερες περιπτώσεις η εγκατάσταση ολοκληρώνεται αυθημερόν ή την επομένη. Αναλαμβάνουμε την τοποθέτηση, τη δήλωση στην ΑΑΔΕ, την παραμετροποίηση προϊόντων και τιμών, καθώς και τη σύνδεση με εκτυπωτές ή λογισμικό. Πριν φύγουμε, βεβαιωνόμαστε ότι εσείς και οι εργαζόμενοί σας ξέρετε πώς να τη χρησιμοποιείτε.',
  },
  {
    q: 'Τι γίνεται αν η ταμειακή μου χαλάσει;',
    a: 'Ως εξουσιοδοτημένοι συνεργάτες RBS και DataTec, αναλαμβάνουμε άμεσα κάθε βλάβη. Στις περισσότερες περιπτώσεις ξεκινάμε με τηλεφωνική ή remote υποστήριξη για άμεση επίλυση. Αν χρειαστεί επίσκεψη, ερχόμαστε επί τόπου με ανταλλακτικά. Ανάλογα με το πρόβλημα, μπορεί να χρειαστεί να φέρετε τη συσκευή στο κατάστημά μας για πιο εκτεταμένη επισκευή.',
  },
  {
    q: 'Εξυπηρετείτε εκτός Σερρών;',
    a: 'Εξυπηρετούμε όλο τον νομό Σερρών καθώς και τους γύρω νομούς. Αν δεν είστε σίγουροι αν καλύπτουμε την περιοχή σας, καλέστε μας και θα σας ενημερώσουμε άμεσα.',
  },
  {
    q: 'MyDATA και ταμειακές — τι ισχύει;',
    a: 'Από το 2024 όλες οι ταμειακές μηχανές στην Ελλάδα πρέπει να αποστέλλουν τα παραστατικά τους ηλεκτρονικά στην πλατφόρμα myDATA της ΑΑΔΕ. Όλες οι ταμειακές που διαθέτουμε είναι πλήρως συμβατές. Αναλαμβάνουμε εμείς τη σύνδεση και τη ρύθμιση, ώστε εσείς να μην ασχολείτε με τεχνικές λεπτομέρειες.',
  },
  {
    q: 'Ποια ταμειακή χρειάζομαι;',
    a: 'Εξαρτάται από τη φύση της επιχείρησής σας. Για εστίαση και delivery προτείνουμε φορητές Android ταμειακές ή all-in-one POS. Για εμπορικά καταστήματα υπάρχουν κλασικές λύσεις. Για λαϊκές αγορές ή κινητές δραστηριότητες, compact φορητές συσκευές. Επικοινωνήστε μαζί μας και μετά από μια σύντομη συζήτηση θα σας προτείνουμε το κατάλληλο μοντέλο.',
  },
]

export default function TameiakesMixanesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [quizStep, setQuizStep]     = useState(0)
  const [answers, setAnswers]       = useState<Answers>({})
  const isDone = quizStep === quizSteps.length

  function handleAnswer(stepId: string, optionId: string) {
    const next = { ...answers, [stepId]: optionId }
    setAnswers(next)
    setQuizStep((s) => s + 1)
  }

  function resetQuiz() {
    setAnswers({})
    setQuizStep(0)
  }

  return (
    <div className="pt-20 lg:pt-28 bg-white min-h-screen">
      <SEO
        title="Ταμειακές Μηχανές Σέρρες | ComHouse"
        description="Πωλήσεις, εγκατάσταση, υποστήριξη, service και αναβαθμίσεις ταμειακών μηχανών RBS και DataTec στις Σέρρες. Εξουσιοδοτημένος συνεργάτης — άμεση εξυπηρέτηση σε όλο τον νομό."
        canonical="https://www.comhouse.gr/tameiakes-mixanes-serres"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'ComHouse — Ταμειακές Μηχανές Σέρρες',
          url: 'https://www.comhouse.gr',
          telephone: '+302321098466',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Εθνικής Αντίστασης 40',
            addressLocality: 'Σέρρες',
            addressCountry: 'GR',
          },
          areaServed: ['Σέρρες', 'Νομός Σερρών'],
          description: 'Εξουσιοδοτημένος συνεργάτης RBS και DataTec στις Σέρρες. Πωλήσεις, εγκατάσταση, υποστήριξη, service και αναβαθμίσεις ταμειακών μηχανών.',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Υπηρεσίες Ταμειακών Μηχανών',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Πωλήσεις ταμειακών μηχανών' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Εγκατάσταση ταμειακών μηχανών' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Τεχνική υποστήριξη & service' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Αναβαθμίσεις ταμειακών μηχανών' } },
            ],
          },
        }}
      />

      {/* ── Hero ── */}
      <section className="relative bg-blue-950 px-4 pt-10 pb-24 overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: 'Αρχική', href: '/' },
            { label: 'Ταμειακές Μηχανές' },
          ]} />

          <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-3 mt-2">
            Φορολογικές Ταμειακές Μηχανές
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Ταμειακές Μηχανές<br />
            <span className="text-blue-300">για κάθε επιχείρηση</span>
          </h1>
          <p className="text-blue-100/80 text-lg max-w-2xl leading-relaxed mb-8">
            Πωλήσεις, εγκατάσταση, υποστήριξη, service και αναβαθμίσεις — όλα σε ένα σημείο,
            από εξουσιοδοτημένο συνεργάτη <strong className="text-blue-300">RBS</strong> και <strong className="text-blue-300">DataTec</strong> στις Σέρρες.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-400 text-blue-950 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-300 transition-all"
            >
              Ζητήστε προσφορά <ArrowRight size={16} />
            </Link>
            <a
              href="#partners"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-all"
            >
              Δείτε τις μάρκες
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
                αποτελεί έναν από τους πιο αξιόπιστους συνεργάτες ταμειακών μηχανών στη Βόρεια Ελλάδα.
                Με πολυετή εμπειρία στον κλάδο και βαθιά γνώση των αναγκών των τοπικών επιχειρήσεων,
                αναλαμβάνουμε πλήρως κάθε ταμειακή σας ανάγκη — από την πρώτη αγορά μέχρι τη συνεχή συντήρηση.
              </p>
              <p>
                Προσφέρουμε <strong className="text-slate-800">πωλήσεις</strong>, <strong className="text-slate-800">εγκατάσταση</strong>,{' '}
                <strong className="text-slate-800">τεχνική υποστήριξη</strong>, <strong className="text-slate-800">service</strong> και{' '}
                <strong className="text-slate-800">αναβαθμίσεις</strong> για ταμειακές μηχανές κάθε κατηγορίας.
                Η ομάδα μας βρίσκεται πάντα κοντά σας — είτε τηλεφωνικά, είτε εξ αποστάσεως, είτε με επίσκεψη
                επί τόπου στις εγκαταστάσεις σας — ώστε να εξασφαλίζεται η αδιάλειπτη λειτουργία της επιχείρησής σας.
              </p>
              <p>
                Συνεργαζόμαστε αποκλειστικά με δύο από τις πιο αξιόπιστες εταιρείες στον κλάδο:{' '}
                <Link to="/tameiakes/rbs" className="text-blue-600 font-semibold hover:underline">RBS</Link> και{' '}
                <Link to="/tameiakes/datatec" className="text-blue-600 font-semibold hover:underline">DataTec</Link>.
                Η επιλογή αυτών των δύο μαρκών δεν είναι τυχαία — και οι δύο συνδυάζουν υψηλή ποιότητα,
                πλήρη συμμόρφωση με την ελληνική φορολογική νομοθεσία και εξαιρετική αξιοπιστία στη μακροχρόνια χρήση.
                Ό,τι και να επιλέξετε, θα έχετε δίπλα σας μια ομάδα που γνωρίζει τα προϊόντα αυτά σε βάθος
                και εξασφαλίζει την αδιάλειπτη λειτουργία της επιχείρησής σας.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="mb-10">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Τι Προσφέρουμε</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Πλήρης κάλυψη σε κάθε στάδιο</h2>
              <p className="mt-2 text-slate-500 text-sm max-w-lg">
                Από την αρχική αγορά έως τη συντήρηση χρόνια αργότερα — είμαστε εδώ σε κάθε βήμα.
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
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                    <Icon size={16} className="text-blue-600" />
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
      <section id="partners" className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="mb-10">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Συνεργάτες μας</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">RBS & DataTec</h2>
              <p className="mt-2 text-slate-500 text-sm max-w-lg">
                Εξουσιοδοτημένοι συνεργάτες και των δύο μαρκών — επιλέξτε αυτή που ταιριάζει στην επιχείρησή σας.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((p) => (
              <FadeUp key={p.name}>
                <Link
                  to={p.href}
                  className="flex items-center justify-center bg-white border border-slate-200 rounded-2xl px-12 py-14 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-14 max-w-52 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
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
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Ποια ταμειακή σας ταιριάζει;</h2>
              <p className="mt-2 text-slate-500 text-sm">Απαντήστε σε 3 σύντομες ερωτήσεις και θα σας προτείνουμε την κατάλληλη λύση.</p>
            </div>
          </FadeUp>

          {/* Progress bar */}
          <div className="flex gap-1.5 mb-8">
            {quizSteps.map((_, i) => (
              <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-slate-200">
                <motion.div
                  className="h-full bg-blue-600 rounded-full"
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
                  <span className="text-blue-500 mr-2">{quizStep + 1}.</span>
                  {quizSteps[quizStep].question}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {quizSteps[quizStep].options.map(({ id, label, sublabel, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => handleAnswer(quizSteps[quizStep].id, id)}
                      className="flex items-center gap-4 p-4 bg-white border-2 border-slate-200 rounded-2xl text-left hover:border-blue-400 hover:bg-blue-50/40 transition-all duration-200 group"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors duration-200">
                        <Icon size={18} className="text-slate-500 group-hover:text-blue-600 transition-colors duration-200" />
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
                    <div className="rounded-2xl bg-blue-950 overflow-hidden">
                      <div className="px-7 pt-7 pb-5 flex flex-col sm:flex-row gap-5 items-start">
                        <div className="shrink-0 bg-white/10 rounded-xl px-5 py-4 flex items-center justify-center">
                          <img src={r.logo} alt={r.brand} className="h-10 w-auto object-contain brightness-0 invert" />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">Η πρότασή μας</span>
                          <h3 className="mt-1 text-lg font-extrabold text-white">{r.type}</h3>
                          <p className="mt-2 text-white/70 text-sm leading-relaxed">{r.description}</p>
                        </div>
                      </div>
                      <div className="px-7 pb-7 flex flex-wrap gap-3">
                        <Link
                          to={r.href}
                          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                        >
                          Δείτε τα προϊόντα {r.brand} <ArrowRight size={14} />
                        </Link>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                        >
                          Ζητήστε συμβουλή
                        </Link>
                        <button
                          onClick={resetQuiz}
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors ml-auto"
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
      <section className="py-16 px-4 bg-linear-to-br from-blue-100 to-blue-50">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="mb-10">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Συχνές Ερωτήσεις</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">Έχετε απορίες;</h2>
            </div>
          </FadeUp>
          <div className="divide-y divide-blue-100">
            {faqs.map((faq, i) => (
              <FadeUp key={i}>
                <button
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${openFaq === i ? 'text-blue-600' : 'text-slate-800 group-hover:text-blue-600'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-all duration-300 ${openFaq === i ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}
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
                      <p className="pb-5 text-sm text-slate-500 leading-relaxed">
                        {faq.a}
                      </p>
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
