import { ActionType } from "../contants/action-type";

export const setProducts = (product) => {
    return{
        type: ActionType.SET_PRODUCTS,
        payload:product,
    }
} 