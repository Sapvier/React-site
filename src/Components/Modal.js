import React from 'react';
import {connect} from "react-redux";
import Form from '../Components/Form'

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
        background: 'white',
    },
    close_button: {
        float: 'right',
        background: 'red',
        color: "white",
        borderRadius: "30%",
        border: 'none',
        cursor: 'pointer'
    }

}

function Modal({modalState, closeModal}) {
    const onModalClick = (e) => {
        e.stopPropagation();
        }
    const handleClose = (e) => {
        e.preventDefault()
        closeModal()
    }
    if (modalState) {
        return (
            <React.Fragment>
                    <div style={style.modal_cover} onClick={handleClose}>
                        <div style={style.modal_window} onClick={onModalClick}>Добавление нового события
                            <button style={style.close_button} onClick={handleClose}>&times;</button>
                            <Form />
                        </div>
                    </div>
            </React.Fragment>
        );
    }
    return <React.Fragment/>
}
const mapStateToProps = state => ({
    modalState: state.modalOpener.isOpen

})
const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => {dispatch({type: "CLOSE_MODAL"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
