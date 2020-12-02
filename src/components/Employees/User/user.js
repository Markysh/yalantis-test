import React from "react";
import styles from "../emloyees.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, removeUser } from "../../../store/selected-users";

export const User = (props) => {
  const user = props.user;
  const dispatch = useDispatch();
  const selectedUsers = useSelector((state) => state.selectedUsers);

  const checked = selectedUsers.some((selectedUser) => {
    return selectedUser.id === user.id;
  });

  const onChange = (event) => {
    if (event.target.checked) {
      dispatch(selectUser(user));
    } else {
      dispatch(removeUser(user));
    }
  };

  return (
    <div className={styles.sectionName} key={user.id}>
      {user.lastName} {user.firstName}
      <input type="checkbox" onChange={onChange} checked={checked} />
    </div>
  );
};
