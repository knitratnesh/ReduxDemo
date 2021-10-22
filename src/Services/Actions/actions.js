import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants";

export const addToCart = (data) =>{
    return({
        type: ADD_TO_CART,
        data
    })
}

export const removeFromCart = (data) =>{
    console.warn("remove from cart" + JSON.stringify(data))
    return({
        type: REMOVE_FROM_CART,
        data //payload
    })
}