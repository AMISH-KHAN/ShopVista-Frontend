
import { ADD_USER_RED, DELETE_USER_RED, GET_USER_RED, UPDATE_USER_RED } from "../Constant";

export function UserReducer(state = [], action) {
    switch (action.type) {
        case ADD_USER_RED:

            state.push(action.data);
            return state; // Use the spread operator to create a new array
        case GET_USER_RED:
            state=action.data
            return state
            case UPDATE_USER_RED:
            
            var index = state.findIndex((item) =>  item.id === Number(action.data.id ))
           
            state[index].name = action.data.name
            return state
            case DELETE_USER_RED:
                var newState = state.filter((item)=>item.id!==action.data.id)
                return newState
        default:
            return state;
    }
}