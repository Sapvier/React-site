import {OPEN_MODAL} from "./types";

export const rootReducer = (state = false, action) => {
    switch(action.type) {
        default: return state
        case "OPEN_MODAL": {
            return true
        }
    }
    return state
}