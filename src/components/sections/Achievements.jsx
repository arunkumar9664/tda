import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { achievements } from '../../data/achievements';
import { fadeUpStagger, fadeUpItem } from '../../utils/motion';
import styles from './Achievements.module.scss';

export default function Achievements() {
  return (
    <section className={styles.section} aria-labelledby="achievements-title">
      <div className={styles.container}>
        <SectionTitle
          label="Global Achievements"
          title="Championship Legacy"
          subtitle="Our students and faculty continue to raise the bar on international stages."
          align="left"
        />
        <h2 id="achievements-title" className="sr-only">
          Global Achievements
        </h2>
        <motion.div
          className={styles.timeline}
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {achievements.map((item) => (
            <motion.article key={item.year + item.title} className={styles.item} variants={fadeUpItem}>
              <div className={styles.year}>{item.year}</div>
              <motion.div
                className={styles.dot}
                aria-hidden="true"
                whileInView={{ scale: [1, 1.4, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className={styles.content}
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
