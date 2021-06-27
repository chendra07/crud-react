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
