import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <section className={styles.page}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.code}>404</span>
        <h1>This Stage Is Empty</h1>
        <p>The page you're looking for may have moved or doesn't exist.</p>
        <div className={styles.actions}>
          <Button to="/" variant="primary">
            Back to Home
          </Button>
          <Link to="/performances" className={styles.link}>
            View Performances
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
