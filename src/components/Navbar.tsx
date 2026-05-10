import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Monitor } from 'lucide-react'

const navItems = [
  { label: 'Αρχική', href: '/' },
  {
    label: 'Ταμειακές',
    href: '/tameiakes',
    children: [
      { label: 'RBS', href: '/tameiakes/rbs' },
      { label: 'DataTec', href: '/tameiakes/datatec' },
      { label: 'Χαρτοταινίες', href: '/tameiakes/xartotainies' },
    ],
  },
  {
    label: 'Λύσεις Μηχανογράφησης',
    href: '/mixanografisi',
    children: [
      { label: 'Prosvasis Go', href: '/mixanografisi/prosvasis' },
      { label: 'PBS ONE', href: '/mixanografisi/pbs' },
      { label: 'Unisoft', href: '/mixanografisi/unisoft' },
      { label: 'Softone', href: '/mixanografisi/softone' },
    ],
  },
  {
    label: 'Υπολογιστές',
    href: '/computers',
    children: [
      { label: 'Laptop', href: '/computers/laptop' },
      { label: 'Desktop', href: '/computers/desktop' },
      { label: 'Servers', href: '/computers/servers' },
      { label: 'Refurbished', href: '/computers/refurbished' },
    ],
  },
  {
    label: 'Εκτυπωτές',
    href: '/printers',
    children: [
      { label: 'OKI', href: '/printers/oki' },
      { label: 'Lexmark', href: '/printers/lexmark' },
    ],
  },
  { label: 'Επικοινωνία', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-md">
              <Monitor size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              Com<span className="text-cyan-600">House</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors">
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-cyan-600 bg-cyan-50'
                      : 'text-slate-700 hover:text-cyan-600 hover:bg-cyan-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="ml-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Επικοινωνία
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>
                {item.children && openDropdown === item.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-3 py-2 text-sm text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
