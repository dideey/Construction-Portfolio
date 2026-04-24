import { ABOUT_STORY } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import styles from './OurStory.module.css';

export default function OurStory() {
  return (
    <section className={`section ${styles.story}`} id="story">
      <div className={`container ${styles.inner}`}>

        {/* Image side */}
        <div className={styles.imageWrap}>
          <img
            src={ABOUT_STORY.image}
            alt="GreenBuild team on construction site"
            className={styles.img}
            loading="lazy"
          width="900" height="1125"
          />
          {/* Decorative accent */}
          <div className={styles.accent} aria-hidden="true" />
        </div>

        {/* Text side */}
        <div className={styles.textWrap}>
          <SectionLabel>{ABOUT_STORY.eyebrow}</SectionLabel>
          <h2 className={styles.heading}>{ABOUT_STORY.heading}</h2>
          <div className={styles.paragraphs}>
            {ABOUT_STORY.paragraphs.map((p, i) => {
              const subheadingKey = i === 0 ? 'subheading' : `subheading${i}`;
              const subheading = ABOUT_STORY[subheadingKey];
              return (
                <div key={i}>
                  {subheading && <h3 className={styles.subheading}>{subheading}</h3>}
                  <p className={styles.body}>{p}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
