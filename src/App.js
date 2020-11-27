import React, { useEffect } from "react";
import styles from "./App.module.scss";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/index";
import { getUsers } from "./store/users";
import { Employees } from "./components/Employees/employees";
import { BirthdayList } from "./components/EmployeesBirthday/employees-birthday";

function App() {
  return (
    <Provider store={store}>
      <LoadUsers>
        <div className={styles.container}>
          <Employees />
          <BirthdayList />
        </div>
      </LoadUsers>
    </Provider>
  );
}

export default App;

export const LoadUsers = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <div>{props.children}</div>;
};
