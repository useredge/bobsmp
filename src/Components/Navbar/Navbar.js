import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {

    let blue = "blue";
    let purple = "purple";
    let green = "green";

    // eslint-disable-next-line default-case
    switch (window.location.pathname) {
        case "/":
            blue += " permablue"
            break;
        case "/blog":
            purple += " permapurple"
            break;
        case "/help":
            green += " permagreen"
            break;
    }
    
    switch (window.location.pathname.includes('/blog')) {
        case true: 
        purple += " permapurple"
        break;
        case false:
        break;
    }

    return (
        <div className="navContainer">
            <nav>
                <ul className="nav-links">
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                        <li className={blue}>HOME <i class="fas fa-home"/></li>
                    </Link>
                    <Link to='/blog' style={{ textDecoration: 'none', color: 'white' }}>
                        <li className={purple}>NEWS <i class="fas fa-newspaper"/></li>
                    </Link>
                    <Link to='/help' style={{ textDecoration: 'none', color: 'white' }}>
                        <li className={green}>HELP <i class="fas fa-question"/></li>
                    </Link>
                    <Link to='/shop' style={{ textDecoration: 'none', color: 'white' }}>
                        <li className="shop">SHOP <i class="fas fa-shopping-cart"/></li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar