const partners = [
  { name: 'Unisoft', color: '#003082' },
  { name: 'RBS', color: '#0077b6' },
  { name: 'Dell', color: '#007db8' },
  { name: 'Sharp', color: '#e63946' },
  { name: 'OKI', color: '#003087' },
  { name: 'Lexmark', color: '#000000' },
  { name: 'Softone', color: '#f77f00' },
  { name: 'Datatec', color: '#2d6a4f' },
]

export default function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">
            Εμπιστεύονται την ComHouse
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Επίσημοι Συνεργάτες
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg mx-auto">
            Συνεργαζόμαστε με τις κορυφαίες εταιρείες τεχνολογίας για να σας παρέχουμε τις καλύτερες λύσεις.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-20 bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl hover:shadow-md transition-all cursor-default group"
            >
              <span
                className="text-xl font-extrabold tracking-tight transition-colors"
                style={{ color: partner.color }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
