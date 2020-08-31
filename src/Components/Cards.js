import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "./Card";
import {fetchCards} from '../redux/actions'

const style = {
    color: 'white',
    background: 'rgba(255,0,0, .7)',
    border: 'none',
    padding: '1rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer'
}

export default () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.cardReducer.cards)

    if (!cards.length) {
        return <button style={style} onClick={() => dispatch(fetchCards())}><strong>Загрузим фильмы с сайта tvmaze.com по запросу 'Fire'</strong></button>
    }
    return cards.map(card => <Card card={card}/>)
}
