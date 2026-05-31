import { motion } from 'framer-motion';
import { blurIn, fadeUpStagger, fadeUpItem, viewportOnce } from '../../utils/motion';
import styles from './SectionTitle.module.scss';

export default function SectionTitle({ label, title, subtitle, light = false, align = 'center' }) {
  return (
    <motion.header
      className={`${styles.header} ${styles[align]} ${light ? styles.light : ''}`}
      variants={fadeUpStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {label && (
        <motion.div className={styles.labelWrap} variants={fadeUpItem}>
          <motion.span
            className={styles.labelLine}
            variants={blurIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          />
          <span className={styles.label}>{label}</span>
        </motion.div>
      )}
      <motion.h2 className={styles.title} variants={blurIn}>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p className={styles.subtitle} variants={fadeUpItem}>
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  );
}
