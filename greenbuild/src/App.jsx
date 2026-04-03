import Navbar          from './components/layout/Navbar';
import Footer          from './components/layout/Footer';
import WhatsAppButton  from './components/ui/WhatsAppButton';
import HomePage        from './pages/HomePage';
import './styles/global.css';

export default function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
