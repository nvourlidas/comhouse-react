import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, ArrowRight, Newspaper } from 'lucide-react'
import SEO from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'
import { apiFetch, API_BASE } from '../lib/api'

interface Article {
  id: number
  title: string
  slug: string
  excerpt: string | null
  image: string | null
  published_at: string
}

function ArticleRow({ article }: { article: Article }) {
  const [imgFailed, setImgFailed] = useState(false)
  const hasImage = !!article.image && !imgFailed

  return (
    <Link
      to={`/news/${article.slug}`}
      className="group flex items-center gap-6 sm:gap-8 py-7 border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200 -mx-4 sm:mx-0 px-4 sm:px-0"
    >
      {/* Image — only rendered when one exists */}
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

      {/* Text */}
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

      {/* Arrow */}
      <ArrowRight className="w-5 h-5 shrink-0 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
    </Link>
  )
}

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading,  setLoading]  = useState(true)

  useEffect(() => {
    apiFetch<Article[]>('/api/articles.php')
      .then(setArticles)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Νέα | ComHouse"
        description="Ενημερωθείτε για τα τελευταία νέα, προσφορές και ανακοινώσεις της ComHouse."
      />

      {/* Hero */}
      <div className="relative overflow-hidden bg-linear-to-br from-orange-950 via-orange-700 to-amber-950 pt-32 pb-28">

        {/* Line grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(rgba(251,146,60,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow blobs */}
        <div className="absolute -top-20 left-1/3 w-125 h-125 bg-orange-600/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Αρχική', href: '/' }, { label: 'Νέα' }]} />
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Τελευταία{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-300">
                Νέα
              </span>
            </h1>
            {!loading && articles.length > 0 && (
              <p className="text-orange-300/60 text-sm mt-3 tabular-nums">
                {articles.length} {articles.length === 1 ? 'άρθρο' : 'άρθρα'}
              </p>
            )}
          </div>
        </div>

        {/* Wave */}
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
            {[...Array(4)].map((_, i) => (
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

        {/* Empty */}
        {!loading && articles.length === 0 && (
          <div className="flex flex-col items-center py-32 text-center">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: 'linear-gradient(135deg, #ea580c, #f97316)' }}
            >
              <Newspaper className="w-9 h-9 text-white/50" />
            </div>
            <h2 className="text-slate-700 text-2xl font-bold mb-2">Δεν υπάρχουν νέα ακόμα</h2>
            <p className="text-slate-400 text-sm max-w-xs">
              Επιστρέψτε σύντομα για νέες ανακοινώσεις.
            </p>
          </div>
        )}

        {/* Rows */}
        {!loading && articles.length > 0 && (
          <div className="border-t border-slate-100">
            {articles.map(article => (
              <ArticleRow key={article.id} article={article} />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
