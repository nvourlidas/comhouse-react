import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
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
import LexmarkPage from './pages/LexmarkPage'
import PantumPage from './pages/PantumPage'
import RefurbishedPage from './pages/RefurbishedPage'
import WebDevPage from './pages/WebDevPage'
import BackToTop from './components/BackToTop'
import CookieConsent from './components/CookieConsent'
import ScrollProgress from './components/ScrollProgress'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AnimatedRoutes() {
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
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
      <ScrollProgress />
      <BackToTop />
      <CookieConsent />
    </div>
  )
}
