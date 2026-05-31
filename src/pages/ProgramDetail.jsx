import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import { getProgramById, programs } from '../data/programs';
import { fadeUp, fadeUpStagger, fadeUpItem } from '../utils/motion';
import styles from './ProgramDetail.module.scss';

export default function ProgramDetail() {
  const { id } = useParams();
  const program = getProgramById(id);

  if (!program) return <Navigate to="/404" replace />;

  const related = programs.filter((p) => p.id !== program.id).slice(0, 3);

  return (
    <article className={styles.page}>
      <PageHero
        label="Dance Program"
        title={program.title}
        subtitle={program.tagline}
        image={program.heroImage}
        breadcrumb={program.title}
      />

      <section className={styles.intro}>
        <motion.div
          className={styles.introGrid}
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div className={styles.meta} variants={fadeUpItem}>
            <div>
              <span>Level</span>
              <strong>{program.level}</strong>
            </div>
            <div>
              <span>Duration</span>
              <strong>{program.duration}</strong>
            </div>
            <div>
              <span>Classes</span>
              <strong>{program.classesPerWeek}</strong>
            </div>
            <div>
              <span>Instructor</span>
              <strong>{program.instructor}</strong>
            </div>
          </motion.div>
          <motion.div className={styles.copy} variants={fadeUpItem}>
            <p className={styles.lead}>{program.description}</p>
            <p>{program.longDescription}</p>
            <Button to="/#pricing" variant="primary">
              View Membership Plans
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.curriculum} aria-labelledby="curriculum-title">
        <div className={styles.inner}>
          <motion.h2
            id="curriculum-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Curriculum Highlights
          </motion.h2>
          <motion.ul
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {program.curriculum.map((item) => (
              <motion.li key={item} variants={fadeUpItem}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <motion.aside
            className={styles.schedule}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Schedule</h3>
            <p>{program.schedule}</p>
            <p className={styles.note}>{program.tuitionNote}</p>
          </motion.aside>
        </div>
      </section>

      <section className={styles.related}>
        <div className={styles.inner}>
          <h2>Explore More Programs</h2>
          <div className={styles.relatedGrid}>
            {related.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={`/programs/${p.id}`} className={styles.relatedCard}>
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <span>{p.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <Button to="/#contact" variant="outline" className={styles.enroll}>
            Enroll in {program.title}
          </Button>
        </div>
      </section>
    </article>
  );
}
