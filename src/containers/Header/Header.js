import React from 'react';
import { Link } from "react-router-dom";

import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">Bakum</div>
            <div className="header-links">
                <Link to="/blog">BLOG</Link>
                <Link to="/about">ABOUT ME</Link>
            </div>
        </div>
    )
}

export default Header;