import styles from './Button.module.css';

/**
 * Button — reusable CTA component
 * @param {'primary'|'secondary'|'outline'|'ghost'} variant
 * @param {'sm'|'md'|'lg'} size
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const cls = [styles.btn, styles[variant], styles[size], className].join(' ');

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
