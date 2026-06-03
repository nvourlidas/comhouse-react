import { useEffect, useState, useRef, FormEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Upload, X, Loader2 } from 'lucide-react'
import AdminLayout from '../../components/admin/AdminLayout'
import { useAuth } from '../../context/AuthContext'
import { apiFetch, API_BASE } from '../../lib/api'

interface ArticleForm {
  title: string
  excerpt: string
  content: string
  image: string
  status: 'draft' | 'published'
}

const empty: ArticleForm = { title: '', excerpt: '', content: '', image: '', status: 'draft' }

export default function ArticleEditorPage() {
  const { id }    = useParams<{ id: string }>()
  const isEdit    = !!id
  const { token } = useAuth()
  const navigate  = useNavigate()

  const [form,         setForm]         = useState<ArticleForm>(empty)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [loadingPage,  setLoadingPage]  = useState(isEdit)
  const [saving,       setSaving]       = useState(false)
  const [uploading,    setUploading]    = useState(false)
  const [error,        setError]        = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isEdit) return
    apiFetch<ArticleForm & { image: string }>(`/api/articles.php?id=${id}`, {}, token)
      .then(data => {
        setForm({
          title:   data.title,
          excerpt: data.excerpt ?? '',
          content: data.content,
          image:   data.image ?? '',
          status:  data.status,
        })
        if (data.image) {
          setImagePreview(`${API_BASE}/uploads/articles/${data.image}`)
        }
      })
      .catch(e => setError(e.message))
      .finally(() => setLoadingPage(false))
  }, [id, isEdit, token])

  const set = (field: keyof ArticleForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleImagePick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError(null)
    try {
      const body = new FormData()
      body.append('image', file)

      const data = await apiFetch<{ filename: string; url: string }>(
        '/api/upload.php',
        { method: 'POST', body },
        token,
      )
      setForm(prev => ({ ...prev, image: data.filename }))
      setImagePreview(data.url)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Η μεταφόρτωση απέτυχε')
    } finally {
      setUploading(false)
    }
  }

  const removeImage = () => {
    setForm(prev => ({ ...prev, image: '' }))
    setImagePreview(null)
    if (fileRef.current) fileRef.current.value = ''
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)

    try {
      if (isEdit) {
        await apiFetch(`/api/articles.php?id=${id}`, {
          method: 'PUT',
          body: JSON.stringify(form),
        }, token)
      } else {
        await apiFetch('/api/articles.php', {
          method: 'POST',
          body: JSON.stringify(form),
        }, token)
      }
      navigate('/admin/articles')
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Η αποθήκευση απέτυχε')
    } finally {
      setSaving(false)
    }
  }

  if (loadingPage) {
    return (
      <AdminLayout>
        <div className="flex justify-center py-20">
          <Loader2 className="w-6 h-6 text-slate-500 animate-spin" />
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate('/admin/articles')}
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h1 className="text-white text-2xl font-bold">
            {isEdit ? 'Επεξεργασία Άρθρου' : 'Νέο Άρθρο'}
          </h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-3xl">

        {/* Title */}
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Τίτλος *</label>
          <input
            type="text"
            value={form.title}
            onChange={set('title')}
            required
            placeholder="Τίτλος άρθρου…"
            className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>

        {/* Excerpt */}
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
            Περίληψη <span className="normal-case text-slate-600">(σύντομη προεπισκόπηση)</span>
          </label>
          <textarea
            value={form.excerpt}
            onChange={set('excerpt')}
            rows={2}
            placeholder="Μία ή δύο προτάσεις που εμφανίζονται στη λίστα των άρθρων…"
            className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Περιεχόμενο *</label>
          <textarea
            value={form.content}
            onChange={set('content')}
            required
            rows={16}
            placeholder="Πλήρες περιεχόμενο άρθρου…"
            className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-y font-mono"
          />
        </div>

        {/* Image */}
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Εικόνα Εξωφύλλου</label>

          {imagePreview ? (
            <div className="relative w-full max-w-sm">
              <img
                src={imagePreview}
                alt="Cover"
                className="w-full h-48 object-cover rounded-xl border border-slate-700"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 p-1.5 bg-slate-900/80 hover:bg-red-500 text-white rounded-lg transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
              className="flex flex-col items-center justify-center gap-2 w-full max-w-sm h-36 border-2 border-dashed border-slate-700 hover:border-blue-500 rounded-xl text-slate-500 hover:text-blue-400 transition-colors disabled:opacity-50"
            >
              {uploading
                ? <Loader2 className="w-5 h-5 animate-spin" />
                : <Upload className="w-5 h-5" />}
              <span className="text-xs">{uploading ? 'Μεταφόρτωση…' : 'Κλικ για μεταφόρτωση εικόνας'}</span>
              <span className="text-xs text-slate-600">JPEG, PNG, WebP — μέγ. 5 MB</span>
            </button>
          )}

          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={handleImagePick}
            className="hidden"
          />
        </div>

        {/* Status */}
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Κατάσταση</label>
          <select
            value={form.status}
            onChange={set('status')}
            className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all w-48"
          >
            <option value="draft">Πρόχειρο</option>
            <option value="published">Δημοσιευμένο</option>
          </select>
        </div>

        {error && (
          <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
            {error}
          </p>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            {saving && <Loader2 className="w-4 h-4 animate-spin" />}
            {saving ? 'Αποθήκευση…' : isEdit ? 'Αποθήκευση Αλλαγών' : 'Δημιουργία Άρθρου'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/articles')}
            className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
          >
            Ακύρωση
          </button>
        </div>

      </form>
    </AdminLayout>
  )
}
