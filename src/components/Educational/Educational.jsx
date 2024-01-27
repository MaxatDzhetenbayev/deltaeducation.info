import { motion } from "framer-motion";
import { useResize } from "../../shared/hooks/useResize";

import { HTag, PTag, Wrapper } from "../../shared/ui";

import { infoList } from "../../shared/consts/consts";
import { educationallist } from "../../shared/consts/consts";

import image from "../../assets/images/educational.png";

import { AiOutlineDingding } from "react-icons/ai";
import styles from "./Educational.module.scss";

export const Educational = () => {
  const [isAdaptive] = useResize(1200);

  return (
    <Wrapper>
      <div className={styles.root}>
        <div className={styles.content}>
          <HTag variant="h3">Delta Education — образовательная платформа</HTag>
          <PTag style={{ marginTop: "10px" }} variant="md">
            Обучаем программированию новичков и практикующих разработчиков
          </PTag>
          <div className={styles.content_main}>
            <motion.ul
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className={styles.content_mainList}
            >
              {educationallist.map((item, index) => (
                <motion.li
                  variants={{
                    offscreen: {
                      x: -300,
                      opacity: 0,
                    },
                    onscreen: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        delay: 0.2 * index,
                      },
                    },
                  }}
                  key={item}
                  className={styles.content_mainItem}
                >
                  <AiOutlineDingding />
                  <PTag>{item}</PTag>
                </motion.li>
              ))}
            </motion.ul>
            {isAdaptive === false && (
              <img src={image} width={230} height={200} alt="" />
            )}
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottom_list}>
            {infoList.map((item) => (
              <div key={item.title} className={styles.bottom_item}>
                <HTag variant="h4">{item.title}</HTag>
                <PTag style={{ marginTop: "5px" }}>{item.text}</PTag>
              </div>
            ))}
          </div>
          {isAdaptive === true && (
            <img src={image} width={300} height={260} alt="" />
          )}
        </div>
      </div>
    </Wrapper>
  );
};
