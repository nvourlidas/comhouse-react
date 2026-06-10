const SITE_URL = 'https://www.comhouse.gr'
const DEFAULT_OG_IMAGE = `${SITE_URL}/CH-logo-transparent.png`

interface SEOProps {
  title: string
  description?: string
  canonical?: string
  ogImage?: string
  jsonLd?: object
}

export default function SEO({ title, description, canonical, ogImage, jsonLd }: SEOProps) {
  const image = ogImage ?? DEFAULT_OG_IMAGE
  return (
    <>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  )
}
