import Link from 'next/link';
import { useRouter } from 'next/router';
import { navBar } from '@common/navigation';
import styles from '@styles/NavBar.module.css';

/**
 * It's a function that returns a Navbar
 * @returns A JSX element
 */
function NavBar(): JSX.Element {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navBar.map((links) => (
            <li key={links.id}>
              <Link
                href={links.href}
                target={links.external ? '_blank' : '_self'}
                className={`${router.pathname === links.href ? styles.primary : styles.secondary}`}
              >
                <span style={{ color: '#FFFFFF' }}>{links.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
