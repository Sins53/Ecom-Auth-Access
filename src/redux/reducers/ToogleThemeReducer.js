import { DARK_MODE } from "../constants";

const initialState = {
  darkMode: false,
};

const ToogleThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export default ToogleThemeReducer;
