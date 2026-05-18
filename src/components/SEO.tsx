interface SEOProps {
  title: string
  description: string
}

export default function SEO({ title, description }: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  )
}
