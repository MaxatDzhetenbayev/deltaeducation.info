
import { TeacherCard } from "./TeacherCard/TeacherCard";

import { HTag, Wrapper } from "../../shared/ui";
import { teachersList } from "../../shared/consts/consts";

import styles from "./Teachers.module.scss";
export const Teachers = () => {
  return (
    <div className={styles.root}>
        <Wrapper>
        <HTag style={{color: "#fff", marginTop: "40px"}} variant="h3">Наставники — практикующие разработчики</HTag>
        <div className={styles.teacher_list}>
          {teachersList.map((data, index) => (
            <TeacherCard key={index} {...data} />
          ))}
        </div>
    </Wrapper>
      </div>
  );
};
