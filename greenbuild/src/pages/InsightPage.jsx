import InsightsPage from "../components/sections/insights";
import { useSEO } from '../hooks/useSEO';
import { SEO }    from '../data/seo';

export default function InsightPage() {
  useSEO(SEO.insights);
  return (
    <main id="main-content">
      <InsightsPage />

    </main>
  );
}
