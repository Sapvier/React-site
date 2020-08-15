import React from 'react';
import PaginationCards from "../Components/PaginationCards";


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

function Pagination() {
    return (
        <div style={style}>
            <PaginationCards />
        </div>
    );
}

export default Pagination;