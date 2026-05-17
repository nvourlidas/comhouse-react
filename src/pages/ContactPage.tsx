import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '7a40fc59-c17f-4b8e-929c-07548b4683ad',
          name: `${formData.name} ${formData.surname}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError('Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.')
      }
    } catch {
      setError('Αδυναμία σύνδεσης. Παρακαλώ δοκιμάστε ξανά.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-blue-50">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 pt-32 pb-28">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,179,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow blobs */}
        <div className="absolute -top-20 left-1/3 w-125 h-125 bg-blue-600/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Ας μιλήσουμε{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              μαζί
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Είμαστε εδώ για να σε βοηθήσουμε. Συμπλήρωσε τη φόρμα ή επικοινώνησε μαζί μας απευθείας.
          </p>
        </div>

        {/* Wave transition to blue-50 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 48 L0 24 Q360 0 720 24 Q1080 48 1440 24 L1440 48 Z" fill="#eff6ff" />
          </svg>
        </div>
      </div>


      {/* ── Contact Info ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-blue-900 rounded-2xl shadow-lg shadow-blue-900/30 overflow-hidden flex flex-col md:flex-row">

          {/* Left: contact details */}
          <div className="flex-1 p-8 md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-7">Στοιχεία Επικοινωνίας</p>
            <div className="flex flex-col gap-6">

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-4.5 h-4.5 text-blue-400" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-0.5">Τηλέφωνο</p>
                  <p className="text-white font-semibold whitespace-nowrap">
                    23210{' '}
                    <a href="tel:+302321098466" className="hover:text-blue-400 transition-colors">98466</a>
                    <span className="text-slate-600 mx-1.5">/</span>
                    <a href="tel:+302321058466" className="hover:text-blue-400 transition-colors">58466</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <a href="mailto:comhouse@otenet.gr" className="group flex items-center gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="w-4.5 h-4.5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">comhouse@otenet.gr</p>
                </div>
              </a>

              {/* Address */}
              <a
                href="https://maps.google.com/?q=Εθνικής+Αντίστασης+40,+Σέρρες"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-4.5 h-4.5 text-violet-400" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-0.5">Διεύθυνση</p>
                  <p className="text-white font-semibold group-hover:text-violet-400 transition-colors">
                    Εθνικής Αντίστασης 40<span className="font-normal text-slate-500">, Σέρρες</span>
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/5 my-8" />
          <div className="md:hidden h-px bg-white/5 mx-8" />

          {/* Right: social media */}
          <div className="md:w-72 p-8 md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-7">Social Media</p>
            <div className="flex flex-col gap-4">

              {/* Instagram */}
              <a href="#" className="group flex items-center gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-pink-500 to-orange-400 flex items-center justify-center">
                  <svg className="w-4.5 h-4.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-0.5">Instagram</p>
                  <p className="text-white font-semibold group-hover:text-pink-400 transition-colors">@comhouse</p>
                </div>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/ComputerHouseSerres" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-blue-600 to-blue-500 flex items-center justify-center">
                  <svg className="w-4.5 h-4.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-0.5">Facebook</p>
                  <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">Computer House</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/company/computer-house-vourlidas-semeloglou" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-sky-600 to-blue-700 flex items-center justify-center">
                  <svg className="w-4.5 h-4.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-0.5">LinkedIn</p>
                  <p className="text-white font-semibold group-hover:text-sky-400 transition-colors">Computer House</p>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* ── Map ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-lg shadow-blue-100/40">
          <div className="flex items-center gap-3 px-5 py-3 bg-white border-b border-slate-100">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-slate-600 text-sm font-medium">Βρείτε μας στον χάρτη</span>
            <span className="ml-auto text-slate-400 text-xs">Εθνικής Αντίστασης 40, Σέρρες</span>
          </div>
          <div
            className="relative w-full h-80 md:h-96"
            onMouseEnter={() => { document.body.style.overflow = 'hidden' }}
            onMouseLeave={() => { document.body.style.overflow = '' }}
          >
            <iframe
              title="Computer House map"
              src="https://maps.google.com/maps?q=Εθνικής+Αντίστασης+40,+Σέρρες,+Greece&output=embed&z=16"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* ── Contact Form ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-7">Φόρμα Επικοινωνίας</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-500 text-xs font-semibold uppercase tracking-widest">Όνομα</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="π.χ. Γιώργης"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-500 text-xs font-semibold uppercase tracking-widest">Επώνυμο</label>
                    <input
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                      placeholder="π.χ. Παπαδόπουλος"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-500 text-xs font-semibold uppercase tracking-widest">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@email.com"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-500 text-xs font-semibold uppercase tracking-widest">Τηλέφωνο</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="π.χ. 6912345678"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-500 text-xs font-semibold uppercase tracking-widest">Μήνυμα</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Γράψτε το μήνυμά σας..."
                    className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 resize-none"
                  />
                </div>

                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative self-end flex items-center gap-0 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-blue-400/50 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="pl-6 pr-4 py-3 text-sm">
                    {loading ? 'Αποστολή...' : 'Αποστολή'}
                  </span>
                  <span className="flex items-center justify-center w-10 h-10 m-1 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-200">
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </span>
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-slate-900 text-lg font-bold mb-1">Μήνυμα Εστάλη!</h3>
                <p className="text-slate-500 text-sm max-w-xs">
                  Ευχαριστούμε για το μήνυμά σας. Θα επικοινωνήσουμε μαζί σας σύντομα.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setError(null)
                    setFormData({ name: '', surname: '', email: '', phone: '', message: '' })
                  }}
                  className="mt-5 text-blue-600 text-sm font-medium hover:text-blue-500 transition-colors"
                >
                  Αποστολή νέου μηνύματος →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
