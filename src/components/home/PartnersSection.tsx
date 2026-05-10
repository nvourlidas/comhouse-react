import { useState } from 'react'
import entersoftone from '../../assets/ENTERSOFTONE_logo.png'
import rbs from '../../assets/LOGO-RBS-TRANSP-scaled-2048x742.png'
import datatec from '../../assets/logo-removebg-preview.png'
import lexmark from '../../assets/lexmark-logo.png'
import prosvasis from '../../assets/prosvasis-go-logo.webp'
import dell from '../../assets/dell-logo.png'

const partners = [
  { name: 'Entersoft One', src: entersoftone, role: 'Λογισμικό ERP'            },
  { name: 'RBS',           src: rbs,          role: 'Ταμειακές Μηχανές'        },
  { name: 'DataTec',       src: datatec,      role: 'Φορολογικοί Μηχανισμοί'  },
  { name: 'Lexmark',       src: lexmark,      role: 'Εκτυπωτές & MFP'          },
  { name: 'Prosvasis',     src: prosvasis,    role: 'Λογισμικό Λιανικής'       },
  { name: 'Dell',          src: dell,         role: 'Hardware & Servers'        },
]

export default function PartnersSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-20 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em]">
            Συνεργασίες
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Επίσημοι Συνεργάτες
          </h2>
        </div>

        {/* Logo row */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-10 items-center">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className="flex items-center justify-center h-12 cursor-pointer"
              style={{
                opacity: hovered === null ? 1 : hovered === i ? 1 : 0.15,
                transform: hovered === i ? 'scale(1.12)' : 'scale(1)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={p.src}
                alt={p.name}
                className="w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Info strip */}
        <div
          className="mt-10 flex items-center justify-center gap-2 transition-opacity duration-200"
          style={{ opacity: hovered !== null ? 1 : 0 }}
        >
          <span className="text-slate-800 font-bold text-sm">
            {hovered !== null ? partners[hovered].name : ''}
          </span>
          <span className="text-slate-300 text-sm">·</span>
          <span className="text-slate-500 text-sm">
            {hovered !== null ? partners[hovered].role : ''}
          </span>
        </div>

      </div>
    </section>
  )
}
