import React, {useEffect} from 'react';
import {changePage} from '../redux/actions'
import {useDispatch, useSelector} from "react-redux";
import PagCard from "./PagCard";




function PaginationCards() {
    const dispatch = useDispatch()
    const items = useSelector(state => state.paginationReducer.items)
    const page = useSelector(state => state.paginationReducer.currentPage)

    useEffect(() => {
        dispatch(changePage(page))
    }, []);

    return (
        items.map(item => <PagCard card={item}/>)
    )

}
export default PaginationCards;