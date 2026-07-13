import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import comhouseLogo from '../assets/COMPUTERHOUSE-transparent.png'

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
  hasPage?: boolean
  children?: NavChild[]
}

const navItems: NavItem[] = [
  { label: 'Αρχική', href: '/' },
  {
    label: 'Ταμειακές',
    href: '/tameiakes-mixanes-serres',
    hasPage: true,
    children: [
      { label: 'RBS',     href: '/tameiakes/rbs' },
      { label: 'DataTec', href: '/tameiakes/datatec' },
    ],
  },
  {
    label: 'Λύσεις Μηχανογράφησης',
    href: '/mixanografisi',
    hasPage: true,
    children: [
      { label: 'EntersoftOne', href: '/mixanografisi/softone' },
      {
        label: 'Prosvasis',
        children: [
          { label: 'Prosvasis Go', href: '/mixanografisi/prosvasis' },
          { label: 'PBS ONE',      href: '/mixanografisi/pbs' },
        ],
      },
      { label: 'ECR Connect & Invoicing', href: '/tameiakes/rbs/ecr-connect-pepper-invoicing' },
    ],
  },
  {
    label: 'Εκτυπωτές',
    href: '/printers',
    children: [
      { label: 'Lexmark', href: '/printers/lexmark' },
      { label: 'Pantum',  href: '/printers/pantum' },
    ],
  },
  { label: 'Web & Apps', href: '/webdev' },
  { label: 'Refurbished', href: '/computers/refurbished' },
  { label: 'Νέα', href: '/news' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-white/75 backdrop-blur-md shadow-md border-slate-200/50'
          : 'bg-white shadow-sm border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-28">

          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src={comhouseLogo} alt="Computer House" className="h-16 lg:h-24 w-auto scale-[1.3] origin-left lg:scale-[2.0] lg:origin-left" />
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
                  <div className="flex items-center rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    {item.hasPage ? (
                      <Link
                        to={item.href}
                        className={`px-3 py-2 ${location.pathname === item.href ? 'text-blue-600' : ''}`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="px-3 py-2 cursor-default">{item.label}</span>
                    )}
                    <span className="pr-2 py-2">
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </div>

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

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile menu toggle */}
            <button
              className="p-2 rounded-lg text-slate-700 hover:bg-blue-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-blue-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div className="flex items-center justify-between rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 transition-colors">
                    {item.hasPage ? (
                      <Link
                        to={item.href}
                        className={`flex-1 px-3 py-2.5 hover:text-blue-600 transition-colors ${location.pathname === item.href ? 'text-blue-600' : ''}`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="flex-1 px-3 py-2.5">{item.label}</span>
                    )}
                    <button
                      className="px-3 py-2.5 hover:text-blue-600 transition-colors"
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
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
