import React from 'react';
import contacts from "../img/contacts.jpg";

const style = {
    backgroundImage: `url(${contacts})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh"

}

function Contacts() {
    return (
        <div style={style}>Contacts</div>
    );
}

export default Contacts;