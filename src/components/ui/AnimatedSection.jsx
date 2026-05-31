import { motion } from 'framer-motion';
import { fadeUp, fadeUpStagger, viewportOnce } from '../../utils/motion';

export default function AnimatedSection({
  children,
  className = '',
  stagger = false,
  delay = 0,
  as = 'div',
}) {
  const Component = motion[as] || motion.div;
  const variants = stagger ? fadeUpStagger : fadeUp;

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay ? { delayChildren: delay } : undefined}
    >
      {children}
    </Component>
  );
}
