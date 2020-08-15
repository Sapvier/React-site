import React from "react";
import {connect} from "react-redux";


const style = {
    text: {
        background: 'rgba(255, 0 ,0, .7)',
        height: '50px',
        width: '250px',
        cursor: "pointer",
        border: 'none',
        color: "white",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

}


const CloseMe = ({cardState, closeCard}) => {
    const handleCardClose = (e) => {
        e.preventDefault()
        closeCard()
    }
    if (cardState) {
        return (
            <div style={style.text} onClick={handleCardClose}><strong>CLOSE ME</strong></div>
         );
    }
    return <div />
}

const mapStateToProps = state => ({
        cardState: state.cardOpener.isCardOpen

})
const mapDispatchToProps = dispatch => {
        return {
            closeCard: () => {
                dispatch({type: "CLOSE_CARD"})
            }
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(CloseMe);


