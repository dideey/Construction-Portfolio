import { useSEO } from '../hooks/useSEO';
import { SEO }    from '../data/seo';
import AboutHero   from '../components/sections/AboutHero';
import AboutStats  from '../components/sections/AboutStats';
import OurStory    from '../components/sections/OurStory';
import LegalDocs    from '../components/sections/LegalDocs';
import CoreValues  from '../components/sections/CoreValues';
import TeamSection from '../components/sections/TeamSection';
import CtaSection  from '../components/sections/CtaSection';

export default function AboutPage() {
  useSEO(SEO.about);
  return (
    <main id="main-content">
      <AboutHero />
      <AboutStats />
      <OurStory />
      <LegalDocs />
      <TeamSection />
      <CtaSection />
    </main>
  );
}
