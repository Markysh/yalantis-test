import React from "react";
import styles from "./employees-birthday.module.scss";

export const BirthdayList = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Employees Birthday</h1>
      <div className={styles.month}>March</div>
      <div className={styles.section}>
        <div className={styles.sectionName}>Ivan Ivanov -</div>
        <div>30 March, 1995 year</div>
      </div>
    </div>
  );
};
