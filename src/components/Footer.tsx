import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Monitor } from 'lucide-react'

const quickLinks = [
  { label: 'Laptop', href: '/computers/laptop' },
  { label: 'Desktop', href: '/computers/desktop' },
  { label: 'Prosvasis Go', href: '/mixanografisi/prosvasis' },
  { label: 'PBS ONE', href: '/mixanografisi/pbs' },
  { label: 'Unisoft', href: '/mixanografisi/unisoft' },
  { label: 'Softone', href: '/mixanografisi/softone' },
  { label: 'Datatec', href: '/datatec' },
  { label: 'RBS', href: '/rbs' },
  { label: 'Refurbished', href: '/computers/refurbished' },
  { label: 'Servers', href: '/computers/servers' },
  { label: 'Χαρτοταινίες', href: '/tameiakes/xartotainies' },
  { label: 'OKI', href: '/printers/oki' },
  { label: 'Lexmark', href: '/printers/lexmark' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Monitor size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Com<span className="text-cyan-400">House</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Βουρλίδας – Σεμέλογλου. Αξιόπιστες λύσεις τεχνολογίας από το 1990.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Επικοινωνία
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:comhouse@otenet.gr"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail size={15} className="flex-shrink-0" />
                  comhouse@otenet.gr
                </a>
              </li>
              <li>
                <a
                  href="tel:+302321098466"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Phone size={15} className="flex-shrink-0" />
                  23210 98466
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2.5 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <MapPin size={15} className="flex-shrink-0 mt-0.5" />
                  <span>Εθνικής Αντίστασης 40,<br />Σέρρες</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Γρήγοροι Σύνδεσμοι
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Υπηρεσίες
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                'Επισκευή Ταμειακών',
                'Service Υπολογιστών',
                'Λύσεις Μηχανογράφησης',
                'Εγκατάσταση & Παραμετροποίηση',
                'Τεχνική Υποστήριξη',
                'Εκπαίδευση Στελεχών',
              ].map((s) => (
                <li key={s}>
                  <span className="text-slate-400">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ComHouse Βουρλίδας-Σεμέλογλου. Όλα τα δικαιώματα κατοχυρωμένα.</p>
          <p>Powered by ComHouse.gr</p>
        </div>
      </div>
    </footer>
  )
}
