import React from "react";
import styles from "./emloyees.module.scss";
import { EmployeesSection } from "./employeesSection";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const Employees = () => {
  const sections = alphabet.split("").map((char) => {
    return <EmployeesSection char={char} />;
  });

  return (
    <div className={styles.mainContainer}>
      <h1>Employees</h1>
      <div className={styles.container}>{sections}</div>
    </div>
  );
};
