import { ADD_PRODUCT, GET_PRODUCT,  UPDATE_PRODUCT,  DELETE_PRODUCT } from "../Constant";

export function addProduct(data) {
    return (
        {

            type: ADD_PRODUCT,
            payload:data
        }
        
    )
}
export function getProduct() {
    return (
        {
            
            type: GET_PRODUCT
        }
        
        )
}
    
export function updateProduct(data) {
    // console.log("at action crator:" ,data.id)
    return (
        {

            type: UPDATE_PRODUCT,
            payload:data
        }
        
    )
}

export function deleteProduct(data) {
    return (
        {

            type: DELETE_PRODUCT,
            payload:data
        }
        
    )
}