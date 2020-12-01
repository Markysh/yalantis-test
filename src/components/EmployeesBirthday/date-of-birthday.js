import React from "react";
import { monthArray } from "../../constants";

export const DateOfBirthday = (props) => {
  const dob = new Date(props.date);
  const day = dob.getDate();
  const month = monthArray[dob.getMonth()];
  const year = dob.getFullYear();

  return <div>{`${day} ${month}, ${year} year`}</div>;
};
