import React from "react";
import styles from "./employees-birthday.module.scss";
import { useSelector } from "react-redux";
import { DateOfBirthday } from "../EmployeesBirthday/DateOfBirthday/date-of-birthday";
import groupByMonthes from "../../utils/group-by-month";

export const BirthdayList = () => {
  const selectedUsers = useSelector((state) => state.selectedUsers);

  const monthes = groupByMonthes(selectedUsers).map((month) => {
    const users = month.users.map((user) => {
      return (
        <div className={styles.section} key={user.id}>
          <div className={styles.sectionName}>
            {user.lastName} {user.firstName} -
          </div>
          <DateOfBirthday date={user.dob} />
        </div>
      );
    });

    return (
      <div key={month.name}>
        <div className={styles.month}>{month.name}</div>
        {users}
      </div>
    );
  });

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Employees Birthday</h1>
      {monthes.length !== 0 ? (
        monthes
      ) : (
        <div className={styles.selectedStatus}>No selected employees</div>
      )}
    </div>
  );
};
