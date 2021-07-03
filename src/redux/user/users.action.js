import axios from "axios";
import { UsersActionTypes } from "./users.types";

export const getUsersData = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/usersDataset")
      .then(function (response) {
        // handle success
        console.log(response);
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
      .get("http://localhost:5000/api/usersDataset/" + id)
      .then(function (response) {
        // handle success
        console.log(response);
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

export const postUserCreate = (data, token) => {
  const headers = {
    Authorization: "bearer " + token,
  };
  // console.log(headers);
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/usersDataset/", data, {
        headers: headers,
      })
      .then(function (response) {
        // handle success
        console.log(response);
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

export const putUserUpdate = (data, token, id) => {
  const headers = {
    Authorization: "bearer " + token,
  };
  // console.log(headers);
  return (dispatch) => {
    axios
      .put("http://localhost:5000/api/usersDataset/" + id, data, {
        headers: headers,
      })
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: UsersActionTypes.PUT_USER_UPDATE,
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
          type: UsersActionTypes.PUT_USER_UPDATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUser = (id, token) => {
  const headers = {
    Authorization: "bearer " + token,
  };
  console.log(headers);
  return (dispatch) => {
    axios
      .delete("http://localhost:5000/api/usersDataset/" + id, {
        headers: headers,
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};
