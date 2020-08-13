import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Projects from "../Pages/Projects";
import AboutUs from "../Pages/AboutUs";
import Blog from "../Pages/Blog";
import Contacts from "../Pages/Contacts";
import Home from "../Pages/Home";
import Modal from "./Modal";
import {connect} from 'react-redux'


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
            <h2><a style={style.home} href="/">ARCHINESIS</a></h2>
            <nav>
                <a style={style.link} href="/projects">ПРОЕКТЫ</a>
                <a style={style.link} href="/about-us">О НАС</a>
                <a style={style.link} href="/blog">БЛОГ</a>
                <a style={style.link} href="/contacts">КОНТАКТЫ</a>
                <form style={style.form}>
                    <button style={style.button} onClick={handleClick}>ЗАКАЗАТЬ ПРОЕКТ</button>
                </form>
            </nav>
        </div>
        <Modal />
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/contacts" component={Contacts} />

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
