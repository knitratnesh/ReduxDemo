import { ADD_TO_CART, RED_COLOR, REMOVE_FROM_CART } from "../Constants";


export default function cartItems(state = [], actions) {
    switch (actions.type) {
        case ADD_TO_CART:
            return [
                ...state,
                { cartData: actions.data }
            ] 
            case REMOVE_FROM_CART:
                console.warn("reducer state", state[0].cartData)
                return [
                     {
                         cartData: []
                     }
                ]     
        default:
            return state;
    }
}