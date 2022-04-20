import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const addProducts = (products) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (id) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: id,
  };
};  
