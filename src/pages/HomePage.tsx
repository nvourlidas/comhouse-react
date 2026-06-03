import SEO from '../components/SEO'
import Hero from '../components/home/Hero'
import AboutSection from '../components/home/AboutSection'
import ServicesSection from '../components/home/ServicesSection'
import LatestNewsSection from '../components/home/LatestNewsSection'
import PartnersSection from '../components/home/PartnersSection'
import CtaSection from '../components/home/CtaSection'

export default function HomePage() {
  return (
    <>
      <SEO
        title="ComHouse | Λύσεις Τεχνολογίας από το 1990"
        description="Ολοκληρωμένες λύσεις τεχνολογίας — μηχανογράφηση, ταμειακές, service υπολογιστών, myDATA και web development. Εξουσιοδοτημένο service από το 1990."
      />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <LatestNewsSection />
      <PartnersSection />
      <CtaSection />
    </>
  )
}
