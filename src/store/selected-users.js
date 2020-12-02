const SELECT_USER = "SELECT_USER";
const REMOVE_USER = "REMOVE_USER";

export const selectUserAction = (payload) => ({
  type: SELECT_USER,
  payload,
});

export const removeUserAction = (payload) => ({
  type: REMOVE_USER,
  payload,
});

const storedUsers = JSON.parse(localStorage.getItem("selectedUsers"));
const initialState = storedUsers || [];

export function selectUserReducer(store = initialState, { type, payload }) {
  switch (type) {
    case SELECT_USER:
      return [...store, payload];
    case REMOVE_USER:
      let index = -1;
      for (let i = 0; i < store.length; i++) {
        if (payload.id === store[i].id) {
          index = i;
          break;
        }
      }
      return [...store.slice(0, index), ...store.slice(index + 1)];
    default:
      return store;
  }
}

export const selectUser = (user) => (dispatch) => {
  dispatch(selectUserAction(user));
};

export const removeUser = (user) => (dispatch) => {
  dispatch(removeUserAction(user));
};
