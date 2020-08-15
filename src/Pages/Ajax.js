import React from 'react';
import Cards from "../Components/Cards";


const style = {
    background: 'lightgrey',
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "stretch",

}

function Ajax() {
    return (
        <div style={style}>
            <Cards />
        </div>
    );
}

export default Ajax;