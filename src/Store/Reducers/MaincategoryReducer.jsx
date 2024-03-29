
import { ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY_RED } from "../Constant";

export function MaincategoryReducer(state = [], action) {
    switch (action.type) {
        case ADD_MAINCATEGORY_RED:
            state.push(action.data);
            return state; // Use the spread operator to create a new array
        case GET_MAINCATEGORY_RED:
            state=action.data
            return state
            case UPDATE_MAINCATEGORY_RED:
            
            var index = state.findIndex((item) =>  item.id === Number(action.data.id ))
           
            state[index].name = action.data.name
            return state
            case DELETE_MAINCATEGORY_RED:
                var newState = state.filter((item)=>item.id!==action.data.id)
                return newState
        default:
            return state;
    }
}