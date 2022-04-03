import { USER_LIST_FETCHING, USER_LIST_SUCCESS } from "../constants";

const initialState = {
  users: [],
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
