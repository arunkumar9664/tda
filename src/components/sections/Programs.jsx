import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { programs } from '../../data/programs';
import { fadeUpStagger, springPop, springSoft, viewportOnce } from '../../utils/motion';
import styles from './Programs.module.scss';

export default function Programs() {
  return (
    <section id="programs" className={styles.programs} aria-labelledby="programs-title">
      <div className={styles.container}>
        <SectionTitle
          label="Dance Programs"
          title="Find Your Rhythm"
          subtitle="Eight programs for Jaipur students — from classical roots to Bollywood, hip-hop, and competition stages."
        />
        <h2 id="programs-title" className="sr-only">
          Dance Programs
        </h2>
        <motion.div
          className={styles.grid}
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {programs.map((program) => (
            <motion.article
              key={program.id}
              className={styles.card}
              variants={springPop}
              whileHover={{ y: -12, transition: springSoft }}
            >
              <div className={styles.cardMotion}>
                <Link to={`/programs/${program.id}`} className={styles.cardLink}>
                  <div className={styles.image}>
                    <motion.img
                      src={program.image}
                      alt={`${program.title} dance program`}
                      loading="lazy"
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className={styles.overlay}>
                      <span className={styles.level}>{program.level}</span>
                      <span className={styles.duration}>{program.duration}</span>
                    </div>
                  </div>
                  <div className={styles.body}>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <span className={styles.link}>View Program →</span>
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
