import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { HTag, PTag, Wrapper } from "../../shared/ui";

import styles from "./Salary.module.scss";

export const Salary = () => {
  const tabs = [
    {
      icon: "",
      color: "",
      label: "Python",
      fullName: "Python-разработчик",
      gradation: [
        {
          label: "senior",
          salary: "800 000 ₸",
        },
        {
          label: "middle",
          salary: "638 000 ₸",
        },
        {
          label: "junior",
          salary: "350 000 ₸",
        },
      ],
    },
    {
      icon: "",
      color: "",
      label: "Frontend",
      fullName: "Frontend-разработчик",
      gradation: [
        {
          label: "senior",
          salary: "800 000 ₸",
        },
        {
          label: "middle",
          salary: "612 000 ₸",
        },
        {
          label: "junior",
          salary: "330 000 ₸",
        },

      ],
    },
    {
      icon: "",
      label: "Unity",
      fullName: "Unity-разработчик",
      gradation: [
        {
          label: "senior",
          salary: "700 000 ₸",
        },
        {
          label: "middle",
          salary: "480 000 ₸",
        },
        {
          label: "junior",
          salary: "380 000 ₸",
        },
      ],
    },
    {
      icon: "",
      color: "",
      label: "PHP",
      fullName: "PHP-разработчик",
      gradation: [
        {
          label: "senior",
          salary: "750 000 ₸",
        },
        {
          label: "middle",
          salary: "640 000 ₸",
        },
        {
          label: "junior",
          salary: "320 000 ₸",
        },
      ],
    },
  ];

  const handleKeyDown = (event, item) => {
    if (event.key === "Enter") {
      setSelectedTab(item);
    }
  };

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Wrapper>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        className={styles.root}
      >
        <motion.div
          variants={{
            offscreen: {
              x: -10,
              opacity: 0,
            },
            onscreen: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                delay: 0.3,
              },
            },
          }}
          className={styles.heading}
        >
          <HTag variant="h3">Зарплаты специалистов в IT</HTag>
          <PTag style={{ maxWidth: 540, marginTop: 20 }}>
            Зарплаты в IT сильно зависят от уровня навыков и знаний технологий,
            ниже приведены средние данные на основе популярных платформ с
            вакансиями в Казахстане.
          </PTag>
        </motion.div>

        <motion.div
          variants={{
            offscreen: {
              x: 10,
              opacity: 0,
            },
            onscreen: {
              opacity: 1,

              x: 0,
              transition: {
                type: "spring",
                delay: 0.3,
              },
            },
          }}
          className={styles.window}
        >
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {tabs.map((item) => (
                <li
                  tabIndex={0}
                  key={item.label}
                  className={
                    item.label === selectedTab.label ? styles.selected : ""
                  }
                  onKeyDown={(event) => handleKeyDown(event, item)}
                  onClick={() => setSelectedTab(item)}
                >
                  <PTag>{item.label}</PTag>
                  {item.label === selectedTab.label ? (
                    <motion.div
                      className={styles.underline}
                      layoutId="underline"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab.label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ backgroundColor: selectedTab.color }}
              className={styles.content}
            >
              <HTag variant="h4">{selectedTab.fullName}</HTag>
              <div className={styles.col}>
                {selectedTab.gradation.map((item, index) => (
                  <div key={index} className={styles.item}>
                    <PTag style={{ marginBottom: 5 }}>{item.label}</PTag>
                    <div className={styles.row}>
                      <div
                        style={{
                          width: `calc(70% / ${index + 1})`,
                          height: 30,
                          backgroundColor: "#175dc7",
                          borderRadius: 7,
                        }}
                      ></div>
                      {/* Add animation counter */}
                      <PTag>{item.salary}</PTag>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </Wrapper>
  );
};
