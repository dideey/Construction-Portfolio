import { ABOUT_STATS } from '../../data/content';
import styles from './AboutStats.module.css';

export default function AboutStats() {
  return (
    <section className={styles.stats} aria-label="Company statistics">
      <div className="container">
        <ul className={styles.grid}>
          {ABOUT_STATS.map(({ value, label }) => (
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
