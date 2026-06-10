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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('el-GR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <Link to={`/news/${article.slug}`} className="group flex flex-col h-full">
      <span className="text-6xl font-black text-blue-100 leading-none select-none mb-4">
        0{index + 1}
      </span>
      <div className="w-10 h-0.5 bg-blue-500 mb-4 group-hover:w-16 transition-all duration-300" />
      <p className="flex items-center gap-1.5 text-slate-400 text-xs mb-3">
        <CalendarDays className="w-3.5 h-3.5 shrink-0" />
        {formatDate(article.published_at)}
      </p>
      <h3 className="text-slate-900 font-bold text-lg leading-snug line-clamp-3 group-hover:text-blue-600 transition-colors duration-200 flex-1 mb-3">
        {article.title}
      </h3>
      {article.excerpt && (
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
          {article.excerpt}
        </p>
      )}
      <span className="inline-flex items-center gap-1 text-blue-500 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200 mt-auto">
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
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeUp className="mb-14 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em]">
              Νέα
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Τελευταία Άρθρα
            </h2>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center gap-1.5 text-blue-500 font-semibold text-sm hover:text-blue-700 hover:gap-2.5 transition-all duration-200"
          >
            Όλα τα νέα <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 animate-pulse">
            {[0, 1, 2].map(i => (
              <div key={i} className="space-y-3">
                <div className="h-10 bg-slate-100 rounded w-12" />
                <div className="h-0.5 bg-slate-100 rounded w-10" />
                <div className="h-3 bg-slate-100 rounded w-28" />
                <div className="h-5 bg-slate-100 rounded w-3/4" />
                <div className="h-3 bg-slate-100 rounded w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 gap-0">
            {articles.map((article, i) => (
              <FadeUp key={article.id} delay={i * 0.1} className={i > 0 ? 'pt-10 sm:pt-0 sm:px-10' : 'sm:pr-10'}>
                <ArticleCard article={article} index={i} />
              </FadeUp>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
