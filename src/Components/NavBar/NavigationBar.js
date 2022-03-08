import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../../Style.css';
import './NavigationBarStyle.css';
import { Link, NavLink } from 'react-router-dom';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import PublishIcon from '@material-ui/icons/Publish';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { ChangeTheme } from '../../Store/ThemeSlice';

const NavigationBar = () => {

    const [search, setSearch] = useState("");
    const [openNav, setOpenNav] = useState(false);
    const { Dark } = useSelector((state) => state.Theme)
    const dispatch = useDispatch();

    const handelChange = (event) => {
        setSearch(event.target.value);
    }

    const handelThemeChange = () => {
        setOpenNav(false);
        dispatch(ChangeTheme());
    }

    return (
        <nav className={Dark ? "navbar" : "navbar light"}>

            <div className='container'>
                <button
                    className="navbar-toggler"
                    onClick={() => { setOpenNav(!openNav) }}
                >
                    <MenuOpenIcon />
                </button>

                <div className={openNav ? "navbar-content" : "navbar-content hide"}>

                    <ul>
                        <li>
                            <NavLink className="navbar-brand" to="/" onClick={() => { setOpenNav(false) }}>BR</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/" onClick={() => { setOpenNav(false) }} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/Authors" onClick={() => { setOpenNav(false) }}>Authors</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/Books" onClick={() => { setOpenNav(false) }}>Books</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/Connect" onClick={() => { setOpenNav(false) }}>Connect</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/About" onClick={() => { setOpenNav(false) }}>About</NavLink>
                        </li>
                    </ul>

                    <div className='search-area'>
                        <div className='icons'>
                            <NavLink to="/Add-book" onClick={() => { setOpenNav(false) }}>
                                <PublishIcon className="nav-icon" fontSize="large" />
                            </NavLink>

                            {
                                !Dark ?
                                    <Brightness6Icon
                                        className="nav-icon"
                                        fontSize="large"
                                        onClick={handelThemeChange}
                                    />
                                    :
                                    <NightsStayIcon
                                        className="nav-icon"
                                        fontSize="large"
                                        onClick={handelThemeChange}
                                    />
                            }
                        </div>

                        <form className="form-inline">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={handelChange}
                                value={search}
                            />

                            <Link
                                to={`/search/${search}`}
                                onClick={() => { setOpenNav(false) }}
                            >
                                <button
                                    className="search-btn"
                                    type="submit"
                                >Search
                                </button>
                            </Link>
                        </form>
                    </div>

                </div>
            </div>
        </nav>

    );
}

export default NavigationBar;
