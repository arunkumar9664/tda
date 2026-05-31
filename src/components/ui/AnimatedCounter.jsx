import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import styles from './AnimatedCounter.module.scss';

function CounterDigits({ value, suffix, active }) {
  const spring = useSpring(0, { stiffness: 50, damping: 18 });
  const display = useTransform(spring, (v) => Math.floor(v).toLocaleString());
  const [text, setText] = useState('0');

  useEffect(() => {
    if (active) spring.set(value);
  }, [active, spring, value]);

  useEffect(() => display.on('change', (v) => setText(v)), [display]);

  return (
    <span className={styles.number}>
      {text}
      {suffix}
    </span>
  );
}

export default function AnimatedCounter({ value, suffix = '', label }) {
  const [ref, isInView] = useInView({ threshold: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={styles.stat}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <CounterDigits value={value} suffix={suffix} active={isInView} />
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
}
