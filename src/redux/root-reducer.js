import { combineReducers } from "redux";
import usersReducer from "./user/users.reducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  user: usersReducer,
  form: formReducer,
});

export default rootReducer;
