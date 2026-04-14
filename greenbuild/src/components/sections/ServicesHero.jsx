import { SERVICES_HERO } from '../../data/content';
import styles from './ServicesHero.module.css';

const BG = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85';

export default function ServicesHero() {
  return (
    <section className={styles.hero} aria-label="Services hero">
      <div className={styles.bg}>
        <img src={BG} alt="Construction site" className={styles.bgImg} width="1600" height="900" fetchpriority="high" />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>{SERVICES_HERO.eyebrow}</p>
        <h1 className={styles.heading}>
          {SERVICES_HERO.heading.split('\\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h1>
        <p className={styles.sub}>{SERVICES_HERO.sub}</p>

        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="#/" className={styles.breadLink}>Home</a>
          <span aria-hidden="true">›</span>
          <span>Services</span>
        </nav>
      </div>
    </section>
  );
}
