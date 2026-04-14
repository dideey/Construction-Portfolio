import { SERVICES_PROCESS } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import styles from './ServicesProcess.module.css';

export default function ServicesProcess() {
  return (
    <section className={`${styles.section}`} id="process">
      <div className="container">
        <div className={styles.header}>
          <SectionLabel centered>How We Work</SectionLabel>
          <h2 className={styles.heading}>Our Construction Process</h2>
          <p className={styles.sub}>
            A clear, transparent process from first conversation to final handover.
          </p>
        </div>

        <div className={styles.steps}>
          {SERVICES_PROCESS.map(({ step, title, description }, i) => (
            <div key={step} className={styles.step}>
              {/* Connector line */}
              {i < SERVICES_PROCESS.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}

              <div className={styles.stepNum} aria-hidden="true">{step}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepDesc}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
