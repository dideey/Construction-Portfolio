import { PROPERTIES_HERO } from '../../data/content';
import styles from './PropertiesHero.module.css';

const BG = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85';

export default function PropertiesHero() {
  return (
    <section className={styles.hero} aria-label="Properties hero">
      <div className={styles.bg}>
        <img src={BG} alt="Luxury GreenBuild property" className={styles.bgImg} width="1600" height="900" />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>{PROPERTIES_HERO.eyebrow}</p>
        <h1 className={styles.heading}>
          {PROPERTIES_HERO.heading.split('\\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h1>
        <p className={styles.sub}>{PROPERTIES_HERO.sub}</p>

        {/* Trust badges */}
        <div className={styles.badges}>
          {['10-Year Warranty', 'GreenBuild Certified', 'Viewing in 48hrs'].map(b => (
            <span key={b} className={styles.badge}>
              <span aria-hidden="true">✓</span> {b}
            </span>
          ))}
        </div>

        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="#/" className={styles.breadLink}>Home</a>
          <span aria-hidden="true">›</span>
          <span>Properties for Sale</span>
        </nav>
      </div>
    </section>
  );
}
