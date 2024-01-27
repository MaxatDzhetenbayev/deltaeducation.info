import React from "react";
import styles from "./PTag.module.scss";
import cs from "classnames";

export const PTag = ({ variant = "nm", children, ...props }) => {
  return (
    <p
      className={cs(styles.root, {
        [styles.small]: variant === "sm",
        [styles.normal]: variant === "nm",
        [styles.medium]: variant === "md",
        [styles.large]: variant === "lg",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
