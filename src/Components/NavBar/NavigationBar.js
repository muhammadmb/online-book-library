import React from 'react';
import '../../Style.css';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
  
    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <button className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarContent" 
                    aria-controls="navbarContent"
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    style={{outline:"none"}}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <Link className="navbar-brand" to="/">BookReaders</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Authors">Authors</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Books">Books</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Connect">Connect</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default NavigationBar;
