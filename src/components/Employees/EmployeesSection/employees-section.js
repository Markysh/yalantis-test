import React from "react";
import styles from "../emloyees.module.scss";
import { useSelector } from "react-redux";
import { User } from "../User/user";

export const EmployeesSection = (props) => {
  const char = props.char;
  const users = useSelector((state) => state.users);
  const filteredUsers = users
    .filter((user) => {
      return user.lastName[0].toLowerCase() === char.toLowerCase();
    })
    .map((user) => {
      return <User data-testid="user" user={user} key={user.id} />;
    });

  return (
    <div className={styles.section} key={char}>
      <div data-testid="char" className={styles.sectionLetter}>
        {char.toUpperCase()}
      </div>
      {filteredUsers.length === 0 ? (
        <div data-testid="empty">---</div>
      ) : (
        filteredUsers
      )}
    </div>
  );
};
