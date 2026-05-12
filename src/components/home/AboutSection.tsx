import { Shield, Users, Award } from 'lucide-react'

const stats = [
  { icon: Award, value: '35+', label: 'Χρόνια Εμπειρίας' },
  { icon: Users, value: '1000+', label: 'Ικανοποιημένοι Πελάτες' },
  { icon: Shield, value: '100%', label: 'Εξουσιοδοτημένο Service' },
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              Ποιοι είμαστε
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Η εταιρεία που επενδύει στις{' '}
              <span className="text-blue-600">μακροχρόνιες σχέσεις</span>
            </h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Η εταιρεία <strong className="text-slate-800">Computer House (Βουρλίδας – Σεμέλογλου)</strong> από
                την ίδρυσή της επενδύει στις μακροχρόνιες και διαρκείς σχέσεις με
                τους πελάτες και τους προμηθευτές της, έχοντας ως θεμελιώδεις αρχές
                την αξιοπιστία, την υψηλή τεχνογνωσία και τον επαγγελματισμό.
              </p>
              <p>
                Η στόχευσή της είναι η διαρκής αναζήτηση καινοτόμων λύσεων και η
                αναβάθμιση των προϊόντων και υπηρεσιών της.
              </p>
            </div>
          </div>

          {/* Stats — vertical stack */}
          <div className="flex flex-col gap-5 max-w-sm">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="relative flex items-center gap-6 bg-linear-to-r from-blue-600 to-blue-500 rounded-3xl px-8 py-6 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden"
              >
                {/* Background icon watermark */}
                <Icon size={100} className="absolute -right-4 top-1/2 -translate-y-1/2 text-white/10 pointer-events-none" />
                {/* Text */}
                <div>
                  <p className="text-4xl font-black text-white leading-none tracking-tight">{value}</p>
                  <p className="text-blue-100 text-sm font-medium mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
