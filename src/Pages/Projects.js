import React from 'react';
import white from "../img/white.jpg";
import tower from "../img/tower.jpg";
import mz from "../img/mz.jpg";
import wer from "../img/wer.jpg";

const style = {
    container: {
        background: "white",
        width: "100vw",
    },
    leftColumn: {
        flex: "50%",
        paddingTop: "8rem",
        paddingLeft: "4rem"
    },
    rightColumn: {
        flex: "50%",
        paddingTop: "8rem",
    },
    wrapper: {
        width: "70%",
        display: 'flex',
        background: "white",
        marginLeft: "auto",
        marginRight: "auto",
    },
    img1: {
        height: "600px",
        width: '600px'
    },
    img2: {
        height: "650px",
        width: '500px',
        paddingBottom: '8rem',

    },
    headText: {
        paddingLeft: '5rem'
    },
    img3: {
        height: "650px",
        width: '500px',
        paddingBottom: '8rem',
        paddingLeft: '5rem',
    },
    img4: {
        height: "500px",
        width: '600px',
        paddingBottom: '8rem',
        paddingRight: '5rem',
    },
    text: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '600px',
        marginTop: '-15px',
        fontSize: '14px',
        color: 'rgba(0,0,0, 0.7)',
        paddingBottom: '8rem'
    }

}

function Projects() {
    return (
        <div style={style.container}>
            <div style={style.wrapper}>
                <div style={style.leftColumn}>
                    <img style={style.img1} src={white}></img>
                    <div style={style.text}>
                        <p>Г.БЕРЛИН, ЛАУНДЖ ЗОНА</p>
                        <p>25 M3</p>
                    </div>
                    <img style={style.img2} src={tower}></img>
                    <p></p>
                </div>
                <div style={style.rightColumn}>
                    <h2 style={style.headText}>СОЗДАЕМ<br/> СТИЛЬ И УЮТ<br/> В КАЖДОЙ ДЕТАЛИ</h2>
                    <p style={style.headText}>Дизайн проекты интерьеров<br/> от идеи до реализации</p>
                    <img style={style.img3} src={mz}></img>
                    <p></p>
                    <img style={style.img4} src={wer}></img>
                </div>
            </div>
        </div>
    );
}

export default Projects;