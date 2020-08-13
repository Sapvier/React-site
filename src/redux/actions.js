import {OPEN_MODAL} from "./types";
import {CLOSE_MODAL} from "./types";
import {CLOSE_CARD} from "./types";

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
