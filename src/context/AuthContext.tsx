import { createContext, useContext, useState, ReactNode } from 'react'

interface Admin {
  id: number
  username: string
}

interface AuthContextType {
  token: string | null
  admin: Admin | null
  login: (token: string, admin: Admin) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('admin_token'))
  const [admin, setAdmin] = useState<Admin | null>(() => {
    const stored = localStorage.getItem('admin_user')
    return stored ? JSON.parse(stored) : null
  })

  const login = (token: string, admin: Admin) => {
    localStorage.setItem('admin_token', token)
    localStorage.setItem('admin_user', JSON.stringify(admin))
    setToken(token)
    setAdmin(admin)
  }

  const logout = () => {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_user')
    setToken(null)
    setAdmin(null)
  }

  return (
    <AuthContext.Provider value={{ token, admin, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
