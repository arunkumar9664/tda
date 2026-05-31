import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blurIn, heroContainer, heroChild } from '../../utils/motion';
import styles from './PageHero.module.scss';

export default function PageHero({ label, title, subtitle, image, breadcrumb }) {
  return (
    <section className={styles.hero} aria-label={title}>
      <motion.img
        src={image}
        alt=""
        className={styles.bg}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className={styles.overlay} />
      <motion.div
        className={styles.content}
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        {breadcrumb && (
          <motion.nav className={styles.breadcrumb} variants={heroChild}>
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>{breadcrumb}</span>
          </motion.nav>
        )}
        <motion.span className={styles.label} variants={blurIn}>
          {label}
        </motion.span>
        <motion.h1 variants={heroChild}>{title}</motion.h1>
        {subtitle && <motion.p variants={heroChild}>{subtitle}</motion.p>}
      </motion.div>
    </section>
  );
}
