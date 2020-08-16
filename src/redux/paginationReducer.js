import {NEXT_PAGE, CHANGE_PAGE} from "./types";

const initialState = {
    items: [],
    currentPage: 1
}

export const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case "NEXT_PAGE": {
            return {items: action.payload}
        }
        case "CHANGE_PAGE": {
            return {items: action.payload,
                    currentPage: action.currentPage}
        }
    }
}
