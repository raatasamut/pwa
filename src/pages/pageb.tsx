import Page from '@layouts/Page';
import Section from '@layouts/Section';
import styles from '@styles/Home.module.css';

export default function pageb(): JSX.Element {
  return (
    <Page title="PAGE B">
      <Section className="flex items-center justify-center">
        <div className={styles.containers}>Page B</div>
      </Section>
    </Page>
  );
}
