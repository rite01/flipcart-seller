import { ActionTypes } from "../constants/action-types";


const intialState = {
  products: []
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      console.log(payload)
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const addProductsReducer = (state = intialState, action, type) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT:
      return { ...state,
        products: state.products.concat(action.payload) 
      };
    default:
      return state;
  }
};



export const selectedProductsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:  
      return payload ;
    default:
      return state;
  }
};