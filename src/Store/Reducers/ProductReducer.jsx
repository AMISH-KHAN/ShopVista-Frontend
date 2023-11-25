
import { ADD_PRODUCT_RED, DELETE_PRODUCT_RED, GET_PRODUCT_RED, UPDATE_PRODUCT_RED } from "../Constant";

export function ProductReducer(state = [], action) {
    switch (action.type) {
        case ADD_PRODUCT_RED:

            state.push(action.data);
            return state; // Use the spread operator to create a new array
        case GET_PRODUCT_RED:
            state=action.data
            return state
            case UPDATE_PRODUCT_RED:
            
            var index = state.findIndex((item) =>  item.id === Number(action.data.id ))
           
            state[index].name = action.data.name
            return state
            case DELETE_PRODUCT_RED:
                var newState = state.filter((item)=>item.id!==action.data.id)
                return newState
        default:
            return state;
    }
}