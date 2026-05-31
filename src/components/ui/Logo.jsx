import { site } from '../../data/site';
import styles from './Logo.module.scss';

export default function Logo({ variant = 'header', showText = true, className = '' }) {
  const src = variant === 'full' ? '/logo-full.svg' : '/logo.svg';

  return (
    <span className={`${styles.logo} ${styles[variant]} ${className}`.trim()}>
      <img src={src} alt={`${site.name} logo`} className={styles.mark} width={variant === 'full' ? 200 : 44} height={variant === 'full' ? 44 : 44} />
      {showText && variant !== 'full' && (
        <span className={styles.text}>
          <strong>{site.shortName}</strong>
          <small>{site.locationTag}</small>
        </span>
      )}
    </span>
  );
}
