import React, {useEffect} from 'react';
import {fetchCards} from '../redux/actions'
import {useDispatch, useSelector} from "react-redux";
import Card from "../Components/Card";


function PaginationCards() {
    const dispatch = useDispatch()
    const films = useSelector(state => state.cardReducer.cards)

    useEffect(() => {
        dispatch(fetchCards())
    }, [])


    return (

            films.map(film => <Card card={film}/>)
    );
}

export default PaginationCards;