import React, {useState} from "react";
import { Link } from 'react-router-dom'
import { AnimateOnChange } from 'react-animation'
import './Navbar.css';

const Navbar = () => {

    const [visible, setVisible] = useState(false)

    let blue = "blue";
    let purple = "purple";
    let green = "green";

    // eslint-disable-next-line default-case
    if(!visible) {
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
    }

    switch (window.location.pathname.includes('/blog')) {
        case true: 
        purple += " permapurple"
        break;
        case false:
        break;
    } 
    

    return (
        <div>
            <AnimateOnChange
                className="hamburger"
                animationIn="fadeIn"
                animationOut="fadeOut">

                    <i className={visible? "fas fa-times" : "fas fa-bars"} onClick={() => {setVisible(!visible)}}/>

            </AnimateOnChange>
        <div className={visible ? "navContainer visible" : "navContainer hidden"}>
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
                    <a href="https://shop.bobssmp.com/" style={{ textDecoration: 'none', color: 'white' }}>
                        <div className="shop"><li>SHOP <i class="fas fa-shopping-cart"/></li></div>
                    </a>
                </ul>
            </nav>
        </div>
        </div>
    )
}

export default Navbar