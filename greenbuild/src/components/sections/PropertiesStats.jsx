import { PROPERTIES_STATS } from '../../data/content';
import styles from './PropertiesStats.module.css';

export default function PropertiesStats() {
  return (
    <section className={styles.stats} aria-label="Properties statistics">
      <div className={`container ${styles.inner}`}>
        {PROPERTIES_STATS.map(({ value, label }) => (
          <div key={label} className={styles.item}>
            <span className={styles.value}>{value}</span>
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
