import Link from 'next/link';
import styles from '@styles/Header.module.css';
import NavBar from '@components/center/NavBar';

/**
 * It returns a header element with a logo, a title, and a navigation bar
 * @returns A JSX element
 */
function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <div className={styles.name}>
        <Link href="/" style={{ color: '#FFFFFF' }}>
          SHU
        </Link>
      </div>
      {/* NAVIGATION BAR */}
      <NavBar />
    </header>
  );
}

export default Header;
