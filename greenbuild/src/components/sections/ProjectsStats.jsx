import styles from './ProjectsStats.module.css';

const STATS = [
  { value: '500+', label: 'Projects Completed' },
  { value: '25+',  label: 'Years Delivering' },
  { value: '18',   label: 'Countries Built In' },
  { value: '12',   label: 'Industry Awards' },
];

export default function ProjectsStats() {
  return (
    <section className={styles.stats} aria-label="Project statistics">
      <div className={`container ${styles.inner}`}>
        {STATS.map(({ value, label }) => (
          <div key={label} className={styles.item}>
            <span className={styles.value}>{value}</span>
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
