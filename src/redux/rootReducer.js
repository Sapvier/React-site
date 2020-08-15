import { combineReducers } from 'redux'
import {modalReducer} from "./modalReducer";
import {cardReducer} from "./cardReducer";
import {cardsReducer} from "./cardsReducer"


export const rootReducer = combineReducers({
    modalOpener: modalReducer,
    cardOpener: cardReducer,
    cardReducer: cardsReducer
})