import { CHANGE_SEARCH_FIELD } from './constants.js';

//Staring point - Initial state
const initialState = {        
    searchField: ''
}

//create reducer
export const searchRobots = (state=initialState, action={}) => {

    //Double check switc statement syntax ****
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload}); 
        default: 
            return state; 
    }
}