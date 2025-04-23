import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import signupReducer from "../reducers/signupReducer";
import loginReducer from "../reducers/loginReducer";
import categoryReducer from "../reducers/categoryReducer";
import featuredProductReducer from "../reducers/featuredProductReducer";
import relatedProductReducer from "../reducers/reletedProductReducer";
import shopProductsReducer from "../reducers/shopProductsReducer";

const combineReducer = combineReducers({
  signupReducer,
  loginReducer,
  categoryReducer,
  featuredProductReducer,
  relatedProductReducer,
  shopProductsReducer,
});

const store = createStore(combineReducer, applyMiddleware(logger));

export default store;
