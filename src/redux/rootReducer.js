import { combineReducers } from 'redux'
import {modalReducer} from "./modalReducer";
import {cardReducer} from "./cardReducer";
import {cardsReducer} from "./cardsReducer";
import {paginationReducer} from "./paginationReducer";
import {eventsReducer} from "./eventsReducer";
import {firebaseReducer} from "./firebaseReducer";



export const rootReducer = combineReducers({
    modalOpener: modalReducer,
    cardOpener: cardReducer,
    cardReducer: cardsReducer,
    paginationReducer: paginationReducer,
    eventsReducer: eventsReducer,
    firebaseReducer: firebaseReducer
})