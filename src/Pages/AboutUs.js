import React from 'react';
import aboutus from "../img/aboutus.jpg";

const style = {
    backgroundImage: `url(${aboutus})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh"

}


function AboutUs() {
    return (
        <div style={style}>AboutUs</div>
    );
}

export default AboutUs;