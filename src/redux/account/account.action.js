import axios from "axios";
import { AccountActionTypes } from "./account.types";

export const postAccountLogin = (data) => {
  // console.log(data);
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/auth/login", data)
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: AccountActionTypes.AUTH_USER_LOGIN,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({
          type: AccountActionTypes.AUTH_USER_LOGIN,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postAccountRegister = (data) => {
  // console.log(data);
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/auth/register", data)
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: AccountActionTypes.AUTH_USER_LOGIN,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({
          type: AccountActionTypes.AUTH_USER_LOGIN,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const accountLogOut = () => {
  // console.log(data);
  return (dispatch) => {
    // handle success
    dispatch({
      type: AccountActionTypes.AUTH_USER_LOGIN,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
