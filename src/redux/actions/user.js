import axios from "axios";
import { USER_LIST_FETCHING, USER_LIST_SUCCESS } from "../constants";

const base_URL = "https://ecom-react-task.herokuapp.com/user";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMDg5ZjQwMi04NjU0LTQwYTgtOTI3NC0wMWJmZGQ1NDllZDUiLCJpYXQiOjE2NDg2NDMwNjMwODksImV4cCI6MTY0ODY0MzA3MDI4OX0.E2qluIUpDdAoxrU_lLphZPkRM__Z6F_nY2vJVICyyTE";

export const fetchUsers = () => async (dispatch) => {
  dispatch({
    type: USER_LIST_FETCHING,
  });
  let response = await userApiCall();

  if (response?.data?.data) {
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: response.data.data,
    });
  }
};

export const userApiCall = async () => {
  return await axios({
    method: "GET",
    url: base_URL,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
