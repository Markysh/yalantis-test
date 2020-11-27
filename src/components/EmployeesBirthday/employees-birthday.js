import React from "react";
import styles from "./employees-birthday.module.scss";
import { useSelector } from "react-redux";

export const BirthdayList = (props) => {
  const users = useSelector((state) => state.selectedUsers).map((user) => {
    return (
      <div className={styles.section} key={user.id}>
        <div className={styles.sectionName}>
          {user.firstName} {user.lastName} -
        </div>
        <div>{user.dob}</div>
      </div>
    );
  });

  return (
    <div className={styles.mainContainer}>
      <h1>Employees Birthday</h1>
      <div className={styles.month}>March</div>
      {users}
    </div>
  );
};
