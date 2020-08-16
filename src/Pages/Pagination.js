import React from 'react';
import PaginationCards from "../Components/PaginationCards";
import PaginationPages from "../Components/PaginationPages";


const style = {
    container: {
        background: 'lightgrey',
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        alignContent: "stretch",
    },
    pages: {
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "stretch",
    }
}

function Pagination() {
    return (
            <div style={style.container}>
                <PaginationCards />
                <div style={style.pages}>
                    <PaginationPages />
                </div>
            </div>
    );
}

export default Pagination;