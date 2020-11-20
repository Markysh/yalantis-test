import React from "react";
import styles from "./employees-birthday.module.scss";

export const BirthdayList = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Employees Birthday</h1>
      <div>March</div>
      <div className={styles.section}>
        <div>Ivan Ivanov - </div>
        <div>30 March, </div>
        <div>1995 year</div>
      </div>
    </div>
  );
};
