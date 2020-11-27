import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { selectUserReducer } from "./selected-users";
import { usersReducer } from "./users";

const rootReducer = combineReducers({
  users: usersReducer,
  selectedUsers: selectUserReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
