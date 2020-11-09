import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {

    let orange = "orange";
    let blue = "blue";
    let green = "green";

    // eslint-disable-next-line default-case
    switch (window.location.pathname) {
        case "/":
            orange += " permaorange"
            break;
        case "/blog":
            blue += " permablue"
            break;
        case "/help":
            green += " permagreen"
            break;
    }
    
    switch (window.location.pathname.includes('/blog')) {
        case true: 
        blue += " permablue"
        break;
        case false:
        break;
    }

    return (
        <div>
            <nav>
                <ul className="nav-links">
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                        <li className={orange}>HOME <i class="fas fa-home"/></li>
                    </Link>
                    <Link to='/blog' style={{ textDecoration: 'none', color: 'white' }}>
                        <li className={blue}>BLOG <i class="fas fa-pencil-alt"/></li>
                    </Link>
                    <Link to='/help' style={{ textDecoration: 'none', color: 'white' }}>
                        <li className={green}>HELP <i class="fas fa-question"/></li>
                    </Link>
                    <Link to='/shop' style={{ textDecoration: 'none', color: 'white' }}>
                        <li className="red">SHOP <i class="fas fa-shopping-cart"/></li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar