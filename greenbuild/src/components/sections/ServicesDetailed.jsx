import { SERVICES_EXTENDED } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import styles from './ServicesDetailed.module.css';

function ServiceRow({ service, index }) {
  const isEven = index % 2 === 0;

  return (
    <article
      className={`${styles.row} ${isEven ? styles.rowNormal : styles.rowReversed}`}
      id={service.id}
    >
      {/* Image side */}
      <div className={styles.imageWrap}>
        <img
          src={service.image}
          alt={service.title}
          className={styles.image}
          loading="lazy"
        />
        {/* Stats badge — mirrors Figma's green stat card */}
        <div className={styles.statBadge}>
          {service.stats.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
        {/* Icon overlay — matches Figma's rgba(26,66,49,0.1) icon wrap */}
        <div className={styles.iconBadge} aria-hidden="true">
          <span className={styles.icon}>{service.icon}</span>
        </div>
      </div>

      {/* Text side */}
      <div className={styles.textWrap}>
        <SectionLabel>{service.tagline}</SectionLabel>
        <h2 className={styles.title}>{service.title}</h2>
        <p className={styles.desc}>{service.description}</p>

        {/* Feature list — matches Figma's checkmark feature items */}
        <ul className={styles.features}>
          {service.features.map(f => (
            <li key={f} className={styles.feature}>
              <span className={styles.check} aria-hidden="true">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function ServicesDetailed() {
  return (
    <section className={styles.section} id="services-list">
      <div className="container">
        <div className={styles.header}>
          <SectionLabel centered>Our Services</SectionLabel>
          <h2 className={styles.heading}>Comprehensive Construction Solutions</h2>
          <p className={styles.sub}>
            Every service we offer is backed by decades of expertise, a dedicated specialist team,
            and our unwavering commitment to quality.
          </p>
        </div>

        <div className={styles.rows}>
          {SERVICES_EXTENDED.map((s, i) => (
            <ServiceRow key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
