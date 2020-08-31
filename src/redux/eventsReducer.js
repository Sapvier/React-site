import {EVENT_ADD} from './types'

const initialState = {
    events: []
}

export const eventsReducer = (state = initialState, action, payload) => {
    switch (action.type) {
        default:
            return state
        case "EVENT_ADD": {
            return ({...state, notes: [...state.notes, payload]})
        }
    }
}