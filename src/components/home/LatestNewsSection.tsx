import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, ArrowRight } from 'lucide-react'
import { FadeUp } from '../ScrollReveal'
import { apiFetch } from '../../lib/api'

interface Article {
  id: number
  title: string
  slug: string
  excerpt: string | null
  image: string | null
  published_at: string
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      to={`/news/${article.slug}`}
      className="group flex flex-col"
    >
      <div className="w-8 h-0.5 bg-cyan-400 mb-4 group-hover:w-12 transition-all duration-300" />
      <p className="flex items-center gap-1.5 text-blue-200 text-xs mb-3">
        <CalendarDays className="w-3.5 h-3.5 shrink-0" />
        {new Date(article.published_at).toLocaleDateString('el-GR', {
          day: 'numeric', month: 'long', year: 'numeric',
        })}
      </p>
      <h3 className="text-white font-bold text-lg leading-snug line-clamp-3 group-hover:text-purple-200 transition-colors duration-200 flex-1 mb-3">
        {article.title}
      </h3>
      {article.excerpt && (
        <p className="text-blue-200/80 text-sm leading-relaxed line-clamp-2 mb-4">
          {article.excerpt}
        </p>
      )}
      <span className="inline-flex items-center gap-1 text-cyan-300 text-sm font-semibold group-hover:text-white group-hover:gap-2 transition-all duration-200 mt-auto">
        Διαβάστε περισσότερα <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  )
}

export default function LatestNewsSection() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiFetch<{ articles: Article[] } | Article[]>('/api/articles.php?limit=3&page=1')
      .then(data => {
        const list = Array.isArray(data) ? data : (data.articles ?? [])
        setArticles(list.slice(0, 3))
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (!loading && articles.length === 0) return null

  return (
    <section className="py-24 bg-linear-to-br from-blue-900 via-blue-800 to-cyan-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeUp className="mb-12 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <span className="text-cyan-300 font-bold text-xs uppercase tracking-[0.2em]">
              Νέα
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Τελευταία Άρθρα
            </h2>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center gap-1.5 text-cyan-300 font-semibold text-sm hover:text-white hover:gap-2.5 transition-all duration-200"
          >
            Όλα τα νέα <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 animate-pulse">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-0.5 w-8 bg-slate-200 rounded" />
                <div className="h-3 bg-slate-200 rounded w-28" />
                <div className="h-5 bg-slate-200 rounded w-3/4" />
                <div className="h-3 bg-slate-200 rounded w-full" />
                <div className="h-3 bg-slate-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-blue-700 gap-0">
            {articles.map((article, i) => (
              <FadeUp key={article.id} className={i > 0 ? 'pt-8 sm:pt-0 sm:pl-12' : ''}>
                <ArticleCard article={article} />
              </FadeUp>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
