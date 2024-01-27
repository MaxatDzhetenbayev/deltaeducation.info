import React from "react";
import { HTag, PTag, Wrapper } from "../../shared/ui";
import { motion } from "framer-motion";

import cn from "classnames";
import styles from "./Available.module.scss";

import main from "../../assets/images/avilable/main.jpg";
import item1 from "../../assets/images/avilable/item1.jpg";
import item2 from "../../assets/images/avilable/item2.jpg";
import item3 from "../../assets/images/avilable/item3.jpg";

export const Available = () => {
  return (
    <Wrapper>
      <div className={styles.root}>
        <div className={styles.content}>
          <HTag variant="h3">ПРОГРАММИРОВАНИЕ – ПРОФЕССИОНАЛЬНЫЙ НАВЫК</HTag>
          <HTag variant="h3" style={{ color: "#136ef6" }}>
            ДОСТУПНЫЙ КАЖДОМУ!
          </HTag>
          <PTag variant="sm" style={{ marginTop: 20 }}>
            Программирование – профессиональный навык, доступный каждому. Но
            чтобы его освоить, придется хорошо потрудиться. Можно пойти
            медленным и длинным путем проб и ошибок, обучаясь самостоятельно. Но
            гораздо рациональнее изучать языки программирования под руководством
            опытного наставника, умеющего отличить важное от неважного и
            понимающего, как применить полученные знания на практике.
          </PTag>
          <PTag variant="sm" style={{ marginTop: 20 }}>
            Преподаватели школы DELTA EDUCATION ведут занятия по
            программированию с прицелом на практическую пользу, используя кейсы
            из реальной жизни.
          </PTag>
          <PTag variant="sm" style={{ marginTop: 20 }}>
            Наша школа программирования базируется в Семее. Вы можете приступить
            к обучению в любом возрасте. Для старта достаточно желания и
            относительно небольшого количества свободного времени.
          </PTag>
        </div>
        <div className={styles.right_container}>
          <img className={styles.right_container_main} src={main} alt="" />

          <motion.img
            initial={{ x: -100 }}
            animate={{
              y: [-150, -130, -150],
              transition: {
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className={cn(
              styles.right_container_item,
              styles.right_container_first
            )}
            src={item1}
          />
          <motion.img
            initial={{ x: -40 }}
            animate={{
              y: [150, 130, 150],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className={cn(
              styles.right_container_item,
              styles.right_container_second
            )}
            src={item2}
          />
          <motion.img
            initial={{ x: 180 }}
            animate={{
              y: [80, 70, 80],
              transition: {
                duration: 2.7,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className={cn(
              styles.right_container_item,
              styles.right_container_third
            )}
            src={item3}
          />
        </div>
      </div>
    </Wrapper>
  );
};
