import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import HomePage from './pages/HomePage'
import RbsPage from './pages/RbsPage'
import DatatecPage from './pages/DatatecPage'
import SoftonePage from './pages/SoftonePage'
import ProsvasisPage from './pages/ProsvasisPage'
import PbsPage from './pages/PbsPage'
import ContactPage from './pages/ContactPage'
import NewsPage from './pages/NewsPage'
import NewsArticlePage from './pages/NewsArticlePage'
import LexmarkPage from './pages/LexmarkPage'
import PantumPage from './pages/PantumPage'
import RefurbishedPage from './pages/RefurbishedPage'
import WebDevPage from './pages/WebDevPage'
import BackToTop from './components/BackToTop'
import PromotionsPanel from './components/PromotionsPanel'
import CookieConsent from './components/CookieConsent'
import ScrollProgress from './components/ScrollProgress'
import AdminLoginPage from './pages/admin/AdminLoginPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import ArticlesPage from './pages/admin/ArticlesPage'
import ArticleEditorPage from './pages/admin/ArticleEditorPage'
import PromotionsPage from './pages/admin/PromotionsPage'
import ProtectedRoute from './components/admin/ProtectedRoute'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PublicRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/tameiakes/rbs" element={<PageTransition><RbsPage /></PageTransition>} />
        <Route path="/tameiakes/datatec" element={<PageTransition><DatatecPage /></PageTransition>} />
        <Route path="/mixanografisi/softone" element={<PageTransition><SoftonePage /></PageTransition>} />
        <Route path="/mixanografisi/prosvasis" element={<PageTransition><ProsvasisPage /></PageTransition>} />
        <Route path="/mixanografisi/pbs" element={<PageTransition><PbsPage /></PageTransition>} />
        <Route path="/printers/lexmark" element={<PageTransition><LexmarkPage /></PageTransition>} />
        <Route path="/printers/pantum" element={<PageTransition><PantumPage /></PageTransition>} />
        <Route path="/webdev" element={<PageTransition><WebDevPage /></PageTransition>} />
        <Route path="/computers/refurbished" element={<PageTransition><RefurbishedPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/news" element={<PageTransition><NewsPage /></PageTransition>} />
        <Route path="/news/:slug" element={<PageTransition><NewsArticlePage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/articles" element={<ProtectedRoute><ArticlesPage /></ProtectedRoute>} />
      <Route path="/admin/articles/new" element={<ProtectedRoute><ArticleEditorPage /></ProtectedRoute>} />
      <Route path="/admin/articles/:id/edit" element={<ProtectedRoute><ArticleEditorPage /></ProtectedRoute>} />
      <Route path="/admin/promotions" element={<ProtectedRoute><PromotionsPage /></ProtectedRoute>} />
    </Routes>
  )
}

export default function App() {
  const { pathname } = useLocation()
  const isAdmin = pathname.startsWith('/admin')

  return (
    <AuthProvider>
      <ScrollToTop />
      {isAdmin ? (
        <AdminRoutes />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <PublicRoutes />
          </main>
          <Footer />
          <ScrollProgress />
          <BackToTop />
          <CookieConsent />
          <PromotionsPanel />
        </div>
      )}
    </AuthProvider>
  )
}
