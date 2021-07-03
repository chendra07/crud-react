import { AccountActionTypes } from "./account.types";

const INITIAL_STATE = {
  tokenAccount: false,
  errorTokenAccount: false,
  AccountDetail: false,
  ErrorAccountDetail: false,
  getResponAccountUser: false,
  getErrorResponAccountUser: false,
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountActionTypes.AUTH_USER_LOGIN:
      return {
        ...state,
        tokenAccount: action.payload.data,
        errorTokenAccount: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default accountReducer;
