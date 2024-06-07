import styles from '@styles/Footer.module.css';

/**
 * It returns a footer with a link to my website
 * @returns JSX.Element
 */
function Footer(): JSX.Element {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.box}>
          <p className={styles.paragraph}>SHU Global</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
