import { GET_ALL_USER, GET_USER } from "../constants";

const initialState = {
  user: [],
  users: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_ALL_USER:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
