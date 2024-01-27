import React from "react";
import styles from "./Wrapper.module.scss";
export const Wrapper = ({ children }) => {
  return <section className={styles.root}>{children}</section>;
};
