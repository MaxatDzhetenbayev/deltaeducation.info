import React from "react";
import { HTag, PTag, Wrapper } from "../../shared/ui";
import { Form } from "./Form/Form";
import styles from "./StartLearning.module.scss";

export const StartLearning = () => {
  return (
    <section className={styles.root}>
      <Wrapper>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <HTag variant="h3">Начните учиться уже сегодня</HTag>
            <div className={styles.container_inner}>
              <div className={styles.container_content}>
                <PTag variant="sm">
                  от
                  <span className={styles.container_blueVariant}>
                    18 000 ₸
                  </span>{" "}
                  <br />в месяц, в рассрочку на 24 <br /> месяца
                </PTag>
                <PTag variant="sm" style={{ margin: "20px 0px" }}>
                  или
                </PTag>
                <PTag variant="sm">
                  <span className={styles.container_blackVariant}>
                    ~270 000 ₸
                  </span>
                  <br /> при оплате сразу
                </PTag>
              </div>
              <Form />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
