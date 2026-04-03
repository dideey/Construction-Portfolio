import { useState, useEffect } from 'react';
import { NAV_LINKS, COMPANY } from '../../data/content';
import Button from '../ui/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [activeSection, setActive]      = useState('home');

  /* Sticky + active-section tracking */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>

        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={e => handleNavClick(e, '#home')}>
          <span className={styles.logoIcon}>◆</span>
          <span className={styles.logoText}>{COMPANY.name}</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`${styles.navLink} ${activeSection === href.replace('#', '') ? styles.active : ''}`}
              onClick={e => handleNavClick(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Button href="#contact" size="sm" className={styles.cta}>
          Get Quote
        </Button>

        {/* Mobile hamburger */}
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
        <div className={styles.mobileMenu} role="dialog" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={styles.mobileLink}
              onClick={e => handleNavClick(e, href)}
            >
              {label}
            </a>
          ))}
          <Button href="#contact" size="md" className={styles.mobileCta}>
            Get a Quote
          </Button>
        </div>
      )}
    </header>
  );
}
