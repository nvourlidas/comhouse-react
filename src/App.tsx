import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import RbsPage from './pages/RbsPage'
import DatatecPage from './pages/DatatecPage'
import SoftonePage from './pages/SoftonePage'
import ProsvasisPage from './pages/ProsvasisPage'
import PbsPage from './pages/PbsPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tameiakes/rbs" element={<RbsPage />} />
          <Route path="/tameiakes/datatec" element={<DatatecPage />} />
          <Route path="/mixanografisi/softone" element={<SoftonePage />} />
          <Route path="/mixanografisi/prosvasis" element={<ProsvasisPage />} />
          <Route path="/mixanografisi/pbs" element={<PbsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
