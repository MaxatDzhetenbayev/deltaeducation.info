import { useModal } from "../../shared/hooks/useModal";

import { Button, HTag, Wrapper, Modal } from "../../shared/ui";
import { EnrollInCourse } from "../../shared/ui/Modal/ModalContents/EnrollInCourse/EnrollInCourse";
import styles from "./Choice.module.scss";

export const Choice = () => {
  const [isView, open, close] = useModal();

  return (
    <section className={styles.root}>
      <Wrapper>
        <div className={styles.choice}>
          <div className={styles.choice_container}>
            <HTag variant="h3">Сомневаетесь в выборе?</HTag>
            <div className={styles.choice_inner}>
              <HTag variant="h4">
                Выслушаем, порекомендуем или отговорим от обучения
              </HTag>
              <Button handleCLick={open}>Начать учиться</Button>
            </div>
          </div>
        </div>
      </Wrapper>
      <Modal
        onClose={close}
        content={<EnrollInCourse onClose={close} />}
        isView={isView}
      />
    </section>
  );
};
