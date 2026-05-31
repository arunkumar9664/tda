import { motion } from 'framer-motion';
import { easeOutExpo } from '../../utils/motion';
import styles from './TextReveal.module.scss';

export default function TextReveal({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  splitBy = 'words',
}) {
  const parts = splitBy === 'chars' ? text.split('') : text.split(' ');

  return (
    <Tag className={`${styles.reveal} ${className}`.trim()} aria-label={text}>
      {parts.map((part, i) => (
        <span key={`${part}-${i}`} className={styles.wordWrap}>
          <motion.span
            className={styles.word}
            initial={{ opacity: 0, y: '100%', rotateX: -40 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              delay: delay + i * (splitBy === 'chars' ? 0.03 : 0.08),
              duration: 0.75,
              ease: easeOutExpo,
            }}
          >
            {part}
            {splitBy === 'words' && i < parts.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
