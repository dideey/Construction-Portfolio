import { useState } from 'react';
import { PROJECTS_EXTENDED, PROJECTS_CATEGORIES } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import styles from './ProjectsGallery.module.css';

function ProjectCard({ project, featured = false }) {
  const { title, category, location, year, area, projectvalue, description, tags, image } = project;

  return (
    <article className={`${styles.card} ${featured ? styles.cardFeatured : ''}`}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.image} loading="lazy" />

        {/* Gradient overlay with info — matches Figma's project card hover */}
        <div className={styles.overlay}>
          <div className={styles.overlayTop}>
            <span className={styles.category}>{category}</span>
            {featured && <span className={styles.featuredBadge}>Featured</span>}
          </div>
          <div className={styles.overlayBottom}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{description}</p>
            <div className={styles.tags}>
              {tags.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card footer — always visible */}
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <h3 className={styles.footerTitle}>{title}</h3>
          <p className={styles.footerMeta}>
            <span>📍 {location}</span>
            <span className={styles.dot}>·</span>
            <span>{year}</span>

            {area && (
              <>
                <span className={styles.dot}>·</span>
                <span>{area}</span>
              </>
            )}

            {projectvalue && (
              <>
                <span className={styles.dot}>·</span>
                <span>{projectvalue}</span>
              </>
            )}
          </p>
          
        </div>
      </div>
    </article>
  );
}

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? PROJECTS_EXTENDED
    : PROJECTS_EXTENDED.filter(p => p.category === activeFilter);

  const featured = filtered.filter(p => p.featured);
  const rest     = filtered.filter(p => !p.featured);

  return (
    <section className={styles.section} id="gallery">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <SectionLabel centered>Portfolio</SectionLabel>
          <h2 className={styles.heading}>Our Featured Projects</h2>
        </div>

        {/* Category filter tabs — matches Figma's button row style */}
        <div className={styles.filters} role="tablist" aria-label="Filter projects by category">
          {PROJECTS_CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured projects — large 2-col row matching Figma's hero project display */}
        {featured.length > 0 && (
          <div className={styles.featuredGrid}>
            {featured.map(p => (
              <ProjectCard key={p.id} project={p} featured />
            ))}
          </div>
        )}

        {/* Rest of projects — 3-col grid */}
        {rest.length > 0 && (
          <>
            {featured.length > 0 && (
              <div className={styles.moreDivider}>
                <span>More Projects</span>
              </div>
            )}
            <div className={styles.grid}>
              {rest.map(p => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className={styles.empty}>
            <p>No projects in this category yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}
