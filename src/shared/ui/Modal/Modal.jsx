import React from "react";
import { ModalContainer } from "./ModalContainer/ModalContainer";
import styles from "./Modal.module.scss";

import { motion } from "framer-motion";

export const Modal = ({ content, onClose, isView }) => {
  const variants = {
    open: {
      visibility: "visible",
    },
    closed: {
      visibility: "hidden",
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      animate={isView ? "open" : "closed"}
      variants={variants}
      className={styles.root}
    >
      <ModalContainer onClose={onClose} isView={isView}>
        {content}
      </ModalContainer>
    </motion.div>
  );
};
