import { monthArray } from "../constants";

export default function groupByMonth(users) {
  const usersMonthes = [];

  users.forEach((user) => {
    const dob = new Date(user.dob);
    const month = monthArray[dob.getMonth()];
    let searchedMonth;

    for (let i = 0; i < usersMonthes.length; i++) {
      if (usersMonthes[i].name === month) {
        searchedMonth = usersMonthes[i];
        break;
      }
    }

    if (searchedMonth) {
      searchedMonth.users.push(user);
    } else {
      usersMonthes.push({
        name: month,
        users: [user],
      });
    }
  });

  return usersMonthes;
}
