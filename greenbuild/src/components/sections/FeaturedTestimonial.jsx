import StarRating from '../ui/StarRating';
import styles from './FeaturedTestimonial.module.css';

const FEATURED = {
  quote: "Wanron Home Solutions didn't just construct a building for us — they partnered with us every step of the way. Their dedication to sustainability, their transparent communication, and their obsessive attention to craft set them apart from every other firm we've worked with. We wouldn't trust anyone else.",
  name: 'James Wilson',
  role: 'CEO, TechCore Solutions',
  project: 'Horizon Business Park',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
};

export default function FeaturedTestimonial() {
  return (
    <section className={styles.section} aria-label="Featured testimonial">
      <div className="container">
        <div className={styles.card}>

          {/* Large decorative quote mark */}
          <span className={styles.quoteIcon} aria-hidden="true">"</span>

          <div className={styles.inner}>
            {/* Text side */}
            <div className={styles.textSide}>
              <StarRating rating={5} />
              <blockquote className={styles.quote}>
                <p>{FEATURED.quote}</p>
              </blockquote>
              <footer className={styles.author}>
                <img
                  src={FEATURED.image}
                  alt={FEATURED.name}
                  className={styles.avatar}
                />
                <div>
                  <cite className={styles.name}>{FEATURED.name}</cite>
                  <p className={styles.role}>{FEATURED.role}</p>
                  <p className={styles.project}>
                    <span aria-hidden="true">🏗️</span> {FEATURED.project}
                  </p>
                </div>
              </footer>
            </div>

            {/* Stats aside */}
            <div className={styles.statsSide}>
              {[
                { num: '18mo', desc: 'Project duration' },
                { num: '< 1%', desc: 'Budget variance' },
                { num: '0',    desc: 'Safety incidents' },
                { num: '★ 5',  desc: 'Overall rating' },
              ].map(({ num, desc }) => (
                <div key={desc} className={styles.stat}>
                  <span className={styles.statNum}>{num}</span>
                  <span className={styles.statDesc}>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
