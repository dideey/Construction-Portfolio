import { useSEO } from '../hooks/useSEO';
import { SEO }    from '../data/seo';
import ProjectsHero        from '../components/sections/ProjectsHero';
import ProjectsStats       from '../components/sections/ProjectsStats';
import ProjectsGallery     from '../components/sections/ProjectsGallery';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection          from '../components/sections/CtaSection';

export default function ProjectsPage() {
  useSEO(SEO.projects);
  return (
    <main id="main-content">
      <ProjectsHero />
      <ProjectsStats />
      <ProjectsGallery />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
