import { useEffect }     from 'react';
import { useHashRouter } from './hooks/useHashRouter';
import Navbar            from './components/layout/Navbar';
import Footer            from './components/layout/Footer';
import WhatsAppButton    from './components/ui/WhatsAppButton';
import HomePage          from './pages/HomePage';
import AboutPage         from './pages/AboutPage';
import ServicesPage      from './pages/ServicesPage';
import ProjectsPage      from './pages/ProjectsPage';
import PropertiesPage    from './pages/PropertiesPage';
import TestimonialsPage  from './pages/TestimonialsPage';
import './styles/global.css';

export default function App() {
  const page = useHashRouter();

  const getScrollTarget = () => {
    const hash = window.location.hash || '';
    const query = hash.split('?')[1] ?? '';
    const params = new URLSearchParams(query);
    return params.get('scroll');
  };

  const scrollToTarget = () => {
    const targetId = getScrollTarget();
    if (!targetId) return false;
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
    return false;
  };

  // Instant scroll-to-top on every page change, unless a scroll target is provided.
  useEffect(() => {
    if (!scrollToTarget()) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [page]);

  useEffect(() => {
    const handleHashChange = () => {
      scrollToTarget();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'about':        return <AboutPage />;
      case 'services':     return <ServicesPage />;
      case 'projects':     return <ProjectsPage />;
      case 'properties':   return <PropertiesPage />;
      case 'testimonials': return <TestimonialsPage />;
      default:             return <HomePage />;
    }
  };

  return (
    <>
      <Navbar currentPage={page} />
      {renderPage()}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
