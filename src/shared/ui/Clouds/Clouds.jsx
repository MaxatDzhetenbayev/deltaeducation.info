import React from "react";
import { PTag } from "../Paragraph/PTag";

import styles from "./Clouds.module.scss";
import cs from "classnames";

export const Clouds = ({
  variant = "primary",
  size = "sm",
  children,
  ...props
}) => {
  return (
    <div
      className={cs(styles.root, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
        [styles.ghost]: variant === "ghost",
        [styles.blues]: variant === "blues",
        [styles.small]: size === "sm",
        [styles.large]: size === "lg",
      })}
      {...props}
    >
      {size === "sm" ? (
        <PTag variant="nm"> {children}</PTag>
      ) : (
        <PTag variant="md"> {children}</PTag>
      )}
    </div>
  );
};
