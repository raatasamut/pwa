import Page from '@layouts/Page';
import Section from '@layouts/Section';
import styles from '@styles/Home.module.css';
import Link from "next/link";

export default function pageb(): JSX.Element {
  return (
    <Page title="PAGE B">
        <div className={styles.containers}>

          <Link
            href={`https://shu.global`}
            target={'_self'}
          >
            <span>SHU WEBSTORE</span>
          </Link>

        </div>
    </Page>
  );
}
