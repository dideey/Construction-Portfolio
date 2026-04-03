import { COMPANY, ABOUT_FEATURES } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import styles from './AboutSection.module.css';

const ABOUT_IMG = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80';

export default function AboutSection() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className={`container ${styles.inner}`}>

        {/* Image side */}
        <div className={styles.imageWrap}>
          <img
            src={ABOUT_IMG}
            alt="Modern interior designed by GreenBuild"
            className={styles.img}
          />
          <div className={styles.statCard}>
            <span className={styles.statNum}>{COMPANY.yearsExp}</span>
            <span className={styles.statLabel}>Years<br />Experience</span>
          </div>
        </div>

        {/* Text side */}
        <div className={styles.textWrap}>
          <SectionLabel>Who We Are</SectionLabel>

          <h2 className={styles.heading}>
            Crafting Sustainable Spaces<br />
            with Unmatched Quality
          </h2>

          <p className={styles.body}>
            GreenBuild is a premier construction firm dedicated to high-quality craftsmanship
            and sustainable building practices. Our team of experts ensures every project is
            delivered with precision and integrity, focusing on durability and aesthetic excellence.
          </p>

          <ul className={styles.features}>
            {ABOUT_FEATURES.map(({ label }) => (
              <li key={label} className={styles.feature}>
                <span className={styles.featureIcon} aria-hidden="true">✓</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <Button href="#contact" size="lg">
            Work With Us →
          </Button>
        </div>
      </div>
    </section>
  );
}
