import {OPEN_MODAL, CLOSE_MODAL, CLOSE_CARD, FETCH_CARDS, NEXT_PAGE, CHANGE_PAGE, GET_EVENT, POST_EVENT} from "./types";
import axios from "axios"
import {useDispatch} from "react-redux";

const url = process.env.REACT_APP_DB_URL

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
        const response = await fetch('http://api.tvmaze.com/search/shows?q=fire')
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
export function addEvent(event) {
    return {
        type: "EVENT_ADD",
        payload: event
    }
}
export function getEvents() {
    return async dispatch => {
        const res = await axios.get(`${url}/events.json`)
        dispatch({type: GET_EVENT, payload: res})
    }
}
export function addEvents(value) {
    return async dispatch => {
        const event = {
            title: value,
            date: new Date().toJSON()
        }
        try {
            const res = await axios.post(`${url}/events.json`, event)
            dispatch({type: POST_EVENT, payload: event})
        }
        catch (e) {
            throw new Error(e.message)
        }
    }
}