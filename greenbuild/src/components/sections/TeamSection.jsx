import { TEAM_MEMBERS } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import styles from './TeamSection.module.css';

function TeamCard({ name, role, bio, image }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={name} className={styles.image} loading="lazy" />
        <div className={styles.imageOverlay} aria-hidden="true" />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <p className={styles.bio}>{bio}</p>
      </div>
    </article>
  );
}

export default function TeamSection() {
  return (
    <section className={`section ${styles.team}`} id="team">
      <div className="container">
        <div className={styles.header}>
          <SectionLabel centered>The People Behind the Projects</SectionLabel>
          <h2 className={styles.heading}>Meet Our Leadership Team</h2>
          <p className={styles.sub}>
            Decades of combined expertise, united by a shared passion for building the extraordinary.
          </p>
        </div>

        <div className={styles.grid}>
          {TEAM_MEMBERS.map(member => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
