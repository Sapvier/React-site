import {OPEN_MODAL, CLOSE_MODAL, CLOSE_CARD, FETCH_CARDS, NEXT_PAGE, CHANGE_PAGE} from "./types";

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
export function changePage(count) {
    return async dispatch => {
        const response = await fetch(`https://picsum.photos/v2/list?page=${count}&limit=11`)
        const json = await response.json()
        dispatch({type: CHANGE_PAGE, payload: json, currentPage: count})
    }
}