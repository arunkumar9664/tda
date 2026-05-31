import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { testimonials } from '../../data/testimonials';
import styles from './Testimonials.module.scss';

function Stars({ count }) {
  return (
    <span className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
    </span>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.container}>
        <SectionTitle
          label="Student Success"
          title="Stories That Inspire"
          subtitle="Real journeys from students who turned passion into professional achievement."
          light
        />
        <h2 id="testimonials-title" className="sr-only">
          Student Success Stories
        </h2>

        <div className={styles.carousel}>
          <AnimatePresence mode="wait">
            <motion.article
              key={current.id}
              className={styles.slide}
              initial={{ opacity: 0, x: 60, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -60, filter: 'blur(8px)' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.videoFrame}>
                <img src={current.image} alt={current.name} />
                <div className={styles.playOverlay}>
                  <span className={styles.playBtn} aria-hidden="true">
                    ▶
                  </span>
                  <span>Success Story</span>
                </div>
              </div>
              <div className={styles.content}>
                <Stars count={current.rating} />
                <blockquote>&ldquo;{current.quote}&rdquo;</blockquote>
                <p className={styles.journey}>{current.journey}</p>
                <footer>
                  <strong>{current.name}</strong>
                  <span>{current.program}</span>
                </footer>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className={styles.dots}>
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                className={i === index ? styles.active : ''}
                aria-label={`View testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
