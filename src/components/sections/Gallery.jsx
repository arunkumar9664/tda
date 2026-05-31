import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { galleryItems, galleryCategories } from '../../data/gallery';
import styles from './Gallery.module.scss';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className={styles.section} aria-labelledby="gallery-title">
      <div className={styles.container}>
        <SectionTitle
          label="Gallery"
          title="Moments in Motion"
          subtitle="Performances, workshops, competitions, and the life behind every leap."
        />
        <h2 id="gallery-title" className="sr-only">
          Gallery
        </h2>

        <div className={styles.filters}>
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={filter === cat ? styles.active : ''}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.masonry}>
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                className={`${styles.item} ${item.tall ? styles.tall : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightbox(item)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className={styles.caption}>
                  <small>{item.category}</small>
                  {item.title}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.image} alt={lightbox.title} />
              <div>
                <span>{lightbox.category}</span>
                <h3>{lightbox.title}</h3>
              </div>
              <button type="button" aria-label="Close preview" onClick={() => setLightbox(null)}>
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
