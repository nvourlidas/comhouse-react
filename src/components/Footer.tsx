import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import comhouseLogo from '../assets/COMPUTERHOUSE-transparent.png'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src={comhouseLogo} alt="Computer House" className="h-16 w-auto scale-[1.4] origin-left brightness-0 invert" />
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
            <span className="flex items-center gap-1.5">
              <Phone size={13} />
              23210{' '}
              <a href="tel:+302321098466" className="hover:text-cyan-400 transition-colors">98466</a>
              <span className="text-slate-600">/</span>
              <a href="tel:+302321058466" className="hover:text-cyan-400 transition-colors">58466</a>
            </span>
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
            <a
              href="https://linkedin.com/company/computer-house-vourlidas-semeloglou"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-sky-600 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-1 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Computer House Βουρλίδας-Σεμέλογλου. Όλα τα δικαιώματα κατοχυρωμένα.</p>
          <p>Powered by ComHouse.gr</p>
        </div>
      </div>
    </footer>
  )
}
