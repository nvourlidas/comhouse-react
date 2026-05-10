import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import RbsPage from './pages/RbsPage'
import DatatecPage from './pages/DatatecPage'
import SoftonePage from './pages/SoftonePage'
import ProsvasisPage from './pages/ProsvasisPage'
import PbsPage from './pages/PbsPage'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tameiakes/rbs" element={<RbsPage />} />
          <Route path="/tameiakes/datatec" element={<DatatecPage />} />
          <Route path="/mixanografisi/softone" element={<SoftonePage />} />
          <Route path="/mixanografisi/prosvasis" element={<ProsvasisPage />} />
          <Route path="/mixanografisi/pbs" element={<PbsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
