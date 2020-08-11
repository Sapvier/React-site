import React from 'react';
import wpw from "../img/wpw.jpg"

const style = {
    backgroundImage: `url(${wpw})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh"

}

function Home() {
    return (
        <div style={style}>Home</div>
    );
}

export default Home;