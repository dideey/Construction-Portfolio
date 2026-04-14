import { useState, useEffect } from 'react';
import { NAV_LINKS, COMPANY } from '../../data/content';
import Button from '../ui/Button';
import styles from './Navbar.module.css';

export default function Navbar({ currentPage = 'home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => { setMenuOpen(false); }, [currentPage]);

  const navigate = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    window.location.hash = href.replace('#', '');
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>

        {/* Logo */}
        <a href="#/" className={styles.logo} onClick={e => navigate(e, '#/')}>
          <img
            src="/photos/commercial/logo.jpeg"
            alt="Wanron Home solutions logo"
            className={styles.logoImage}
          />
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href, page }) => (
            <a
              key={label}
              href={href}
              className={`${styles.navLink} ${currentPage === page ? styles.active : ''}`}
              onClick={e => navigate(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Button href="#contact" size="sm" className={styles.cta} onClick={e => navigate(e, '#/contact')}>
          Get Quote
        </Button>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href, page }) => (
            <a
              key={label}
              href={href}
              className={`${styles.mobileLink} ${currentPage === page ? styles.mobileLinkActive : ''}`}
              onClick={e => navigate(e, href)}
            >
              {label}
            </a>
          ))}
          <Button href="#/contact" size="md" className={styles.mobileCta} onClick={e => navigate(e, '#/contact')}>
            Get a Quote
          </Button>
        </nav>
      )}
    </header>
  );
}
