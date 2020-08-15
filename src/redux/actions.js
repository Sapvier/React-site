import {OPEN_MODAL, CLOSE_MODAL, CLOSE_CARD, FETCH_CARDS} from "./types";

export function openModal() {
    return {
        type: "OPEN_MODAL"
    }
}
export function closeModal() {
    return {
        type: "CLOSE_MODAL"
    }
}
export function closeCard() {
    return {
        type: "CLOSE_CARD"
    }
}
export function fetchCards() {
    return async dispatch => {
        const response = await fetch('http://api.tvmaze.com/search/shows?q=batman')
        const json = await response.json()
        dispatch({type: FETCH_CARDS, payload: json})
    }
}

