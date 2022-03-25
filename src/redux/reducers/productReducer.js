import { ActionType } from "../contants/action-type"

const initialstate = {
    products : []
}
export const productReducer = (state,{type, payload}) => {
    switch(type){
        case ActionType.SET_PRODUCTS:
            return state
        default:
            break;
    }
}