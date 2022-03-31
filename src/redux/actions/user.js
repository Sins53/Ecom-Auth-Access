import axios from "axios";
import { GET_ALL_USER, GET_USER } from "../constants";

const base_URL = "https://ecom-react-task.herokuapp.com/user/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMDg5ZjQwMi04NjU0LTQwYTgtOTI3NC0wMWJmZGQ1NDllZDUiLCJpYXQiOjE2NDg2NDMwNjMwODksImV4cCI6MTY0ODY0MzA3MDI4OX0.E2qluIUpDdAoxrU_lLphZPkRM__Z6F_nY2vJVICyyTE";

export const getUser = (url) => async (dispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: base_URL + url,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.success) {
      dispatch({
        type: GET_USER,
        payload: response?.data?.data,
      });
    }
  } catch (err) {
    alert(err);
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: base_URL,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.success) {
      dispatch({
        type: GET_ALL_USER,
        payload: response?.data?.data,
      });
    }
  } catch (err) {
    alert(err);
  }
};
