import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../data/site';
import Logo from '../ui/Logo';
import NavLink from '../ui/NavLink';
import Button from '../ui/Button';
import styles from './Header.module.scss';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isInner = !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header} ${scrolled || isInner ? styles.scrolled : ''} ${isInner ? styles.inner : ''}`}
    >
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <motion.div whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 400 }}>
            <Logo variant="header" />
          </motion.div>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </NavLink>
          ))}
          <NavLink href="/performances" className={styles.navLink}>
            Performances
          </NavLink>
        </nav>

        <Button to="/#pricing" variant="gold" className={styles.cta}>
          Join Academy
        </Button>

        <button
          type="button"
          className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          >
            <nav aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink href={link.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <NavLink href="/performances" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                  Performances
                </NavLink>
              </motion.div>
            </nav>
            <Button to="/#pricing" variant="gold" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
              Join Academy
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
