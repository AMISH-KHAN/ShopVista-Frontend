import { ADD_CHECKOUT, GET_CHECKOUT,  UPDATE_CHECKOUT,  DELETE_CHECKOUT } from "../Constant";

export function addCheckout(data) {
    return (
        {

            type: ADD_CHECKOUT,
            payload:data
        }
        
    )
}
export function getCheckout() {
    return (
        {
            
            type: GET_CHECKOUT
        }
        
        )
}
    
export function updateCheckout(data) {
    return (
        {

            type: UPDATE_CHECKOUT,
            payload:data
        }
        
    )
}

export function deleteCheckout(data) {
    return (
        {

            type: DELETE_CHECKOUT,
            payload:data
        }
        
    )
}