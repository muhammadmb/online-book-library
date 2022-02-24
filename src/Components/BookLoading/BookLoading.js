import React from 'react';
import './BookLoadingStyle.css';
import { useSelector } from "react-redux";

const BookLoading = () => {

    const { Dark } = useSelector((state) => state.Theme);

    return (
        <div className={Dark ? "book" : "book light"}>
            <div className="inner">
                <div className="left"></div>
                <div className="middle"></div>
                <div className="right"></div>
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default BookLoading;