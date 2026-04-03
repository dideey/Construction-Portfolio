import styles from './StarRating.module.css';

export default function StarRating({ rating = 5 }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? styles.filled : styles.empty}>★</span>
      ))}
    </div>
  );
}
