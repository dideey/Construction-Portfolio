import { TESTIMONIAL_STATS } from '../../data/content';
import styles from './TestimonialsStats.module.css';

export default function TestimonialsStats() {
  return (
    <section className={styles.stats} aria-label="Testimonials statistics">
      <div className="container">
        <ul className={styles.grid}>
          {TESTIMONIAL_STATS.map(({ value, label }) => (
            <li key={label} className={styles.item}>
              <span className={styles.value}>{value}</span>
              <span className={styles.label}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
