import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronLeft, CheckCircle2,
  RefreshCw, Monitor, Smartphone, Phone, FileCheck, Car, CreditCard, BarChart3,
  Receipt, QrCode, Shield, Search, Mail, TrendingUp, Zap, Star,
} from 'lucide-react'
import { FadeUp } from '../components/ScrollReveal'
import SEO from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'

import ecrConnectLogo from '../assets/ECR-CON-2-1-1024x111.png'
import pepperImage from '../assets/Pepper-all-in-one-full-body-kit.png'
import elioTouchImage from '../assets/ELIO-TOUCH-BK.png'

const ecrFeatures = [
  { icon: RefreshCw,   title: 'Δωρεάν Ενημερώσεις',               desc: 'Αυτόματες αναβαθμίσεις λογισμικού — νομοθετικές, βελτιωτικές και διόρθωση σφαλμάτων.' },
  { icon: Monitor,     title: 'Απομακρυσμένη Υποστήριξη',          desc: 'Ο τεχνικός συνδέεται εξ αποστάσεως για ρύθμιση και αντιμετώπιση προβλημάτων χωρίς επίσκεψη.' },
  { icon: Smartphone,  title: 'Mobile App Android',                  desc: 'Παρακολουθήστε πωλήσεις και ΦΠΑ σε πραγματικό χρόνο από το smartphone σας.' },
  { icon: Phone,       title: 'Τηλεφωνική Υποστήριξη',              desc: 'Άμεση βοήθεια κατά τις εργάσιμες ώρες για κάθε απορία ή πρόβλημα λειτουργίας.' },
  { icon: FileCheck,   title: 'Υποβολή myDATA',                     desc: 'Αυτόματη ενημέρωση της ΑΑΔΕ — απευθείας ή μέσω λογιστή για κάθε είδος επιχείρησης.' },
  { icon: Car,         title: 'Ψηφιακό Πελατολόγιο Οχημάτων',      desc: 'Δωρεάν για Συνεργεία, Πλυντήρια & Εταιρείες Ενοικίασης — πλήρης συμμόρφωση ΑΑΔΕ.' },
  { icon: CreditCard,  title: 'Soft POS για Εστίαση',               desc: 'Αποδοχή πληρωμών μετρητών & κάρτας μέσω Android — χωρίς υποχρεωτικό POS.' },
  { icon: BarChart3,   title: 'Αναφορές & Στατιστικά',              desc: 'Αναφορές πωλήσεων, ΦΠΑ και δραστηριότητας απευθείας από την εφαρμογή ECR Connect.' },
]

const pepperFeatures = [
  { icon: Receipt,     title: 'Χονδρική Τιμολόγηση',               desc: 'Έκδοση τιμολογίων, πιστωτικών σημειωμάτων και ψηφιακών δελτίων αποστολής.' },
  { icon: QrCode,      title: 'Επιβεβαίωση μέσω QR',               desc: 'Αυτόματη ψηφιακή επιβεβαίωση λιανικών αποδείξεων με σάρωση QR code.' },
  { icon: Shield,      title: 'Πιστοποιημένος Πάροχος',            desc: 'Φορολογική συμμόρφωση μέσω RAPIDSIGN — πλήρως αδειοδοτημένος από ΑΑΔΕ.' },
  { icon: Search,      title: 'Αναζήτηση με ΑΦΜ',                  desc: 'Ανεύρεση πελάτη μόνο με ΑΦΜ — χωρίς χειροκίνητη εισαγωγή στοιχείων.' },
  { icon: Zap,         title: 'Απεριόριστα Παραστατικά',            desc: 'Χωρίς όριο σε είδη, πελάτες και παραστατικά εγγραφής.' },
  { icon: Mail,        title: 'Αποστολή μέσω Email',                desc: 'Άμεση αποστολή τιμολογίων στον πελάτη απευθείας από την εφαρμογή.' },
  { icon: Monitor,     title: 'Android & Windows',                   desc: 'Εγκαθίσταται σε smartphone, tablet ή σταθερό PC — ευελιξία σε κάθε επιχείρηση.' },
  { icon: TrendingUp,  title: 'Αναφορές Πελατών & Πωλήσεων',       desc: 'Πλήρης εικόνα πωλήσεων, πελατολογίου και εκδοθέντων παραστατικών.' },
]

export default function EcrConnectPage() {
  return (
    <div className="pt-20 lg:pt-28 bg-white min-h-screen">
      <SEO
        title="ECR Connect & Pepper Invoicing | ComHouse"
        description="Συνδρομή ECR Connect για ταμειακές RBS με δωρεάν μετάβαση στο Pepper Invoicing. Ηλεκτρονική τιμολόγηση, απομακρυσμένη υποστήριξη και myDATA."
        canonical="https://www.comhouse.gr/tameiakes/rbs/ecr-connect-pepper-invoicing"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "ECR Connect & Pepper Invoicing",
          "provider": { "@type": "LocalBusiness", "name": "ComHouse", "url": "https://www.comhouse.gr" },
          "description": "Συνδρομή ECR Connect για ταμειακές RBS. Δωρεάν μετάβαση στο Pepper Invoicing για ηλεκτρονική τιμολόγηση.",
          "areaServed": "GR",
        }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#060f1e] px-4 pt-10 pb-32">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <Breadcrumb items={[
            { label: 'Αρχική', href: '/' },
            { label: 'Ταμειακές', href: '/tameiakes-mixanes-serres' },
            { label: 'RBS', href: '/tameiakes/rbs' },
            { label: 'ECR Connect & Pepper Invoicing' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-8">
            <div>
              <img
                src={ecrConnectLogo}
                alt="ECR Connect"
                className="h-8 sm:h-10 object-contain mb-6"
                style={{ filter: 'brightness(0) invert(1)' }}
              />

              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 rounded-full px-4 py-1.5 mb-5">
                <Star size={11} className="text-yellow-400 fill-yellow-400" />
                <span className="text-blue-300 text-xs font-semibold tracking-wide">Επίσημος Αντιπρόσωπος RBS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white leading-tight mb-5">
                ECR Connect &amp;{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                  Pepper Invoicing
                </span>
              </h1>

              <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-lg">
                Η πλήρης λύση για τη σύγχρονη επιχείρηση. Διαχειριστείτε την ταμειακή σας
                εξ αποστάσεως και εκδίδετε ηλεκτρονικά τιμολόγια — όλα από μία οικονομική
                συνδρομή.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-lg shadow-blue-500/25"
                >
                  Ενδιαφέρομαι <ArrowRight size={15} />
                </Link>
                <Link
                  to="/tameiakes/rbs"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  <ChevronLeft size={14} />
                  Πίσω στις RBS
                </Link>
              </div>
            </div>

            {/* Right: product visual */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-transparent to-cyan-600/5 rounded-3xl" />
              <div className="relative p-8 flex items-end justify-center gap-6">
                <img
                  src={elioTouchImage}
                  alt="ELIO Touch"
                  className="h-56 object-contain drop-shadow-2xl"
                />
                <img
                  src={pepperImage}
                  alt="Pepper All-in-One"
                  className="h-64 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Two Products Bridge ── */}
      <section className="py-20 px-4">
        <FadeUp>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Μία Συνδρομή, Δύο Λύσεις</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Ό,τι χρειάζεστε σε ένα πακέτο
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {/* ECR Connect */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="bg-linear-to-br from-blue-800 to-blue-950 p-6">
                  <img
                    src={ecrConnectLogo}
                    alt="ECR Connect"
                    className="h-7 object-contain mb-4"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                  <h3 className="text-white font-extrabold text-xl">ECR Connect</h3>
                  <p className="text-blue-300 text-sm mt-1">Διαχείριση ταμειακής &amp; υποστήριξη</p>
                </div>
                <div className="bg-white p-6 space-y-3">
                  {[
                    'Δωρεάν νομοθετικές ενημερώσεις',
                    'Απομακρυσμένη τεχνική υποστήριξη',
                    'Mobile app παρακολούθησης πωλήσεων',
                    'Αυτόματη υποβολή myDATA',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={11} className="text-blue-600" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Plus badge */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex w-10 h-10 rounded-full bg-slate-900 items-center justify-center shadow-xl ring-4 ring-white">
                <span className="text-white font-black text-base leading-none">+</span>
              </div>

              {/* Pepper Invoicing */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="bg-linear-to-br from-emerald-700 to-teal-900 p-6">
                  <p className="text-white font-black text-xl tracking-tight mb-4">Pepper Invoicing</p>
                  <h3 className="text-white font-extrabold text-xl">Ηλεκτρονική Τιμολόγηση</h3>
                  <p className="text-emerald-200 text-sm mt-1">Πλήρης λύση χονδρικής τιμολόγησης</p>
                </div>
                <div className="bg-white p-6 space-y-3">
                  {[
                    'Έκδοση τιμολογίων & δελτίων αποστολής',
                    'Πιστοποίηση RAPIDSIGN / ΑΑΔΕ',
                    'Android & Windows εφαρμογή',
                    'Απεριόριστα παραστατικά & πελάτες',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={11} className="text-emerald-600" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Offer Details ── */}
      <section className="py-16 px-4 bg-slate-50">
        <FadeUp>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-300 rounded-full px-4 py-1.5 mb-4">
                <Star size={12} className="text-yellow-600 fill-yellow-500" />
                <span className="text-yellow-800 text-xs font-bold tracking-wide">Προσφορά Ιουλίου 2026</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                Δωρεάν Pepper Invoicing
              </h2>
              <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
                Από 1 Ιουλίου 2026, κάθε συνδρομητής ECR Connect αποκτά πρόσβαση στο
                Pepper Invoicing χωρίς επιπλέον κόστος.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white border-2 border-blue-100 p-7 hover:border-blue-300 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-1">Νέοι Συνδρομητές</p>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">1ος Χρόνος Δωρεάν</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Με την αγορά νέας συνδρομής ECR Connect ενεργοποιείται αυτόματα το Pepper
                  Invoicing δωρεάν για ολόκληρο τον πρώτο χρόνο.
                </p>
              </div>

              <div className="rounded-2xl bg-white border-2 border-emerald-100 p-7 hover:border-emerald-300 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-1">Υπάρχοντες Συνδρομητές</p>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">Δωρεάν Μετάβαση</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ενεργοποίηση Pepper Invoicing δωρεάν έως το τέλος της τρέχουσας συνδρομής
                  συν ένα επιπλέον έτος στην ίδια τιμή.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── ECR Connect Features ── */}
      <section className="py-20 px-4 bg-white">
        <FadeUp>
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Συνδρομή ECR Connect</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                Τι περιλαμβάνει η συνδρομή
              </h2>
              <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
                Μια ολοκληρωμένη υπηρεσία που κρατά την ταμειακή σας πάντα ενημερωμένη,
                υποστηριγμένη και συμμορφωμένη.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ecrFeatures.map((f) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.title}
                    className="flex flex-col p-5 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors duration-200 shrink-0">
                      <Icon
                        size={17}
                        className="text-blue-600 group-hover:text-white transition-colors duration-200"
                      />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1.5 text-sm leading-snug group-hover:text-blue-700 transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed flex-1">{f.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Pepper Invoicing Features ── */}
      <section className="py-20 px-4 bg-slate-50">
        <FadeUp>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Image side */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div className="absolute inset-0 bg-linear-to-br from-emerald-50 to-teal-50/60 rounded-3xl" />
                <div className="relative p-10 flex flex-col items-center justify-center gap-6">
                  <img
                    src={elioTouchImage}
                    alt="ELIO Touch"
                    className="h-44 object-contain drop-shadow-lg"
                  />
                  <img
                    src={pepperImage}
                    alt="Pepper Invoicing"
                    className="h-44 object-contain drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Text side */}
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-2">Pepper Invoicing</p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  Ηλεκτρονική Τιμολόγηση
                </h2>
                <p className="text-emerald-600 font-bold text-lg mb-4">χωρίς πολυπλοκότητα</p>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  Πλήρης λύση ηλεκτρονικής τιμολόγησης χονδρικής για τη νέα φορολογική νομοθεσία —
                  χωρίς υποχρεωτική αλλαγή εξοπλισμού.
                </p>

                <div className="space-y-1">
                  {pepperFeatures.map((f) => {
                    const Icon = f.icon
                    return (
                      <div
                        key={f.title}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white transition-colors group cursor-default"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors mt-0.5">
                          <Icon size={14} className="text-emerald-700" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm mb-0.5">{f.title}</p>
                          <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Keep your equipment ── */}
      <section className="py-16 px-4 bg-slate-900">
        <FadeUp>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Χωρίς Αναβάθμιση Εξοπλισμού
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Συνεχίστε με τον εξοπλισμό που έχετε
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Το ECR Connect και το Pepper Invoicing λειτουργούν πάνω από την υπάρχουσα
                  ταμειακή μηχανή — χωρίς υποχρεωτική αγορά νέου POS ή εξάρτηση από σύνδεση
                  internet για κάθε συναλλαγή.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  'Χωρίς υποχρεωτικό νέο POS',
                  'Λειτουργεί με υπάρχον τερματικό κάρτας',
                  'Χωρίς internet για κάθε συναλλαγή',
                  'Πλήρης φορολογική συμμόρφωση',
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3.5 border border-white/5"
                  >
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span className="text-sm text-slate-200">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 bg-linear-to-br from-blue-700 via-blue-800 to-blue-950">
        <FadeUp>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-blue-300 text-xs font-black uppercase tracking-widest mb-3">Επόμενο Βήμα</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Ενεργοποιήστε το ECR Connect σήμερα
            </h2>
            <p className="text-blue-200 text-sm mb-10 leading-relaxed">
              Επικοινωνήστε μαζί μας και ο τεχνικός μας θα σας εξηγήσει τα πάντα
              για τη συνδρομή και τη μετάβαση στο Pepper Invoicing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-800 font-bold px-8 py-3.5 text-sm rounded-xl shadow-lg transition-colors"
              >
                Επικοινωνία <ArrowRight size={14} />
              </Link>
              <Link
                to="/tameiakes/rbs"
                className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm font-medium transition-colors"
              >
                <ChevronLeft size={14} />
                Δείτε τις Ταμειακές RBS
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  )
}
