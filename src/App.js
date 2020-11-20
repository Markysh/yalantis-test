import React from "react";
import { Provider } from "react-redux";
import { store } from "./components/store/index";
import styles from "./App.module.scss";
import { UserList } from "./components/Employees/employees";
import { BirthdayList } from "./components/EmployeesBirthday/employees-birthday";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <UserList />
        <BirthdayList />
      </div>
    </Provider>
  );
}

export default App;
