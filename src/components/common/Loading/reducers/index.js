import { INITIAL_STATE } from "../../../../app/store";

export const loadingReducer = (state = INITIAL_STATE,action) => {
    
    switch(action.type) {
        case 'ISLOADING':
            return {...state,isLoading: action.payload};
        default:
           return state;
    }
};
