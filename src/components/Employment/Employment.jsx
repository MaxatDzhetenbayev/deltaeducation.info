
import { EmploymentList } from "./EmplaoymentList/EmploymentList";
import { EmploymentSlider } from "./EmploymentSlider/EmploymentSlider";

import { HTag, PTag, Wrapper } from "../../shared/ui";

import styles from "./Employment.module.scss";

export const Employment = () => {
  return (
    <section className={styles.root}>
      <Wrapper>
        <HTag variant="h3">А как насчет трудоустройства?</HTag>
        <PTag style={{ marginTop: "40px", maxWidth: "820px" }}>
          Уже во время обучения вы вступите в программу «Карьерный трек», чтобы
          найти свою первую работу в IT
        </PTag>
        <EmploymentList />
        <EmploymentSlider />
      </Wrapper>
    </section>
  );
};
