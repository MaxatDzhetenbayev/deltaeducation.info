import React from "react";
import { motion } from "framer-motion";

import { HTag, PTag } from "../../../shared/ui";

import styles from "./EmploymentItem.module.scss";

export const EmploymentItem = ({ title, text }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        variants={{
          offscreen: {
            x: -200,
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
        className={styles.root}
      >
        <HTag variant="h4">{title}</HTag>
        <PTag>{text}</PTag>
      </motion.div>
    </motion.div>
  );
};
