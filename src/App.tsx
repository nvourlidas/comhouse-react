import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import RbsPage from './pages/TameiakesMixanesPage'
import DatatecPage from './pages/DatatecPage'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tameiakes/rbs" element={<RbsPage />} />
          <Route path="/tameiakes/datatec" element={<DatatecPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
