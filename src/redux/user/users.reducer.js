import { UsersActionTypes } from "./users.types";

const INITIAL_STATE = {
  usersDataset: false,
  errorUsersDataset: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.GET_USERSDATASET:
      return {
        ...state,
        usersDataset: action.payload.data,
        errorUsersDataset: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default usersReducer;
