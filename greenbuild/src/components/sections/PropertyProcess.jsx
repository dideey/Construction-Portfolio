import { PROPERTY_PROCESS } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import styles from './PropertyProcess.module.css';

export default function PropertyProcess() {
  return (
    <section className={styles.section} id="buying-process">
      <div className="container">

        <div className={styles.header}>
          <SectionLabel centered>How It Works</SectionLabel>
          <h2 className={styles.heading}>Buying a Wanron HOme Solutions Property</h2>
          <p className={styles.sub}>
            We've made buying your dream home as simple and transparent as possible.
            No hidden fees, no surprises.
          </p>
        </div>

        <div className={styles.steps}>
          {PROPERTY_PROCESS.map(({ step, icon, title, desc }, i) => (
            <div key={step} className={styles.step}>
              {/* Connector */}
              {i < PROPERTY_PROCESS.length - 1 && (
                <div className={styles.connector} aria-hidden="true">→</div>
              )}
              <div className={styles.stepTop}>
                <div className={styles.stepNum}>{step}</div>
                <span className={styles.stepIcon} aria-hidden="true">{icon}</span>
              </div>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
