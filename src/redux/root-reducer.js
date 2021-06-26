import { combineReducers } from "redux";
import usersReducer from "./user/users.reducer";

const rootReducer = combineReducers({
  user: usersReducer,
});

export default rootReducer;
