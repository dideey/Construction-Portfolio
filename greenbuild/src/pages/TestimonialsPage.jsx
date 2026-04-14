import { useSEO } from '../hooks/useSEO';
import { SEO }    from '../data/seo';
import TestimonialsHero    from '../components/sections/TestimonialsHero';
import TestimonialsStats   from '../components/sections/TestimonialsStats';
import FeaturedTestimonial from '../components/sections/FeaturedTestimonial';
import TestimonialsGrid    from '../components/sections/TestimonialsGrid';
import CtaSection          from '../components/sections/CtaSection';

export default function TestimonialsPage() {
  useSEO(SEO.testimonials);
  return (
    <main id="main-content">
      <TestimonialsHero />
      <TestimonialsStats />
      <FeaturedTestimonial />
      <TestimonialsGrid />
      <CtaSection />
    </main>
  );
}
