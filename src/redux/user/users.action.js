import axios from "axios";
import { UsersActionTypes } from "./users.types";

export const getUsersData = () => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/chendra07/dataJson-dummy/usersDataset"
      )
      .then(function (response) {
        // handle success
        // console.log(response);
        dispatch({
          type: UsersActionTypes.GET_USERSDATASET,
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
          type: UsersActionTypes.GET_USERSDATASET,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUserDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/chendra07/dataJson-dummy/usersDataset/" +
          id
      )
      .then(function (response) {
        // handle success
        // console.log(response);
        dispatch({
          type: UsersActionTypes.GET_USER_DETAIL,
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
          type: UsersActionTypes.GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUserDetail = () => {
  return (dispatch) => {
    dispatch({
      type: UsersActionTypes.GET_USER_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const postUserCreate = (data) => {
  console.log(data);
  return (dispatch) => {
    axios
      .post(
        "https://my-json-server.typicode.com/chendra07/dataJson-dummy/usersDataset/",
        data
      )
      .then(function (response) {
        // handle success
        // console.log(response);
        dispatch({
          type: UsersActionTypes.POST_NEW_USER,
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
          type: UsersActionTypes.POST_NEW_USER,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteDataUser = () => {
  return (dispatch) => {
    dispatch({
      type: UsersActionTypes.GET_USER_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: UsersActionTypes.POST_NEW_USER,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
