import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Header = () => {
    const [user, setUser] = useState();
    const [showmenu, setMenu] = useState(false);
// Login user get//
    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        setUser(storedUser);
    }, [])
    return (
        <div className='Header'>
            <div className=" col-md-2 col-sm-3 col logo_section">
                <div className="full">
                    <div className="center-desk">
                        <div className="logo">
                            <Link to={"/"}><img src='../images/logo.png' alt='Logo' /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='navbar'>
                <div className='Profile'>
                    {user ?
                        <Link to="/profile" ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="blk" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg></Link> :
                        <Link to="/register"><i className="bi bi-person-fill-exclamation" ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="blck" className="bi bi-person-fill-exclamation" viewBox="0 0 16 16">
                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5m0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                        </svg></i></Link>}
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark black  " >
                    <div className=" navbar-nav">
                        <ul className={showmenu ? 'nav-res-links' : "nav"} onClick={() => setMenu(false)} >
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    ABOUT
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/skating" className="nav-link">
                                    SKATING
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop" className="nav-link">
                                    SHOP
                                </Link>
                            </li>
                        </ul>
                        <button className='res-menu-icon' onClick={() => setMenu(!showmenu)}>
                            {showmenu ? <h2>X</h2> : <h1>=</h1>}
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
