import { INITIAL_STATE } from "../../../app/store";

export const fetchProducts = (state = INITIAL_STATE,action) => {
    
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return {...state,isLoading: false,products: { ...action.payload,error: null}};
        case 'FETCH_PRODUCTS_ERROR':
            return {...state,isLoading: false,products: { ...action.payload}};
        default:
           return state;
    }
};
