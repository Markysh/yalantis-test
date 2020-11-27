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

const initialState = [];

export function selectUserReducer(store = initialState, { type, payload }) {
  switch (type) {
    case SELECT_USER:
      return [...store, payload];
    case REMOVE_USER:
      const index = store.indexOf(payload);
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
