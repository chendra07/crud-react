import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import usersReducer from "./user/users.reducer";
import accountReducer from "./account/account.reducer";
import { reducer as formReducer } from "redux-form";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["account"],
};

const rootReducer = combineReducers({
  user: usersReducer,
  account: accountReducer,
  form: formReducer,
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
