import { PROJECTS_HERO } from '../../data/content';
import styles from './ProjectsHero.module.css';

const BG = 'https://i.pinimg.com/1200x/48/05/05/480505da4577c3030a7c90fed197332c.jpg';

export default function ProjectsHero() {
  return (
    <section className={styles.hero} aria-label="Projects hero">
      <div className={styles.bg}>
        <img src={BG} alt="Featured project" className={styles.bgImg} width="1600" height="900" fetchpriority="high" />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>{PROJECTS_HERO.eyebrow}</p>
        <h1 className={styles.heading}>
          {PROJECTS_HERO.heading.split('\\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h1>
        <p className={styles.sub}>{PROJECTS_HERO.sub}</p>

        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="#/" className={styles.breadLink}>Home</a>
          <span aria-hidden="true">›</span>
          <span>Projects</span>
        </nav>
      </div>
    </section>
  );
}
