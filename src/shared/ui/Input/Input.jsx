import React from "react";
import styles from "./Input.module.scss";

export const Input = ({ placeholder, ...props }) => {
  return <input className={styles.root} {...props} placeholder={placeholder} />;
};
