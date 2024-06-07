import Page from '@layouts/Page';
import Section from '@layouts/Section';
import styles from '@styles/Home.module.css';

export default function pagea(): JSX.Element {
  return (
    <Page title="Page A">
      <Section className="flex items-center justify-center">
        <div className={styles.containers}>Page A</div>
      </Section>
    </Page>
  );
}
