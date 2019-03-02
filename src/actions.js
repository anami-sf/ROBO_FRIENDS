import { CHANGE_SEARCH_FIELD } from './constants.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,  // This is a constant
    payload: text
})