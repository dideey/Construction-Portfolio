import SectionLabel from '../ui/SectionLabel';
import styles from './InsightsPage.module.css';
import { Building_psychology, Mansionetee } from '../../data/content';

// ─── Sub-components ──────────────────────────────────────────────────────────

function RoofCard() {
  return (
    <article className={styles.roofCard}>
      <div className={styles.roofImageContainer}>
        <img
          src="/photos/commercial/roof.png"
          alt="Parts of a roof - construction details"
          className={styles.roofImage}
        />
      </div>
      <div className={styles.roofContent}>
        <h3 className={styles.roofTitle}>Understanding Roof Construction</h3>
        <p className={styles.roofDesc}>
          A comprehensive guide to roof components.
          Learn about the essential parts that make up a durable and functional roof structure.
        </p>
      </div>
    </article>
  );
}

function PsychologyCard({ id, title, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrap} aria-hidden="true">
        <span className={styles.icon}>{id}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </article>
  );
}

function MaisonetteCard({ title, description, paperwalldescription, constructioncostingdesc, photo, paperwallphoto }) {
  return (
    <article className={styles.maisonetteCard}>
      <h3 className={styles.maisonetteTitle}>{title}</h3>
      <p className={styles.maisonetteDesc}>{description}</p>

      <div className={styles.maisonetteSection}>
        <h4 className={styles.sectionTitle}>Parapet Walls</h4>
        <p className={styles.sectionDesc}>{paperwalldescription}</p>
        {paperwallphoto && (
          <img src={paperwallphoto} alt="Parapet wall" className={styles.roofImage} />
        )}
      </div>

      <div className={styles.maisonetteSection}>
        <h4 className={styles.sectionTitle}>Construction Costing</h4>
        <p className={styles.sectionDesc}>{constructioncostingdesc}</p>
      </div>

      {photo && (
        <img src={photo} alt="Maisonette" className={styles.maisonetteImage} />
      )}
    </article>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function InsightsPage() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.roofSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <SectionLabel>Roof Construction</SectionLabel>
            <h2 className={styles.sectionHeading}>Parts of a Roof</h2>
            <p className={styles.sectionSub}>
              Understanding the essential components of roof construction.
            </p>
          </div>

          <RoofCard />
        </div>
      </section>

      <section className={`section ${styles.psychologySection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <SectionLabel>Building Psychology</SectionLabel>
            <h2 className={styles.sectionHeading}>The Psychology of Building</h2>
            <p className={styles.sectionSub}>
              Essential insights for anyone considering construction.
            </p>
          </div>

          <div className={styles.grid}>
            {Building_psychology.map(item => (
              <PsychologyCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.maisonetteSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <SectionLabel>Maisonette Details</SectionLabel>
            <h2 className={styles.sectionHeading}>Modern Maisonette Construction</h2>
          </div>

          {Mansionetee.map(item => (
            <MaisonetteCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
