import { Shield, Users, Award } from 'lucide-react'

const stats = [
  { icon: Award, value: '30+', label: 'Χρόνια Εμπειρίας' },
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
          <div className="flex flex-col gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-5 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 hover:border-blue-600 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-blue-600 group-hover:bg-blue-700 flex items-center justify-center transition-colors">
                  <Icon size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-slate-900 leading-none">{value}</p>
                  <p className="text-sm text-slate-500 mt-1 font-medium">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
