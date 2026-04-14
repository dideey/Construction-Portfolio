import { PROJECTS } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import styles from './ProjectsSection.module.css';

function ProjectCard({ title, category, description, image }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.image} loading="lazy" />
        <div className={styles.overlay}>
          <span className={styles.category}>{category}</span>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDesc}>{description}</p>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">

        {/* Header row */}
        <div className={styles.header}>
          <div className={styles.headerText}>
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className={styles.heading}>Featured Projects</h2>
          </div>
          <Button href="#/projects" variant="ghost" size="md">
            View All Projects →
          </Button>
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
