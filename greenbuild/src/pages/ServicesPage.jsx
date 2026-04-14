import { useSEO } from '../hooks/useSEO';
import { SEO }    from '../data/seo';
import ServicesHero        from '../components/sections/ServicesHero';
import ServicesDetailed    from '../components/sections/ServicesDetailed';
import ServicesProcess     from '../components/sections/ServicesProcess';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection          from '../components/sections/CtaSection';

export default function ServicesPage() {
  useSEO(SEO.services);
  return (
    <main id="main-content">
      <ServicesHero />
      <ServicesDetailed />
      <ServicesProcess />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
