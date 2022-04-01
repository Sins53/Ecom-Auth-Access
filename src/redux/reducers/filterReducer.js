import { FILTER_DATA, RESET_FILTER_DATA } from "../constants";

const initialState = {
  min: 1,
  max: 1000000000,
  category: 0,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_DATA:
      return {
        ...state,
        min: action.payload.a,
        max: action.payload.b,
        category: action.payload.c,
      };
    case RESET_FILTER_DATA:
      state = initialState;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default filterReducer;
