import styles from "./EnrollInCourse.module.scss";
import { HTag, PTag } from "../../../";
import { Form } from "../../../../../components/StartLearning/Form/Form";
export const EnrollInCourse = ({ onClose }) => {
  return (
    <div className={styles.root}>
      <HTag variant="h4">Заявка на открытый урок</HTag>
      <PTag>
        Бесплатный открытый урок 10 февраля в г.Семей по адресу ул. Гагарина 32
      </PTag>
      <Form modalClose={onClose} />
    </div>
  );
};
