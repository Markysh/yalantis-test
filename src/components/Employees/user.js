import React from "react";
import styles from "./emloyees.module.scss";

export const User = (props) => {
  const user = props.user;
  return (
    <div className={styles.sectionName} key={user.id}>
      {user.lastName} {user.firstName}
      <input type="checkbox" />
    </div>
  );
};
