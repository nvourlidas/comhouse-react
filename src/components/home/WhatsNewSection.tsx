import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { FadeUp } from '../ScrollReveal'

import elioTouch from '../../assets/ELIO-TOUCH-BK.png'
import ecrConnectLogo from '../../assets/ECR-CON-2-1-1024x111.png'

const items = [
  {
    badge: 'Νέο Προϊόν',
    badgeColor: 'bg-blue-600',
    href: '/tameiakes/rbs#elio-touch-cr',
    bgColor: 'bg-blue-950',
    image: elioTouch,
    imageAlt: 'ELIO TOUCH CR',
    imageFit: 'object-contain',
    title: 'ELIO TOUCH CR',
    subtitle: 'Smart Touch Screen 7"',
    desc: 'Η νέα γενιά αυτόνομου ταμειακού συστήματος — εργονομική οθόνη αφής 7", έγχρωμη οθόνη πελάτη 4" και διαχείριση έως 30.000 ειδών.',
    cta: 'Δείτε το προϊόν',
    accentText: 'text-blue-400',
    accentLine: 'bg-blue-500',
  },
  {
    badge: 'Νέα Υπηρεσία',
    badgeColor: 'bg-emerald-600',
    href: '/tameiakes/rbs/ecr-connect-pepper-invoicing',
    bgColor: 'bg-slate-900',
    image: ecrConnectLogo,
    imageAlt: 'ECR Connect',
    imageFit: 'object-contain brightness-200',
    title: 'ECR Connect & Pepper Invoicing',
    subtitle: 'Δωρεάν μετάβαση',
    desc: 'Οι συνδρομητές ECR Connect αποκτούν δωρεάν πρόσβαση στο Pepper Invoicing — πλήρης ηλεκτρονική τιμολόγηση χωρίς επιπλέον κόστος.',
    cta: 'Μάθετε περισσότερα',
    accentText: 'text-emerald-400',
    accentLine: 'bg-emerald-500',
  },
]

export default function WhatsNewSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles size={16} className="text-blue-500" />
            <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em]">
              Τελευταίες Εξελίξεις
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Τι νέο υπάρχει
          </h2>
        </FadeUp>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.12}>
              <Link
                to={item.href}
                className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white h-full"
              >
                {/* Image area */}
                <div className={`relative ${item.bgColor} flex items-center justify-center h-52 overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className={`h-36 w-auto max-w-[80%] ${item.imageFit} transition-transform duration-500 group-hover:scale-105`}
                  />
                  {/* Badge */}
                  <span className={`absolute top-4 left-4 ${item.badgeColor} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full`}>
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className={`w-8 h-0.5 ${item.accentLine} mb-4 group-hover:w-14 transition-all duration-300`} />
                  <p className={`text-xs font-bold uppercase tracking-widest ${item.accentText} mb-1`}>
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl font-extrabold text-slate-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-blue-500 text-sm font-semibold group-hover:gap-3 transition-all duration-200 mt-auto">
                    {item.cta} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
