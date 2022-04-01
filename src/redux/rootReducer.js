import { combineReducers } from "redux";
import adderReducer from "./reducers/adderReducer";
import cartReducer from "./reducers/cartReducer";
import filterReducer from "./reducers/filterReducer";
import productReducer from "./reducers/productReducer";
import ToogleThemeReducer from "./reducers/ToogleThemeReducer";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  dark: ToogleThemeReducer,
  product: productReducer,
  order: adderReducer,
  filter: filterReducer,
  cart: cartReducer,
});

export default rootReducer;
