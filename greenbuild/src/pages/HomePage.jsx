import HeroSection        from '../components/sections/HeroSection';
import AboutSection       from '../components/sections/AboutSection';
import ServicesSection    from '../components/sections/ServicesSection';
import ProjectsSection    from '../components/sections/ProjectsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection         from '../components/sections/CtaSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
