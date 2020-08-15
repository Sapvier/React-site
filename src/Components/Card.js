import React from "react";

const Card = ({card}) => {
    const style = {
        image: {
            height: '280px',
            width: '180px',
            backgroundImage: `url(${card.show.image.medium})`,
            backgroundSize: 'cover'
        },
        card: {
            height: '350px',
            width: '180px',
            background: 'grey',
            borderRadius: '5px',
            marginLeft: '3rem',
            marginRight: '3rem',
            marginTop: '5rem'

        },
        text: {
            textAlign: 'center'
        }
    }
    return (
        <div style={style.card}>
            <div style={style.image}/>
            <p style={style.text}>{card.show.name}</p>
        </div>
    )
}

export default Card;

