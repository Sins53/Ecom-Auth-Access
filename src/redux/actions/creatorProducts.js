import axios from "axios";
import {
  CREATOR_PRODUCT_LIST_FETCHING,
  CREATOR_PRODUCT_LIST_SUCCESS,
} from "../constants";

const base_URL = "https://ecom-react-task.herokuapp.com/product";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMDg5ZjQwMi04NjU0LTQwYTgtOTI3NC0wMWJmZGQ1NDllZDUiLCJpYXQiOjE2NDg2NDMwNjMwODksImV4cCI6MTY0ODY0MzA3MDI4OX0.E2qluIUpDdAoxrU_lLphZPkRM__Z6F_nY2vJVICyyTE";

export const fetchCreatorProduct = () => async (dispatch) => {
  dispatch({
    type: CREATOR_PRODUCT_LIST_FETCHING,
  });
  let response = await creatorProductApi();

  if (response?.data?.data) {
    dispatch({
      type: CREATOR_PRODUCT_LIST_SUCCESS,
      payload: response.data.data,
    });
  }
};

export const creatorProductApi = async () => {
  return await axios({
    method: "GET",
    url: base_URL,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
