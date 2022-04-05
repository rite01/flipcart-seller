import { combineReducers } from "redux";
import { productsReducer,selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  productsReducer,
  productId: selectedProductsReducer,
});
export default reducers;
