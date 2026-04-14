import { TESTIMONIALS_HERO } from '../../data/content';
import styles from './TestimonialsHero.module.css';

export default function TestimonialsHero() {
  return (
    <section className={styles.hero} aria-label="Testimonials hero">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.gridPattern} />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>{TESTIMONIALS_HERO.eyebrow}</p>
        <h1 className={styles.heading}>
          {TESTIMONIALS_HERO.heading.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h1>
        <p className={styles.sub}>{TESTIMONIALS_HERO.sub}</p>

        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/" className={styles.breadLink}>Home</a>
          <span aria-hidden="true">›</span>
          <span>Testimonials</span>
        </nav>
      </div>
    </section>
  );
}
