import AdminLayout from '../../components/admin/AdminLayout'
import { useAuth } from '../../context/AuthContext'

export default function AdminDashboard() {
  const { admin } = useAuth()

  return (
    <AdminLayout>
      <h1 className="text-white text-2xl font-bold mb-1">Αρχική</h1>
      <p className="text-slate-500 text-sm mb-10">Καλώς ήρθες, {admin?.username}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <p className="text-white font-semibold text-sm">Περισσότερες ενότητες σύντομα…</p>
          <p className="text-slate-500 text-xs mt-1">Μείνε συντονισμένος</p>
        </div>
      </div>
    </AdminLayout>
  )
}
