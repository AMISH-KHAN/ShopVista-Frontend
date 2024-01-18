
import { ADD_WISHLIST_RED, DELETE_WISHLIST_RED, GET_WISHLIST_RED, UPDATE_WISHLIST_RED } from "../Constant";

export function WishlistReducer(state = [], action) {
    switch (action.type) {
        case ADD_WISHLIST_RED:

            state.push(action.data);
            return state; // Use the spread operator to create a new array
        case GET_WISHLIST_RED:
            state=action.data
            return state
            case UPDATE_WISHLIST_RED:
            
            var index = state.findIndex((item) =>  item.id === Number(action.data.id ))
           
            state[index].name = action.data.name
            return state
            case DELETE_WISHLIST_RED:
                var newState = state.filter((item)=>item.id!==action.data.id)
                return newState
        default:
            return state;
    }
}