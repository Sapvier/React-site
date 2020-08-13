import { combineReducers } from 'redux'
import {modalReducer} from "./modalReducer";
import {cardReducer} from "./cardReducer";


export const rootReducer = combineReducers({
    modalOpener: modalReducer,
    cardOpener: cardReducer
})