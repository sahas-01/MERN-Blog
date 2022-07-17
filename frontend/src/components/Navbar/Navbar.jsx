import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('userId');
        navigate('/login');
    }
    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink exact to="/home" className="nav-logo">
                        <h4 className="h1" style={{ color: 'white' }}>
                            Bloggr
                        </h4>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <a href="/writeblog" className="nav-links"
                                // onClick={click ? handleClick : null}
                                activeClassName="active">
                                Write Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/myblogs" className="nav-links"
                                // onClick={click ? handleClick : null}
                                activeClassName="active">
                                My Blogs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/profile" className="nav-links"
                                // onClick={click ? handleClick : null}
                                activeClassName="active">
                                Profile
                            </a>
                        </li>
                        <Box sx={{ flexGrow: 0 }}>
                            <Button variant="contained"
                                onClick={handleLogout}
                            >Logout</Button>
                        </Box>

                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </ div>
    );
};
export default Navbar;
