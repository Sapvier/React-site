import {OPEN_MODAL, CLOSE_MODAL} from "./types";

const initialState = {
    isOpen: false
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case "OPEN_MODAL": {
            return {isOpen: true}
        }
        case "CLOSE_MODAL": {
            return {isOpen: false}
        }
    }
}