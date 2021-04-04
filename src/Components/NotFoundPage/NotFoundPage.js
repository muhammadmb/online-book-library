import React from 'react';
import './NotFoundStyle.css';
import bg from '../../Images/bg.jpg'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

    const theme = localStorage.getItem('theme')

    return (
        <div className={theme === 'light' ? "notFound light" : "notFound"}>
            <div className="container">
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h1 style={{ backgroundImage: `url(${bg})` }}>Oops!</h1>
                        </div>
                        <h2>404 - Page not found</h2>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <Link to="/" className="HomeLink">Go To Homepage</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NotFoundPage;