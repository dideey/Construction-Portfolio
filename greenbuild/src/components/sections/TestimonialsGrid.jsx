import { useState } from 'react';
import { TESTIMONIALS_EXTENDED, TESTIMONIAL_CATEGORIES } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import StarRating from '../ui/StarRating';
import styles from './TestimonialsGrid.module.css';

function TestimonialCard({ quote, name, role, company, project, rating, category }) {
  return (
    <article className={styles.card}>
      {/* Top row: stars + category tag */}
      <div className={styles.cardTop}>
        <StarRating rating={rating} />
        <span className={styles.tag}>{category}</span>
      </div>

      {/* Quote */}
      <blockquote className={styles.quote}>
        <p>"{quote}"</p>
      </blockquote>

      {/* Project */}
      <div className={styles.project}>
        <span className={styles.projectIcon} aria-hidden="true">🏗️</span>
        <span className={styles.projectName}>{project}</span>
      </div>

      {/* Divider */}
      <hr className={styles.divider} />

      {/* Author */}
      <footer className={styles.author}>
        <div className={styles.avatar} aria-hidden="true">
          {name.charAt(0)}
        </div>
        <div className={styles.authorInfo}>
          <cite className={styles.name}>{name}</cite>
          <p className={styles.roleLine}>
            {role}{company ? `, ${company}` : ''}
          </p>
        </div>
      </footer>
    </article>
  );
}

export default function TestimonialsGrid() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? TESTIMONIALS_EXTENDED
    : TESTIMONIALS_EXTENDED.filter(t => t.category === active);

  return (
    <section className={`section ${styles.section}`} id="testimonials-grid">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <SectionLabel centered>Client Stories</SectionLabel>
          <h2 className={styles.heading}>Stories From Our Clients</h2>
        </div>

        {/* Filter tabs */}
        <div className={styles.filters} role="tablist" aria-label="Filter testimonials by category">
          {TESTIMONIAL_CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map(t => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
