import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CalendarDays, ArrowLeft } from 'lucide-react'
import SEO from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'
import { apiFetch, API_BASE } from '../lib/api'

function formatContent(raw: string): string {
  // Already contains HTML block elements — render as-is
  if (/<(p|h[1-6]|div|ul|ol|blockquote)\b/i.test(raw)) return raw
  // Plain text — wrap paragraphs and preserve line breaks
  return raw
    .split(/\n{2,}/)
    .filter(p => p.trim() !== '')
    .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
    .join('')
}

interface Article {
  id: number
  title: string
  slug: string
  excerpt: string | null
  content: string
  image: string | null
  published_at: string
}

export default function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>()

  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    setLoading(true)
    setNotFound(false)
    apiFetch<Article>(`/api/articles.php?slug=${slug}`)
      .then(setArticle)
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-50 pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse space-y-6">
          <div className="h-4 bg-slate-200 rounded w-1/3" />
          <div className="h-10 bg-slate-200 rounded w-3/4" />
          <div className="h-72 bg-slate-200 rounded-2xl" />
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded" />
            <div className="h-4 bg-slate-200 rounded w-5/6" />
            <div className="h-4 bg-slate-200 rounded w-4/6" />
          </div>
        </div>
      </div>
    )
  }

  if (notFound || !article) {
    return (
      <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-slate-800 text-3xl font-bold mb-3">Το άρθρο δεν βρέθηκε</h1>
        <p className="text-slate-500 text-sm mb-6">Το άρθρο που ψάχνετε δεν υπάρχει ή έχει αφαιρεθεί.</p>
        <Link to="/news" className="text-blue-600 font-semibold hover:text-blue-500 transition-colors">
          ← Επιστροφή στα Νέα
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${article.title} | ComHouse`}
        description={article.excerpt ?? undefined}
      />

      {/* Hero */}
      <div className="relative overflow-hidden pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #7c3aed 50%, #4c1d95 100%)' }}>

        {/* Line grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(rgba(216,180,254,1) 1px, transparent 1px), linear-gradient(90deg, rgba(216,180,254,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow blobs */}
        <div className="absolute -top-20 left-1/3 w-125 h-125 bg-purple-600/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-pink-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[
              { label: 'Αρχική', href: '/' },
              { label: 'Νέα', href: '/news' },
              { label: article.title },
            ]} />
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-4">
            <CalendarDays className="w-4 h-4" />
            {new Date(article.published_at).toLocaleDateString('el-GR', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="mt-4 text-slate-400 text-lg leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 48 L0 24 Q360 0 720 24 Q1080 48 1440 24 L1440 48 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Cover image */}
        {article.image && (
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={`${API_BASE}/uploads/articles/${article.image}`}
              alt={article.title}
              className="w-full max-h-120 object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
        />

        {/* Back link */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Επιστροφή στα Νέα
          </Link>
        </div>
      </div>
    </div>
  )
}
