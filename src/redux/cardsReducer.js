import {FETCH_CARDS} from './types'

const initialState = {
    cards: []
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case "FETCH_CARDS": {
            return {cards: action.payload}
        }
    }
}