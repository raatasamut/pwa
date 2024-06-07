import Page from '@layouts/Page';
import Section from '@layouts/Section';
import styles from '@styles/Home.module.css';
import Home from "@components/modules/home/Home";
import Camera from "@components/modules/camera/Camera";

export default function pagea(): JSX.Element {
  return (
    <Page title="Page A">
      <Section>
        <Camera />
      </Section>
    </Page>
  );
}
