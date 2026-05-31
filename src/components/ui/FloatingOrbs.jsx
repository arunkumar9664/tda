import { motion } from 'framer-motion';
import styles from './FloatingOrbs.module.scss';

const orbs = [
  { size: 280, x: '10%', y: '20%', delay: 0, duration: 8 },
  { size: 180, x: '75%', y: '15%', delay: 1, duration: 10 },
  { size: 120, x: '60%', y: '70%', delay: 2, duration: 7 },
];

export default function FloatingOrbs() {
  return (
    <div className={styles.orbs} aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.span
          key={i}
          className={styles.orb}
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y }}
          animate={{
            y: [0, -24, 0],
            x: [0, 12, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
