import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus, Pencil, Trash2, Loader2 } from 'lucide-react'
import AdminLayout from '../../components/admin/AdminLayout'
import { useAuth } from '../../context/AuthContext'
import { apiFetch } from '../../lib/api'

interface Article {
  id: number
  title: string
  slug: string
  status: 'draft' | 'published'
  published_at: string | null
  created_at: string
}

export default function ArticlesPage() {
  const { token } = useAuth()
  const navigate  = useNavigate()

  const [articles, setArticles] = useState<Article[]>([])
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState<string | null>(null)
  const [deleting, setDeleting] = useState<number | null>(null)

  useEffect(() => {
    apiFetch<Article[]>('/api/articles.php', {}, token)
      .then(setArticles)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [token])

  const handleDelete = async (id: number, title: string) => {
    if (!confirm(`Διαγραφή "${title}";`)) return
    setDeleting(id)
    try {
      await apiFetch(`/api/articles.php?id=${id}`, { method: 'DELETE' }, token)
      setArticles(prev => prev.filter(a => a.id !== id))
    } catch (e: unknown) {
      alert(e instanceof Error ? e.message : 'Η διαγραφή απέτυχε')
    } finally {
      setDeleting(null)
    }
  }

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-2xl font-bold">Άρθρα</h1>
          <p className="text-slate-500 text-sm mt-1">{articles.length} σύνολο</p>
        </div>
        <button
          onClick={() => navigate('/admin/articles/new')}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
        >
          <Plus className="w-4 h-4" />
          Νέο Άρθρο
        </button>
      </div>

      {loading && (
        <div className="flex justify-center py-20">
          <Loader2 className="w-6 h-6 text-slate-500 animate-spin" />
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {!loading && !error && articles.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500 text-sm">Δεν υπάρχουν άρθρα ακόμα.</p>
          <button
            onClick={() => navigate('/admin/articles/new')}
            className="mt-3 text-blue-400 text-sm hover:text-blue-300 transition-colors"
          >
            Δημιουργία πρώτου άρθρου →
          </button>
        </div>
      )}

      {!loading && articles.length > 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left text-slate-500 font-medium px-6 py-3">Τίτλος</th>
                <th className="text-left text-slate-500 font-medium px-6 py-3 hidden sm:table-cell">Κατάσταση</th>
                <th className="text-left text-slate-500 font-medium px-6 py-3 hidden md:table-cell">Ημερομηνία</th>
                <th className="px-6 py-3" />
              </tr>
            </thead>
            <tbody>
              {articles.map((a, i) => (
                <tr
                  key={a.id}
                  className={`border-b border-slate-800 last:border-0 ${i % 2 === 0 ? '' : 'bg-slate-900/50'}`}
                >
                  <td className="px-6 py-4">
                    <p className="text-white font-medium truncate max-w-xs">{a.title}</p>
                    <p className="text-slate-600 text-xs mt-0.5 truncate">/blog/{a.slug}</p>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      a.status === 'published'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-slate-700 text-slate-400 border border-slate-600'
                    }`}>
                      {a.status === 'published' ? 'Δημοσιευμένο' : 'Πρόχειρο'}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell text-slate-500">
                    {a.published_at
                      ? new Date(a.published_at).toLocaleDateString('el-GR')
                      : new Date(a.created_at).toLocaleDateString('el-GR')}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => navigate(`/admin/articles/${a.id}/edit`)}
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(a.id, a.title)}
                        disabled={deleting === a.id}
                        className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
                      >
                        {deleting === a.id
                          ? <Loader2 className="w-4 h-4 animate-spin" />
                          : <Trash2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  )
}
