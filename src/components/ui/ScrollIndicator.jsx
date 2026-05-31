import { motion } from 'framer-motion';
import styles from './ScrollIndicator.module.scss';

export default function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      className={styles.indicator}
      aria-label="Scroll to about section"
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        className={styles.text}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll
      </motion.span>
      <div className={styles.mouse}>
        <motion.span
          className={styles.wheel}
          animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.a>
  );
}
