import React from "react";

const PagCard = ({card}) => {

    const style = {
        image: {
            height: '230px',
            width: '180px',
            backgroundImage: `url(${card.download_url})`,
            backgroundSize: 'cover',
            backgroundPosition: "center"
        },
        card: {
            height: '310px',
            width: '180px',
            background: 'rgba(255,140,105, 0.5)',
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
            <p style={style.text}>{card.author}</p>
        </div>
        )

}

export default PagCard;