import { UsersActionTypes } from "./users.types";

const INITIAL_STATE = {
  usersDataset: false,
  errorUsersDataset: false,
  userDetail: false,
  errorUserDetail: false,
  getResponDataUser: false,
  errorResponDataUser: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.GET_USERSDATASET:
      return {
        ...state,
        usersDataset: action.payload.data,
        errorUsersDataset: action.payload.errorMessage,
      };

    case UsersActionTypes.GET_USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload.data,
        errorUserDetail: action.payload.errorMessage,
      };

    case UsersActionTypes.POST_NEW_USER:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage,
      };

    case UsersActionTypes.PUT_USER_UPDATE:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default usersReducer;
