import { combineReducers } from "redux";
import ToogleThemeReducer from "./reducers/ToogleThemeReducer";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  dark: ToogleThemeReducer,
});

export default rootReducer;
