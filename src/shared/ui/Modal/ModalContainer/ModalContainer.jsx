import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import styles from "./ModalContainer.module.scss";

export const ModalContainer = ({ children, onClose, isView }) => {
  const variants = {
    open: {
      y: 0,
      transition: {
        delay: 0.3,
      },
    },
    closed: { y: "-100vh" },
  };

  const handleKeyDown = (event) => {
    if (event.key === "Esc") {
      onClose();
    }
  };

  return (
    <motion.div
      animate={isView ? "open" : "closed"}
      variants={variants}
      className={styles.root}
    >
      <div className={styles.top}>
        <button onClick={onClose} onKeyDown={handleKeyDown}>
          <AiOutlineClose />
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </motion.div>
  );
};
