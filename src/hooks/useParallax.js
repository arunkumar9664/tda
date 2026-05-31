import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function useParallax(offset = 80) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return { ref, y, scale, opacity };
}
