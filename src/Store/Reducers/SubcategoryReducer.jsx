
import { ADD_SUBCATEGORY_RED, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY_RED } from "../Constant";

export function SubcategoryReducer(state = [], action) {
    switch (action.type) {
        case ADD_SUBCATEGORY_RED:
            state.push(action.data);
            return state; // Use the spread operator to create a new array
        case GET_SUBCATEGORY_RED:
            state=action.data
            return state
            case UPDATE_SUBCATEGORY_RED:
            
            var index = state.findIndex((item) =>  item.id === Number(action.data.id ))
           
            state[index].name = action.data.name
            return state
            case DELETE_SUBCATEGORY_RED:
                var newState = state.filter((item)=>item.id!==action.data.id)
                return newState
        default:
            return state;
    }
}