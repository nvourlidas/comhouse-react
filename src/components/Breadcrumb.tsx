import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1 text-xs text-white/40 mb-6 flex-wrap">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronRight size={11} className="shrink-0" />}
          {item.href ? (
            <Link to={item.href} className="hover:text-white/70 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white/80 font-semibold">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
