import { COMPANY } from '../../data/content';
import Button from '../ui/Button';
import styles from './HeroSection.module.css';

const HERO_IMG = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home" aria-label="Hero">
      {/* Background image */}
      <div className={styles.bg}>
        <img src={HERO_IMG} alt="Construction site aerial view" className={styles.bgImg} width="1600" height="900" fetchpriority="high" />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>Est. {COMPANY.founded}</p>

          <h1 className={styles.heading}>
            Building Dreams<br />
            <em>through Construction</em>
          </h1>

          <p className={styles.sub}>{COMPANY.subTagline}</p>

          <div className={styles.actions}>
            <Button href="#contact" size="lg" variant="secondary">
              Request a Quote →
            </Button>
            <Button href="#projects" size="lg" variant="outline">
              View Projects
            </Button>
          </div>
        </div>

        {/* Floating stat badge */}
        <div className={styles.badge} aria-label="5+ Years of Experience">
          <span className={styles.badgeNum}>{COMPANY.yearsExp}</span>
          <span className={styles.badgeLabel}>Years<br />Experience</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}
