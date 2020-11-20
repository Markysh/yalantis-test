import React from "react";
import styles from "./App.module.scss";
import { UserList } from "./components/employees";
import { BirthdayList } from "./components/employees-birthday";

function App() {
  return (
    <div className={styles.container}>
      <UserList />
      <BirthdayList />
    </div>
  );
}

export default App;
