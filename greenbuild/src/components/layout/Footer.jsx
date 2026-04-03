import { COMPANY, FOOTER_LINKS } from '../../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      <div className={`container ${styles.inner}`}>

        {/* Brand column */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>◆</span>
            <span className={styles.logoText}>{COMPANY.name}</span>
          </div>
          <p className={styles.tagline}>
            Leading the way in high-precision construction and sustainable architectural solutions for a better tomorrow.
          </p>
        </div>

        {/* Quick links */}
        <div className={styles.col}>
          <h4 className={styles.colHeading}>Quick Links</h4>
          <ul className={styles.list}>
            {FOOTER_LINKS.quick.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={styles.link}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services links */}
        <div className={styles.col}>
          <h4 className={styles.colHeading}>Services</h4>
          <ul className={styles.list}>
            {FOOTER_LINKS.services.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={styles.link}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colHeading}>Contact</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactIcon}>📍</span>
              <span>{COMPANY.address}</span>
            </li>
            <li>
              <span className={styles.contactIcon}>📞</span>
              <a href={`tel:${COMPANY.phone}`} className={styles.link}>{COMPANY.phone}</a>
            </li>
            <li>
              <span className={styles.contactIcon}>✉️</span>
              <a href={`mailto:${COMPANY.email}`} className={styles.link}>{COMPANY.email}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copy}>© {year} {COMPANY.name} Construction. All rights reserved.</p>
            <div className={styles.legalLinks}>
              <a href="#" className={styles.legalLink}>Privacy Policy</a>
              <a href="#" className={styles.legalLink}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
