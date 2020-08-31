import React, {useEffect} from "react";
import Event from "./Event";
import {useDispatch, useSelector} from "react-redux";
import {changePage, getEvents} from "../redux/actions";

function AddedEvents() {
    const dispatch = useDispatch()
    const events = useSelector(state => state.firebaseReducer.events)

    useEffect(() => {
        dispatch(getEvents())
    }, []);

    return (
        events.map(event => <Event event={event}/>)
    );
}

export default AddedEvents;

