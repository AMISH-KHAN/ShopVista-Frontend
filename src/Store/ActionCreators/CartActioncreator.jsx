import { ADD_CART, GET_CART,  UPDATE_CART,  DELETE_CART } from "../Constant";

export function addCart(data) {
    return (
        {

            type: ADD_CART,
            payload:data
        }
        
    )
}
export function getCart() {
    console.log("actionget")
    return (
        {
            
            type: GET_CART
        }
        
        )
}
    
export function updateCart(data) {
    console.log("action update",data)
    return (
        {

            type: UPDATE_CART,
            payload:data
        }
        
    )
}

export function deleteCart(data) {
    return (
        {

            type: DELETE_CART,
            payload:data
        }
        
    )
}