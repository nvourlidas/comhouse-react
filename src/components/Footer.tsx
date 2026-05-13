import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import comhouseLogo from '../assets/Comhouse-logo-transparent.png'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src={comhouseLogo} alt="ComHouse" className="h-16 w-auto brightness-0 invert" />
            </Link>
            <span className="hidden md:block text-slate-600">|</span>
            <p className="hidden md:block text-xs text-slate-400">
              Βουρλίδας – Σεμέλογλου. Αξιόπιστες λύσεις τεχνολογίας από το 1990.
            </p>
          </div>

          {/* Contact inline */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
            <a href="mailto:comhouse@otenet.gr" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
              <Mail size={13} />
              comhouse@otenet.gr
            </a>
            <a href="tel:+302321098466" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
              <Phone size={13} />
              23210 98466
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
              <MapPin size={13} />
              Εθνικής Αντίστασης 40, Σέρρες
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-1 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} ComHouse Βουρλίδας-Σεμέλογλου. Όλα τα δικαιώματα κατοχυρωμένα.</p>
          <p>Powered by ComHouse.gr</p>
        </div>
      </div>
    </footer>
  )
}
