import { useState, useEffect, useRef } from 'react'
import { Loader2, Upload, Trash2, Tag } from 'lucide-react'
import AdminLayout from '../../components/admin/AdminLayout'
import { useAuth } from '../../context/AuthContext'
import { apiFetch, API_BASE } from '../../lib/api'

interface Promotion {
  id: number
  filename: string
  created_at: string
}

export default function PromotionsPage() {
  const { token } = useAuth()
  const [promotions, setPromotions] = useState<Promotion[]>([])
  const [loading,    setLoading]    = useState(true)
  const [uploading,  setUploading]  = useState(false)
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const [error,      setError]      = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const load = () => {
    apiFetch<Promotion[]>('/api/promotions.php', {}, token)
      .then(setPromotions)
      .catch(e => setError(e instanceof Error ? e.message : 'Σφάλμα φόρτωσης'))
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setError(null)
    try {
      const body = new FormData()
      body.append('image', file)
      await apiFetch('/api/promotions.php', { method: 'POST', body }, token)
      load()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Η μεταφόρτωση απέτυχε')
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  const handleDelete = async (id: number) => {
    setDeletingId(id)
    setError(null)
    try {
      await apiFetch(`/api/promotions.php?id=${id}`, { method: 'DELETE' }, token)
      setPromotions(prev => prev.filter(p => p.id !== id))
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Η διαγραφή απέτυχε')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <AdminLayout>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-2xl font-bold">Προσφορές</h1>
          <p className="text-slate-500 text-sm mt-1">
            {promotions.length} {promotions.length === 1 ? 'εικόνα' : 'εικόνες'} — εμφανίζονται στην αρχική σελίδα
          </p>
        </div>
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
        >
          {uploading
            ? <Loader2 className="w-4 h-4 animate-spin" />
            : <Upload className="w-4 h-4" />}
          {uploading ? 'Μεταφόρτωση…' : 'Νέα Εικόνα'}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          onChange={handleUpload}
          className="hidden"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 mb-6">
          {error}
        </p>
      )}

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="w-6 h-6 text-slate-500 animate-spin" />
        </div>
      ) : promotions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-slate-600">
          <Tag className="w-12 h-12 mb-4 opacity-30" />
          <p className="text-sm font-medium">Δεν υπάρχουν εικόνες προσφορών ακόμα.</p>
          <p className="text-xs mt-1">Κάντε κλικ στο «Νέα Εικόνα» για να ξεκινήσετε.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {promotions.map(p => (
            <div key={p.id} className="relative group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <img
                src={`${API_BASE}/uploads/promotions/${p.filename}`}
                alt="Προσφορά"
                className="w-full aspect-[3/4] object-cover"
              />
              <button
                onClick={() => handleDelete(p.id)}
                disabled={deletingId === p.id}
                className="absolute top-2 right-2 p-2 bg-slate-900/80 hover:bg-red-600 text-white rounded-lg transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-50"
                aria-label="Διαγραφή"
              >
                {deletingId === p.id
                  ? <Loader2 className="w-4 h-4 animate-spin" />
                  : <Trash2 className="w-4 h-4" />}
              </button>
            </div>
          ))}
        </div>
      )}

    </AdminLayout>
  )
}
