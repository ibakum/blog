import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">Bakum</div>
            <div className="header-links">
                <NavLink to="/blog">BLOG</NavLink>
                <NavLink to="/about">ABOUT ME</NavLink>
            </div>
        </div>
    )
}

export default Header;