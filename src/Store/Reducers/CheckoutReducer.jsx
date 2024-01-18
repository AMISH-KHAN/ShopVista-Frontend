
import { ADD_CHECKOUT_RED, DELETE_CHECKOUT_RED, GET_CHECKOUT_RED, UPDATE_CHECKOUT_RED } from "../Constant";

export function CheckoutReducer(state = [], action) {
    console.log("reducer",action.type)
    switch (action.type) {
        case ADD_CHECKOUT_RED:
            state.push(action.data);
            return state; // Use the spread operator to create a new array
        
        case GET_CHECKOUT_RED:
            state=action.data
            return state
        
            case UPDATE_CHECKOUT_RED:
            var index = state.findIndex((item) =>  item.id === Number(action.data.id ))
            state[index].name = action.data.name
            console.log("action",state)
            return state
        
            case DELETE_CHECKOUT_RED:
                var newState = state.filter((item)=>item.id!==action.data.id)
                return newState
        default:
            return state;
    }
}