import { CORE_VALUES } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import styles from './CoreValues.module.css';

function ValueCard({ icon, title, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrap} aria-hidden="true">
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </article>
  );
}

export default function CoreValues() {
  return (
    <section className={`section ${styles.values}`} id="values">
      <div className="container">
        <div className={styles.header}>
          <SectionLabel centered>What Drives Us</SectionLabel>
          <h2 className={styles.heading}>Our Core Values</h2>
          <p className={styles.sub}>
            These aren't words on a wall — they're the principles that guide every decision we make on and off the job site.
          </p>
        </div>

        <div className={styles.grid}>
          {CORE_VALUES.map(v => (
            <ValueCard key={v.id} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
