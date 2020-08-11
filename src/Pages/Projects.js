import React from 'react';
import project1 from "../img/project1.jpg"
import project2 from "../img/project2.jpg"

const style = {
    container: {
        background: "white",
        width: "100vw",
    },
    column: {
        flex: "50%",
        padding: "8rem 10rem"
    },
    wrapper: {
        width: "70%",
        display: 'flex',
        background: "grey",
        marginLeft: "auto",
        marginRight: "auto",
    }

}

function Projects() {
    return (
        <div style={style.container}>
            <div style={style.wrapper}>
                <div style={style.column}>
                    <img src={project1} alt="lounge1"/>
                    <img src={project2} alt="lounge2"/>
                </div>
                <div style={style.column}>
                    <h2>СОЗДАЕМ<br/> СТИЛЬ И УЮТ<br/> В КАЖДОЙ ДЕТАЛИ</h2>
                    <p>Дизайн проекты интерьеров<br/> от идеи до реализации</p>
                    <img/>
                </div>
            </div>
        </div>
    );
}

export default Projects;