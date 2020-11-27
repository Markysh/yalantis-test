import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./components/store/index";
import styles from "./App.module.scss";
import { Employees } from "./components/Employees/employees";
import { BirthdayList } from "./components/EmployeesBirthday/employees-birthday";
import { getUsers } from "./components/store/users";

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
    console.log("here!!!");
    dispatch(getUsers());
  }, []);

  return <div>{props.children}</div>;
};
