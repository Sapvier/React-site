import React from "react";
import {useSelector} from "react-redux";
import Page from "./Page";


const PaginationPages = () => {

    const items = useSelector(state => state.paginationReducer.items);
    const pageCount = Math.floor(items.length / 3);
    let pages = [];
    for(let i=0; i<=pageCount; i++) {
        pages.push(i)
    }
    return (
        pages.map(pageNumber => <Page count={pageNumber + 1}/>)

    )
}

export default PaginationPages;
