import React from 'react';
import { useSelector } from 'react-redux';
import './LoadingAnimationStyle.css';

const LoadingAnimation = () => {

    const { Dark } = useSelector((state) => state.Theme);

    return (
        <div className={Dark ? "loader" : "loader light"}>
            <div className='balls-container'>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>
        </div>
    )
}

export default LoadingAnimation