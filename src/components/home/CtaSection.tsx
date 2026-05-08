import { Link } from 'react-router-dom'
import { Phone, Mail, ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Χρειάζεστε τεχνική υποστήριξη;
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Επικοινωνήστε μαζί μας σήμερα. Η ομάδα μας είναι έτοιμη να σας βοηθήσει.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+302321098466"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:bg-cyan-50 transition-all"
          >
            <Phone size={18} />
            23210 98466
          </a>
          <a
            href="mailto:comhouse@otenet.gr"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-all"
          >
            <Mail size={18} />
            comhouse@otenet.gr
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-cyan-400 text-blue-900 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:bg-cyan-300 transition-all"
          >
            Φόρμα Επικοινωνίας <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
