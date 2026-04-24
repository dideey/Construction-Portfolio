import { LEGAL_DOCS } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import styles from './LegalDocs.module.css';

function DocumentCard({ title, caption, image }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.image} loading="lazy" />
        <div className={styles.imageOverlay} aria-hidden="true" />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.caption}>{caption}</p>
      </div>
    </article>
  );
}

export default function LegalDocs() {
  return (
    <section className={`section ${styles.docs}`} id="legal-docs">
      <div className="container">
        <div className={styles.header}>
          <SectionLabel centered>Legal Documents</SectionLabel>
          <h2 className={styles.heading}>Verified Construction Credentials</h2>
          <p className={styles.sub}>
            Browse official paperwork and certificates that prove our compliance, permits, and project approvals.
          </p>
        </div>

        <div className={styles.grid}>
          {LEGAL_DOCS.map(doc => (
            <DocumentCard key={doc.id} {...doc} />
          ))}
        </div>
      </div>
    </section>
  );
}
