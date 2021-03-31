import React, { useState } from 'react';
import '../../Style.css';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {

    const [search, setSearch] = useState("");

    const handelChange = (event) => {
        setSearch(event.target.value);
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ outline: "none" }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <NavLink className="navbar-brand" to="/">BookReaders</NavLink>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Authors">Authors</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Books">Books</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Connect">Connect</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About">About</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={handelChange}
                            value={search}
                        />
                        <Link to={`/search/${search}`}><button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button></Link>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default NavigationBar;
