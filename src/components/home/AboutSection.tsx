import { Shield, Zap, Users, Award } from 'lucide-react'

const stats = [
  { icon: Award, value: '30+', label: 'Χρόνια Εμπειρίας' },
  { icon: Users, value: '1000+', label: 'Ικανοποιημένοι Πελάτες' },
  { icon: Shield, value: '100%', label: 'Εξουσιοδοτημένο Service' },
  { icon: Zap, value: '24h', label: 'Γρήγορη Εξυπηρέτηση' },
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">
              Ποιοι είμαστε
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Η εταιρεία που επενδύει στις{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">
                μακροχρόνιες σχέσεις
              </span>
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
              <p>
                Διαθέτει εξειδικευμένο προσωπικό για τη σχεδίαση των βέλτιστων
                λύσεων σε συνεργασία με εσάς (pre-sales support) και τεχνικό τμήμα
                για την κάλυψη τεχνικών θεμάτων.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-gradient-to-br from-slate-50 to-cyan-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-cyan-200 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-3 shadow-md">
                  <Icon size={22} className="text-white" />
                </div>
                <p className="text-3xl font-extrabold text-slate-900">{value}</p>
                <p className="text-sm text-slate-500 mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
