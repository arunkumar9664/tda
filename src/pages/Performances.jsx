import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import { performances } from '../data/performances';
import { fadeUp, fadeUpStagger, fadeUpItem } from '../utils/motion';
import styles from './Performances.module.scss';

export default function Performances() {
  const [active, setActive] = useState(performances[0]);
  const featured = performances.find((p) => p.featured) || performances[0];

  return (
    <div className={styles.page}>
      <PageHero
        label="Performances"
        title="Watch Our Artists Shine"
        subtitle="Gala nights, showcases, and championship highlights from Tanya Dance Academy."
        image={featured.image}
        breadcrumb="Performances"
      />

      <section className={styles.featured} aria-labelledby="featured-title">
        <motion.div
          className={styles.featuredInner}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={styles.videoWrap}>
            {active.videoUrl ? (
              <video
                key={active.id}
                src={active.videoUrl}
                poster={active.image}
                controls
                playsInline
                className={styles.video}
              />
            ) : (
              <img src={active.image} alt={active.title} />
            )}
          </div>
          <div className={styles.featuredInfo}>
            <h2 id="featured-title">{active.title}</h2>
            <p className={styles.meta}>
              {active.date} · {active.venue}
            </p>
            <p>{active.description}</p>
            <Button to="/#events" variant="primary">
              Upcoming Events
            </Button>
          </div>
        </motion.div>
      </section>

      <section className={styles.gridSection} aria-labelledby="all-performances">
        <div className={styles.container}>
          <motion.h2
            id="all-performances"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Performance Archive
          </motion.h2>
          <motion.div
            className={styles.grid}
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {performances.map((perf) => (
              <motion.button
                key={perf.id}
                type="button"
                className={`${styles.card} ${active.id === perf.id ? styles.active : ''}`}
                variants={fadeUpItem}
                whileHover={{ y: -6 }}
                onClick={() => setActive(perf)}
              >
                <img src={perf.image} alt={perf.title} loading="lazy" />
                <div className={styles.cardBody}>
                  <span>{perf.date}</span>
                  <h3>{perf.title}</h3>
                  <p>{perf.venue}</p>
                </div>
                {perf.featured && <span className={styles.badge}>Featured</span>}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.section
            className={styles.cta}
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>Ready to take the stage?</p>
            <Button to="/#pricing" variant="gold">
              Join the Academy
            </Button>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
