import { ReactNode } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Newspaper, LogOut } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { apiFetch } from '../../lib/api'

const navItems = [
  { to: '/admin',          label: 'Αρχική',   icon: LayoutDashboard, exact: true },
  { to: '/admin/articles', label: 'Άρθρα',    icon: Newspaper,       exact: false },
]

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { admin, token, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await apiFetch('/api/auth/logout.php', { method: 'POST' }, token)
    } finally {
      logout()
      navigate('/admin/login', { replace: true })
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex">

      {/* Sidebar */}
      <aside className="w-56 shrink-0 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="px-6 py-5 border-b border-slate-800">
          <span className="text-white font-extrabold text-sm tracking-tight">
            Com<span className="text-blue-400">House</span>
          </span>
          <p className="text-slate-500 text-xs mt-0.5">Πίνακας Διαχείρισης</p>
        </div>

        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          {navItems.map(({ to, label, icon: Icon, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`
              }
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-slate-800 flex flex-col gap-1">
          <p className="px-3 text-xs text-slate-600 truncate">{admin?.username}</p>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            Αποσύνδεση
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-auto p-8">
        {children}
      </main>

    </div>
  )
}
