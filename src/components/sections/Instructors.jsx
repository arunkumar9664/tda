import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { instructors } from '../../data/instructors';
import { fadeUpStagger, springPop, springSoft } from '../../utils/motion';
import styles from './Instructors.module.scss';

export default function Instructors() {
  return (
    <section id="instructors" className={styles.section} aria-labelledby="instructors-title">
      <div className={styles.container}>
        <SectionTitle
          label="Meet The Masters"
          title="World-Class Faculty"
          subtitle="Jaipur-based masters and guest artists trained across India — dedicated to your growth."
        />
        <h2 id="instructors-title" className="sr-only">
          Meet The Masters
        </h2>
        <motion.div
          className={styles.grid}
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {instructors.map((person) => (
            <motion.article
              key={person.id}
              className={styles.card}
              variants={springPop}
              whileHover={{ y: -14, transition: springSoft }}
            >
              <div className={styles.imageWrap}>
                <motion.img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={styles.hoverPanel}>
                  <p>{person.bio}</p>
                  <span className={styles.spec}>{person.specialization}</span>
                </div>
              </div>
              <div className={styles.info}>
                <h3>{person.name}</h3>
                <p className={styles.role}>{person.role}</p>
                <ul>
                  <li>
                    <strong>Experience:</strong> {person.experience}
                  </li>
                  <li>
                    <strong>Awards:</strong> {person.awards}
                  </li>
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
