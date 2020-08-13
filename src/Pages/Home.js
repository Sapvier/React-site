import React from 'react';
import wpw from "../img/wpw.jpg"
import Card from "../Components/Card";

const style = {
    backgroundImage: `url(${wpw})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

function Home() {
    return (
        <div style={style}>
            <Card />
        </div>
    );
}

export default Home;