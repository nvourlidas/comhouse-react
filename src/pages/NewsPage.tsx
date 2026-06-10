import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CalendarDays, ArrowRight, ArrowLeft, Newspaper } from 'lucide-react'
import SEO from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'
import { apiFetch, API_BASE } from '../lib/api'

const LIMIT = 10

interface Article {
  id: number
  title: string
  slug: string
  excerpt: string | null
  image: string | null
  published_at: string
}

interface PagedResponse {
  articles: Article[]
  total: number
  page: number
  pages: number
}

function ArticleRow({ article }: { article: Article }) {
  const [imgFailed, setImgFailed] = useState(false)
  const hasImage = !!article.image && !imgFailed

  return (
    <Link
      to={`/news/${article.slug}`}
      className="group flex items-center gap-6 sm:gap-8 py-7 border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200 -mx-4 sm:mx-0 px-4 sm:px-0"
    >
      {hasImage && (
        <div className="shrink-0 w-36 h-24 sm:w-52 sm:h-36 rounded-xl overflow-hidden">
          <img
            src={`${API_BASE}/uploads/articles/${article.image}`}
            alt={article.title}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="flex items-center gap-1.5 text-slate-400 text-xs mb-2">
          <CalendarDays className="w-3.5 h-3.5 shrink-0" />
          {new Date(article.published_at).toLocaleDateString('el-GR', {
            day: 'numeric', month: 'long', year: 'numeric',
          })}
        </p>
        <h2 className="text-slate-900 font-bold text-base sm:text-lg leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 mb-1.5">
          {article.title}
        </h2>
        {article.excerpt && (
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 hidden sm:block">
            {article.excerpt}
          </p>
        )}
      </div>
      <ArrowRight className="w-5 h-5 shrink-0 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
    </Link>
  )
}

function Pagination({ page, pages, onChange }: { page: number; pages: number; onChange: (p: number) => void }) {
  if (pages <= 1) return null

  const getPages = (): (number | '…')[] => {
    if (pages <= 7) return Array.from({ length: pages }, (_, i) => i + 1)
    const result: (number | '…')[] = [1]
    if (page > 3) result.push('…')
    for (let i = Math.max(2, page - 1); i <= Math.min(pages - 1, page + 1); i++) result.push(i)
    if (page < pages - 2) result.push('…')
    result.push(pages)
    return result
  }

  return (
    <div className="flex items-center justify-center gap-1.5 pt-10">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Προηγούμενη
      </button>

      <div className="flex items-center gap-1">
        {getPages().map((p, i) =>
          p === '…' ? (
            <span key={`ellipsis-${i}`} className="w-9 text-center text-slate-400 text-sm">…</span>
          ) : (
            <button
              key={p}
              onClick={() => onChange(p)}
              className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
                p === page
                  ? 'bg-violet-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {p}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === pages}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
      >
        Επόμενη <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}

export default function NewsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10))

  const [data,    setData]    = useState<PagedResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    apiFetch<PagedResponse | Article[]>(`/api/articles.php?page=${page}&limit=${LIMIT}`)
      .then(raw => {
        if (Array.isArray(raw)) {
          // old plain-array format
          setData({ articles: raw, total: raw.length, page, pages: 1 })
        } else {
          setData(raw)
        }
      })
      .catch(e => setError(e?.message ?? 'Σφάλμα φόρτωσης'))
      .finally(() => setLoading(false))
  }, [page])

  const goToPage = (p: number) => {
    setSearchParams(p === 1 ? {} : { page: String(p) })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const articles = data?.articles ?? []
  const total    = data?.total ?? 0
  const pages    = data?.pages ?? 1

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Νέα | ComHouse"
        description="Ενημερωθείτε για τα τελευταία νέα, προσφορές και ανακοινώσεις της ComHouse."
        canonical="https://www.comhouse.gr/news"
      />

      {/* Hero */}
      <div className="relative overflow-hidden pt-32 pb-28" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #7c3aed 50%, #4c1d95 100%)' }}>

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(rgba(216,180,254,1) 1px, transparent 1px), linear-gradient(90deg, rgba(216,180,254,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="absolute -top-20 left-1/3 w-125 h-125 bg-purple-600/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-pink-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Αρχική', href: '/' }, { label: 'Νέα' }]} />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Τελευταία{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-pink-300">
              Νέα
            </span>
          </h1>
          {!loading && total > 0 && (
            <p className="text-purple-300/70 text-sm mt-3 tabular-nums">
              {total} {total === 1 ? 'άρθρο' : 'άρθρα'}
            </p>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 48 L0 24 Q360 0 720 24 Q1080 48 1440 24 L1440 48 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Skeletons */}
        {loading && (
          <div className="animate-pulse">
            {[...Array(LIMIT)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 py-7 border-b border-slate-100">
                <div className="shrink-0 w-52 h-36 rounded-xl bg-slate-100" />
                <div className="flex-1 space-y-3">
                  <div className="h-3 bg-slate-100 rounded w-32" />
                  <div className="h-5 bg-slate-100 rounded w-3/4" />
                  <div className="h-3 bg-slate-100 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex flex-col items-center py-20 text-center">
            <p className="text-red-500 font-semibold mb-2">Αποτυχία φόρτωσης άρθρων</p>
            <p className="text-slate-400 text-sm">{error}</p>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && articles.length === 0 && (
          <div className="flex flex-col items-center py-32 text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 bg-violet-100">
              <Newspaper className="w-9 h-9 text-violet-400" />
            </div>
            <h2 className="text-slate-700 text-2xl font-bold mb-2">Δεν υπάρχουν νέα ακόμα</h2>
            <p className="text-slate-400 text-sm max-w-xs">
              Επιστρέψτε σύντομα για νέες ανακοινώσεις.
            </p>
          </div>
        )}

        {/* Rows */}
        {!loading && !error && articles.length > 0 && (
          <>
            <div className="border-t border-slate-100">
              {articles.map(article => (
                <ArticleRow key={article.id} article={article} />
              ))}
            </div>
            <Pagination page={page} pages={pages} onChange={goToPage} />
          </>
        )}

      </div>
    </div>
  )
}
