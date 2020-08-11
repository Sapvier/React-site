import React from 'react';
import {connect} from "react-redux";


const style= {
    modal_cover: {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        background: 'rgba(0,0,0, .5)',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '5rem'
    },
    modal_window: {
        padding: '2rem',
        height: '200px',
        width: '400px',
        borderRadius: '5px',
        background: 'white'
    }

}

function Modal({modalState}) {
    if (modalState) {
        return (
            <React.Fragment>
                    <div style={style.modal_cover}>
                        <div style={style.modal_window}>
                            <button>&times;</button>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
    return <React.Fragment/>
}
const mapStateToProps = state => {
    console.log(state)
    return {
        modalState: state
    }
}

export default connect(mapStateToProps, null)(Modal);
