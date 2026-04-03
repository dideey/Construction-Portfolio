import { SERVICES } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import styles from './ServicesSection.module.css';

function ServiceCard({ title, description, icon }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrap} aria-hidden="true">
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <SectionLabel centered>Our Services</SectionLabel>
          <h2 className={styles.heading}>Comprehensive Construction Solutions</h2>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {SERVICES.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
