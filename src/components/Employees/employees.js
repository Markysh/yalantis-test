import React from "react";
import styles from "./emloyees.module.scss";
import { EmployeesSection } from "./employees-section";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const Employees = () => {
  const sections = alphabet.split("").map((char) => {
    return <EmployeesSection char={char} key={char} />;
  });

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Employees</h1>
      <div className={styles.container}>{sections}</div>
    </div>
  );
};
