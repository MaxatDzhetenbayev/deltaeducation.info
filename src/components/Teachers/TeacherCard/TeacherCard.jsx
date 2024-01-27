  import { HTag, PTag } from "../../../shared/ui";

import styles from "./TeacherCard.module.scss";

export const TeacherCard = ({ name, text, image }) => {
  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={styles.root}>
      <PTag>{text}</PTag>
      <div className={styles.person}>
        <div style={divStyle} className={styles.person_img}></div>
        <HTag style={{ paddingTop: "20px", color: "#fff" }} variant="h4">
          {name}
        </HTag>
      </div>
    </div>
  );
};
