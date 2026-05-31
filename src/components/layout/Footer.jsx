import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { site, navLinks } from '../../data/site';
import Logo from '../ui/Logo';
import { programs } from '../../data/programs';
import styles from './Footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <Logo variant="footer" />
            <div>
              <strong>{site.name}</strong>
              <p>{site.locationTag}</p>
            </div>
          </Link>
          <p className={styles.tagline}>{site.altTagline} — serving artists across Jaipur and Rajasthan.</p>
          <div className={styles.social}>
            {Object.entries(site.social).map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.links}>
          <div>
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link to={`/${l.href}`}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/performances">Performances</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Dance Programs</h4>
            <ul>
              {programs.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <Link to={`/programs/${p.id}`}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.newsletter}>
            <h4>Newsletter</h4>
            <p>Receive performance invites, masterclass alerts, and academy news.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" aria-label="Email for newsletter" />
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          &copy; {year} {site.name}. All rights reserved.
        </p>
        <p>Crafted for artists who dare to move the world.</p>
      </div>
    </footer>
  );
}
