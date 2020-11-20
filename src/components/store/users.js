const GET_USERS = "GET_USERS";

export const setUsers = (payload) => ({
  type: GET_USERS,
  payload,
});

const initialState = [];

export function usersReducer(store = initialState, { type, payload }) {
  switch (type) {
    case GET_USERS:
      return [...store, ...payload];
    default:
      return store;
  }
}

export const getUsers = async () => {
  const responce = await fetch(
    `https://yalantis-react-school-api.yalantis.com/api/task0/users`
  );
  const result = await responce.json();
};
