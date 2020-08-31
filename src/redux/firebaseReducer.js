import {POST_EVENT} from './types'
import {GET_EVENT} from './types'


const initialState = {
    events: [],
    loading: false
}

export const firebaseReducer = (state = initialState, action, payload) => {
    switch (action.type) {
        default:
            return state
        case "POST_EVENT": {
            return ({...state, notes: [...state.notes, payload]})
        }
        case "GET_EVENT": {
            return action.payload
        }
    }
}