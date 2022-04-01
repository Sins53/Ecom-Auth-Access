import {
  CREATOR_PRODUCT_LIST_FETCHING,
  CREATOR_PRODUCT_LIST_SUCCESS,
} from "../constants";

const initialState = {
  products: [],
  isLoading: false,
};

const creatorProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATOR_PRODUCT_LIST_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATOR_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default creatorProductReducer;
