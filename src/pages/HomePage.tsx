import SEO from '../components/SEO'
import Hero from '../components/home/Hero'
import AboutSection from '../components/home/AboutSection'
import ServicesSection from '../components/home/ServicesSection'
import CustomersSection from '../components/home/CustomersSection'
import LatestNewsSection from '../components/home/LatestNewsSection'
import PartnersSection from '../components/home/PartnersSection'
import CtaSection from '../components/home/CtaSection'
import WhatsNewSection from '../components/home/WhatsNewSection'

export default function HomePage() {
  return (
    <>
      <SEO
        title="ComHouse | Λύσεις Τεχνολογίας από το 1990"
        description="Ολοκληρωμένες λύσεις τεχνολογίας — μηχανογράφηση, ταμειακές, service υπολογιστών, myDATA και web development. Εξουσιοδοτημένο service από το 1990."
        canonical="https://www.comhouse.gr/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ComHouse - Βουρλίδας Σεμέλογλου",
          "url": "https://www.comhouse.gr",
          "telephone": "+302321098466",
          "email": "comhouse@otenet.gr",
          "foundingDate": "1990",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Εθνικής Αντίστασης 40",
            "addressLocality": "Σέρρες",
            "addressCountry": "GR"
          },
          "description": "Ολοκληρωμένες λύσεις τεχνολογίας — μηχανογράφηση, ταμειακές, service υπολογιστών, myDATA και web development. Εξουσιοδοτημένο service από το 1990."
        }}
      />
      <Hero />
      <WhatsNewSection />
      <AboutSection />
      <ServicesSection />
      <CustomersSection />
      <LatestNewsSection />
      <PartnersSection />
      <CtaSection />
    </>
  )
}
