import React from "react";

import { EmploymentItem } from "../EmploymentItem/EmploymentItem";
import { employList } from "../../../shared/consts/consts";

import styles from "./EmploymentList.module.scss";

export const EmploymentList = () => {
  return (
    <div className={styles.employ_list}>
      {employList.map(({ title, text }) => (
        <EmploymentItem key={title} text={text} title={title} />
      ))}
    </div>
  );
};
