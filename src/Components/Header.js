import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Events from "../Pages/Events";
import Ajax from "../Pages/Ajax";
import Validation from "../Pages/Validation";
import Pagination from "../Pages/Pagination";
import Home from "../Pages/Home";
import Modal from "./Modal";
import {connect} from 'react-redux';

const style = {
    link: {
        textDecoration: "none",
        paddingRight: "1rem",
        color: "lightgrey",
        fontSize: "12.5px"
    },
    container: {
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "rgba(0,0,0,0.5)",
        alignItems: "center",
        color: "lightgrey",
        position: 'fixed',
        width: "100%",
        zIndex: '1'
    },
    form: {
        display: 'inline'
    },
    button: {
        padding: "1em",
        marginLeft: ".5rem",
        border: "1px solid black",
        backgroundColor: "rgba(0,0,0,0.2)",
        color: "lightgrey",
        fontSize: "12.5px",
        cursor: "pointer"
    },
    home: {
        textDecoration: "none",
        paddingRight: "1rem",
        color: "lightgrey",
    }
}

function Header({orderProject}) {
    const handleClick = (e) => {
        e.preventDefault()
        orderProject()
    }

    return (
        <>
            <div style={style.container}>
                <h2><a style={style.home} exact href="/">REACT APP</a></h2>
                <nav>
                    <a style={style.link} href="/events">СОБЫТИЯ</a>
                    <a style={style.link} href="/ajax">AJAX ЗАПРОСЫ</a>
                    <a style={style.link} href="/validation">ВАЛИДАЦИЯ</a>
                    <a style={style.link} href="/pagination">ПАГИНАЦИЯ</a>
                    <form style={style.form}>
                        <button style={style.button} onClick={handleClick}>POP - UP</button>
                    </form>
                </nav>
            </div>
        <Modal />
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/ajax" component={Ajax} />
                <Route exact path="/validation" component={Validation} />
                <Route exact path="/pagination" component={Pagination} />

            </Switch>
        </Router>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        orderProject: () => {dispatch({type: "OPEN_MODAL"})
        }
    }
}
// const mapStateToProps = state => ({
//      modalState: state.modalReducer
//
// })
export default connect(null, mapDispatchToProps)(Header);
