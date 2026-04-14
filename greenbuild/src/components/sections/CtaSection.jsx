import { COMPANY } from '../../data/content';
import Button from '../ui/Button';
import styles from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section className={styles.cta} aria-label="Call to action">
      {/* Decorative background pattern */}
      <div className={styles.pattern} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>Ready to Start Your Project?</h2>
        <p className={styles.sub}>
          Join hundreds of satisfied clients and let's build something extraordinary together.
        </p>
        <div className={styles.actions}>
           <Button href={`tel:${COMPANY.phone}`} size="lg" variant="secondary">
            Call Us Now
          </Button>
          <Button href={`email:${COMPANY.email}`} size="lg" variant="outline">
            Email Us
          </Button>
          <Button href={`whatsapp:${COMPANY.whatsapp}`} size="lg" variant="secondary">
            Text Us Now
          </Button>
          
        </div>
      </div>
    </section>
  );
}
