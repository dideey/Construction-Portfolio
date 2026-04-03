import { TESTIMONIALS } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import StarRating from '../ui/StarRating';
import styles from './TestimonialsSection.module.css';

function TestimonialCard({ quote, name, role, rating }) {
  return (
    <blockquote className={styles.card}>
      <StarRating rating={rating} />
      <p className={styles.quote}>"{quote}"</p>
      <footer className={styles.author}>
        <div className={styles.avatar} aria-hidden="true">
          {name.charAt(0)}
        </div>
        <div>
          <cite className={styles.name}>{name}</cite>
          <p className={styles.role}>{role}</p>
        </div>
      </footer>
    </blockquote>
  );
}

export default function TestimonialsSection() {
  return (
    <section className={`section ${styles.testimonials}`} id="testimonials">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <SectionLabel centered>Testimonials</SectionLabel>
          <h2 className={styles.heading}>What Our Clients Say</h2>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {TESTIMONIALS.map(t => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
