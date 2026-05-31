import { Link, useLocation } from 'react-router-dom';
import styles from './NavLink.module.scss';

export default function NavLink({ href, children, className = '', onClick }) {
  const location = useLocation();
  const isHash = href.startsWith('#');
  const to = isHash ? `/${href}` : href;
  const isActive = isHash && location.pathname === '/' && location.hash === href;

  return (
    <Link
      to={to}
      className={`${styles.link} ${className} ${isActive ? styles.active : ''}`.trim()}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
