import React from 'react';
import AddedEvents from "../Components/AddedEvents";


const style = {
    container: {
        background: "white",
        width: "100vw",
    }
}


function Events() {
    return (
        <div style={style.container}>
            <AddedEvents />
        </div>
    );
}

export default Events;