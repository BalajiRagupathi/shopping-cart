import { INITIAL_STATE } from "../../../app/store";

export default (state = INITIAL_STATE,action) => {
    
    switch(action.type) {
        case 'FETCH_CART':
            return action.payload;
        case 'ADD_CART':
            return {...state,cart: [...action.payload]};
        case 'DECREMENT_CART':
            return {...state,cart: [...action.payload]};
        case 'REMOVE_CART':
            return {...state,cart: [...action.payload]};
        default:
           return state;
    }
};
