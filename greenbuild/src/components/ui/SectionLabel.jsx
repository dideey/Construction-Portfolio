import styles from './SectionLabel.module.css';

export default function SectionLabel({ children, centered = false }) {
  return (
    <span className={`${styles.label} ${centered ? styles.centered : ''}`}>
      {children}
    </span>
  );
}
