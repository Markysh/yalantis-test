import React from "react";
import styles from "./emloyees.module.scss";
import { useSelector } from "react-redux";
import { User } from "./user";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const EmployeesSection = (props) => {
  const char = props.char;
  const users = useSelector((state) => state.users);
  const filteredUsers = users
    .filter((user) => {
      return user.lastName[0].toLowerCase() === char.toLowerCase();
    })
    .map((user) => {
      return <User user={user} />;
    });

  return (
    <div className={styles.section} key={char}>
      <div className={styles.sectionLetter}>{char.toUpperCase()}</div>
      {filteredUsers.length === 0 ? "---" : filteredUsers}
    </div>
  );
};
