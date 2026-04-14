import { useSEO }          from '../hooks/useSEO';
import { SEO }              from '../data/seo';
import PropertiesHero       from '../components/sections/PropertiesHero';
import PropertiesStats      from '../components/sections/PropertiesStats';
import PropertiesGrid       from '../components/sections/PropertiesGrid';
import PropertyProcess      from '../components/sections/PropertyProcess';
import TestimonialsSection  from '../components/sections/TestimonialsSection';
import PropertyCta          from '../components/sections/PropertyCta';

export default function PropertiesPage() {
  useSEO(SEO.properties);
  return (
    <main id="main-content">
      <PropertiesHero />
      <PropertiesStats />
      <PropertiesGrid />
      <PropertyProcess />
      <TestimonialsSection />
      <PropertyCta />
    </main>
  );
}
