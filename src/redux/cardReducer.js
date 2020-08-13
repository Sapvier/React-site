import {OPEN_MODAL} from "./types";
import {CLOSE_MODAL} from "./types";

const initialState = {
    isCardOpen: true
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case "CLOSE_CARD": {
            return {isCardOpen: false}
        }
    }
}