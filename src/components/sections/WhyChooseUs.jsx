import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { features } from '../../data/features';
import { fadeUpStagger, springPop, springSoft } from '../../utils/motion';
import styles from './WhyChooseUs.module.scss';

export default function WhyChooseUs() {
  return (
    <section className={styles.section} aria-labelledby="why-title">
      <div className={styles.container}>
        <SectionTitle
          label="Why Choose Us"
          title="The Tanya Difference"
          subtitle="Every detail — from faculty pedigree to floor quality — reflects our commitment to excellence."
          light
        />
        <h2 id="why-title" className="sr-only">
          Why Choose Us
        </h2>
        <motion.div
          className={styles.grid}
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              className={styles.card}
              variants={springPop}
              whileHover={{ y: -10, transition: springSoft }}
            >
              <motion.span
                className={styles.icon}
                aria-hidden="true"
                whileHover={{ scale: 1.25, rotate: 12 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {feature.icon}
              </motion.span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
