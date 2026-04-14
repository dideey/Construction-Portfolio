import { ABOUT_HERO } from '../../data/content';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.hero} aria-label="About us hero">
      {/* Background */}
      <div className={styles.bg}>
        <img src={ABOUT_HERO.image} alt="Construction team at work" className={styles.bgImg} width="1600" height="900" fetchpriority="high" />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>{ABOUT_HERO.eyebrow}</p>
        <h1 className={styles.heading}>
          {ABOUT_HERO.heading.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h1>
        <p className={styles.sub}>{ABOUT_HERO.sub}</p>

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/" className={styles.breadLink}>Home</a>
          <span aria-hidden="true">›</span>
          <span>About Us</span>
        </nav>
      </div>
    </section>
  );
}
