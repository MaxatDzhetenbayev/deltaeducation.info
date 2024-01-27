import React from "react";
import styles from "./Button.module.scss";
import { PTag } from "../Paragraph/PTag";

export const Button = ({ handleCLick, children, ...props }) => {
  return (
    <button onClick={handleCLick} className={styles.root} {...props}>
      <PTag variant="md">{children}</PTag>
    </button>
  );
};
