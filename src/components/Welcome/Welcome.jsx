import { Button, 
  // Clouds, 
  Wrapper, Modal, HTag } from "../../shared/ui";
import { EnrollInCourse } from "../../shared/ui/Modal/ModalContents/EnrollInCourse/EnrollInCourse";

// import { clouds_list } from "../../shared/consts/consts";

import PythonImage from "../../assets/images/welcome-python.svg";
import styles from "./Welcome.module.scss";
import { useModal } from "../../shared/hooks/useModal";

export const Welcome = () => {
  const [isView, open, close] = useModal();

  return (
    <div className={styles.background}>
    <Wrapper>
      <div className={styles.welcome}>
        <div className={styles.welcome_content}>
          <div className={styles.welcome_text}>
            <HTag variant="h1" >
              Delta Education
            </HTag>
            <HTag variant="h3" >
              Оставьте заявку на бесплатный открытый урок
            </HTag>
            <Button handleCLick={open} style={{ marginTop: "20px" }}>
              Подать заявку
            </Button>
          </div>
          <img src={PythonImage} alt="" />
        </div>
        {/* <div className={styles.welcome_clouds}>
          {clouds_list.map((cloud) => (
            <Clouds key={cloud} size="sm">
              {cloud}
            </Clouds>
          ))}
        </div> */}

        <Modal
          onClose={close}
          content={<EnrollInCourse onClose={close} />}
          isView={isView}
        />
      </div>
    </Wrapper>
    <div className={styles.welcome__black}></div>
    </div>
  );
};
