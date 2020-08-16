import React from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {changePage} from '../redux/actions';

const style = {
    page: {
        width: "50px",
        height: "50px",
        borderRadius: '4px',
        background: 'salmon',
        opacity: '0.7',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        marginLeft:  '0.5rem',
        marginRight:  '0.5rem',
        marginTop: '1rem',
        cursor: 'pointer'
    },
    selected: {
        width: "50px",
        height: "50px",
        borderRadius: '4px',
        background: 'salmon',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        marginLeft:  '0.5rem',
        marginRight:  '0.5rem',
        marginTop: '1rem',
        color: 'red',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
}

const Page = ({count, currentPage}) => {
    const dispatch = useDispatch()

    const changePageClick = () => {
        return dispatch(changePage(count))
    }

    return (
        <span style={currentPage === count ? style.selected : style.page} onClick={changePageClick}>{count}</span>
    )
}
const mapStateToProps = state => ({
        currentPage: state.paginationReducer.currentPage
})

export default connect(mapStateToProps, null)(Page);
