import { COMPANY } from '../../data/content';
import Button from '../ui/Button';
import styles from './PropertyCta.module.css';

export default function PropertyCta() {
  return (
    <section id="property-cta" className={styles.section} aria-label="Property enquiry call to action">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h2 className={styles.heading}>
            Can't Find What<br />You're Looking For?
          </h2>
          <p className={styles.sub}>
            We have off-market listings and upcoming developments not yet on our website.
            Contact our property team and we'll match you with your perfect property.
          </p>
        </div>

        <div className={styles.contacts}>
          {/* Phone */}
          <a href={`tel:${COMPANY.phone}`} className={styles.contactCard}>
            <span className={styles.contactIcon} aria-hidden="true">📞</span>
            <div>
              <p className={styles.contactLabel}>Call Our Property Team</p>
              <p className={styles.contactValue}>{COMPANY.phone}</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className={`${styles.contactCard} ${styles.contactWa}`}>
            <span className={styles.contactIcon} aria-hidden="true">💬</span>
            <div>
              <p className={styles.contactLabel}>Chat on WhatsApp</p>
              <p className={styles.contactValue}>Message Us Now</p>
            </div>
          </a>

          {/* Email */}
          <a href={`mailto:${COMPANY.email}`} className={styles.contactCard}>
            <span className={styles.contactIcon} aria-hidden="true">✉️</span>
            <div>
              <p className={styles.contactLabel}>Email Us</p>
              <p className={styles.contactValue}>{COMPANY.email}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
