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
  const [mapActive, setMapActive] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
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
            Ας{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              μιλήσουμε
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Είμαστε εδώ για να σε βοηθήσουμε. Συμπλήρωσε τη φόρμα ή
            επικοινώνησε μαζί μας απευθείας.
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
        <h2 className="text-xl font-bold text-slate-800 mb-8 tracking-tight">
          Στοιχεία Επικοινωνίας
        </h2>

        <div className="flex flex-col md:flex-row md:items-start">
          {/* Phone */}
          <a
            href="tel:+302321098466"
            className="group flex items-start gap-4 flex-1 py-1 hover:opacity-75 transition-opacity"
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md shadow-blue-200 mt-0.5">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-0.5">Τηλέφωνο</p>
              <p className="text-slate-900 font-semibold text-lg">23210 98466</p>
            </div>
          </a>

          <div className="hidden md:block w-px self-stretch bg-slate-100 mx-8" />
          <div className="md:hidden h-px bg-slate-100 my-5" />

          {/* Email */}
          <a
            href="mailto:comhouse@otenet.gr"
            className="group flex items-start gap-4 flex-1 py-1 hover:opacity-75 transition-opacity"
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-linear-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-md shadow-cyan-200 mt-0.5">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-0.5">Email</p>
              <p className="text-slate-900 font-semibold">comhouse@otenet.gr</p>
            </div>
          </a>

          <div className="hidden md:block w-px self-stretch bg-slate-100 mx-8" />
          <div className="md:hidden h-px bg-slate-100 my-5" />

          {/* Address */}
          <a
            href="https://maps.google.com/?q=Εθνικής+Αντίστασης+40,+Σέρρες"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 flex-1 py-1 hover:opacity-75 transition-opacity"
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-linear-to-br from-violet-400 to-violet-600 flex items-center justify-center shadow-md shadow-violet-200 mt-0.5">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-0.5">Διεύθυνση</p>
              <p className="text-slate-900 font-semibold">Εθνικής Αντίστασης 40</p>
              <p className="text-slate-500 text-sm">Σέρρες</p>
            </div>
          </a>
        </div>
      </div>

      {/* ── Map ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-lg shadow-blue-100/40">
          {/* Map header bar */}
          <div className="flex items-center gap-3 px-5 py-3 bg-white border-b border-slate-100">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-slate-600 text-sm font-medium">Βρείτε μας στον χάρτη</span>
            <span className="ml-auto text-slate-400 text-xs">Εθνικής Αντίστασης 40, Σέρρες</span>
          </div>
          <div
            className="relative w-full h-80 md:h-96"
            onMouseLeave={() => setMapActive(false)}
          >
            <iframe
              title="ComHouse map"
              src="https://maps.google.com/maps?q=Εθνικής+Αντίστασης+40,+Σέρρες,+Greece&output=embed&z=16"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {!mapActive && (
              <div
                className="absolute inset-0 cursor-pointer flex items-end justify-center pb-5"
                onClick={() => setMapActive(true)}
              >
                <span className="bg-white/90 backdrop-blur-sm text-slate-500 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm border border-slate-200">
                  Κάντε κλικ για πλοήγηση στον χάρτη
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Contact Form ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">Φόρμα Επικοινωνίας</h2>
          <p className="text-slate-500 text-sm mt-1">
            Συμπληρώστε τα πεδία και θα επικοινωνήσουμε μαζί σας σύντομα.
          </p>
        </div>

        {/* Gradient-border card */}
        <div className="p-px rounded-2xl bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 shadow-lg shadow-blue-100/50">
          <div className="bg-white rounded-2xl p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
                      Όνομα
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="π.χ. Γιώργης"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/15 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
                      Επώνυμο
                    </label>
                    <input
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                      placeholder="π.χ. Παπαδόπουλος"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/15 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@email.com"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/15 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
                      Τηλέφωνο
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="π.χ. 6912345678"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/15 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
                    Μήνυμα
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Γράψτε το μήνυμά σας..."
                    className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/15 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group self-end flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-7 py-3 transition-colors duration-200 shadow-md shadow-blue-300/40"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Αποστολή
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
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
                    setFormData({ name: '', surname: '', email: '', phone: '', message: '' })
                  }}
                  className="mt-5 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
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

