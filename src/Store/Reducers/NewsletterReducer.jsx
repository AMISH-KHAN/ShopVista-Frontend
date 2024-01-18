
import { ADD_NEWSLETTER_RED, DELETE_NEWSLETTER_RED, GET_NEWSLETTER_RED, UPDATE_NEWSLETTER_RED } from "../Constant";

export function NewsletterReducer(state = [], action) {
    switch (action.type) {
        case ADD_NEWSLETTER_RED:

            state.push(action.data);
            return state; // Use the spread operator to create a new array
        case GET_NEWSLETTER_RED:
            state=action.data
            return state
            case UPDATE_NEWSLETTER_RED:
            
            var index = state.findIndex((item) =>  item.id === Number(action.data.id ))
           
            state[index].name = action.data.name
            return state
            case DELETE_NEWSLETTER_RED:
                var newState = state.filter((item)=>item.id!==action.data.id)
                return newState
        default:
            return state;
    }
}