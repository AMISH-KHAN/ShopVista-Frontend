import { ADD_NEWSLETTER, GET_NEWSLETTER,  UPDATE_NEWSLETTER,  DELETE_NEWSLETTER } from "../Constant";

export function addNewsletter(data) {
    return (
        {

            type: ADD_NEWSLETTER,
            payload:data
        }
        
    )
}
export function getNewsletter() {
    return (
        {
            
            type: GET_NEWSLETTER
        }
        
        )
}
    
export function updateNewsletter(data) {
    return (
        {

            type: UPDATE_NEWSLETTER,
            payload:data
        }
        
    )
}

export function deleteNewsletter(data) {
    return (
        {

            type: DELETE_NEWSLETTER,
            payload:data
        }
        
    )
}