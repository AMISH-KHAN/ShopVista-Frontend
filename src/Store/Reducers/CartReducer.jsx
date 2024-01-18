
import { ADD_CART_RED, DELETE_CART_RED, GET_CART_RED, UPDATE_CART_RED } from "../Constant";

export function CartReducer(state = [], action) {
    console.log("reducer",action.type)
    switch (action.type) {
        case ADD_CART_RED:
            state.push(action.data);
            return state; // Use the spread operator to create a new array
        
        case GET_CART_RED:
            state=action.data
            return state
        
            case UPDATE_CART_RED:
            var index = state.findIndex((item) =>  item.id === Number(action.data.id ))
            state[index].name = action.data.name
            console.log("action",state)
            return state
        
            case DELETE_CART_RED:
                var newState = state.filter((item)=>item.id!==action.data.id)
                return newState
        default:
            return state;
    }
}