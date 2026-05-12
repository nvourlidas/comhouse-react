import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import comhouseLogo from '../assets/cropped-logo_transparent-1-211x104.png'

interface NavGrandchild {
  label: string
  href: string
}

interface NavChild {
  label: string
  href?: string
  children?: NavGrandchild[]
}

interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

const navItems: NavItem[] = [
  { label: 'Αρχική', href: '/' },
  {
    label: 'Ταμειακές',
    href: '/tameiakes',
    children: [
      { label: 'RBS',     href: '/tameiakes/rbs' },
      { label: 'DataTec', href: '/tameiakes/datatec' },
    ],
  },
  {
    label: 'Λύσεις Μηχανογράφησης',
    href: '/mixanografisi',
    children: [
      { label: 'EntersoftOne', href: '/mixanografisi/softone' },
      {
        label: 'Prosvasis',
        children: [
          { label: 'Prosvasis Go', href: '/mixanografisi/prosvasis' },
          { label: 'PBS ONE',      href: '/mixanografisi/pbs' },
        ],
      },
    ],
  },
  {
    label: 'Εκτυπωτές',
    href: '/printers',
    children: [
      { label: 'Lexmark', href: '/printers/lexmark' },
    ],
  },
  { label: 'Web & Apps', href: '/webdev' },
  { label: 'Refurbished', href: '/computers/refurbished' },
  { label: 'Επικοινωνία', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen]           = useState(false)
  const [openDropdown, setOpenDropdown]       = useState<string | null>(null)
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null)
  const [openMobileSub, setOpenMobileSub]     = useState<string | null>(null)
  const [scrolled, setScrolled]               = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setOpenSubDropdown(null)
    setOpenMobileSub(null)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-blue-100 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src={comhouseLogo} alt="ComHouse" className="h-12 lg:h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => { setOpenDropdown(null); setOpenSubDropdown(null) }}
                >
                  <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-1 w-52 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-1.5">
                        {item.children.map((child) =>
                          child.children ? (
                            <div
                              key={child.label}
                              className="relative"
                              onMouseEnter={() => setOpenSubDropdown(child.label)}
                              onMouseLeave={() => setOpenSubDropdown(null)}
                            >
                              <div className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-default select-none">
                                {child.label}
                                <ChevronRight size={12} />
                              </div>

                              {openSubDropdown === child.label && (
                                <div className="absolute left-full top-0 w-44 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
                                  {child.children.map((gc) => (
                                    <Link
                                      key={gc.label}
                                      to={gc.href}
                                      className="block px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                    >
                                      {gc.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              key={child.label}
                              to={child.href!}
                              className="block px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-blue-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-blue-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="block w-full px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && openDropdown === item.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) =>
                      child.children ? (
                        <div key={child.label}>
                          <button
                            className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            onClick={() =>
                              setOpenMobileSub(openMobileSub === child.label ? null : child.label)
                            }
                          >
                            {child.label}
                            <ChevronDown
                              size={12}
                              className={`transition-transform ${openMobileSub === child.label ? 'rotate-180' : ''}`}
                            />
                          </button>
                          {openMobileSub === child.label && (
                            <div className="ml-4 mt-1 space-y-1">
                              {child.children.map((gc) => (
                                <Link
                                  key={gc.label}
                                  to={gc.href}
                                  className="block px-3 py-2 text-sm text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                >
                                  {gc.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={child.label}
                          to={child.href!}
                          className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      )
                    )}
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
