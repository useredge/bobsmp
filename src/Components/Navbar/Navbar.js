import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import { AnimateOnChange } from 'react-animation'
import './Navbar.css';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const [color, setColor] = useState('#25c5e7')

    let defColor = '';
    let location = window.location.pathname

    switch(location) {
        default: 
            defColor = '#25c5e7'
        break;
        case '/' :
            defColor = '#25c5e7'
        break;
        case '/blog' :
            defColor = '#e18fff'
        break;
        case '/help' :
            defColor = '#9cff8f'
        break;
        case '/shop' :
            defColor = '#ff4545'
        break;
    }

    useEffect(() => {
        setColor(defColor)
    }, [])

    return (
        <div>
            <AnimateOnChange
                className="hamburger"
                animationIn="fadeIn"
                animationOut="fadeOut">

                    <i className={visible? "fas fa-times" : "fas fa-bars"} onClick={() => {setVisible(!visible)}}/>

            </AnimateOnChange>
        <div className={visible ? "navContainer visible" : "navContainer hidden"} style={{backgroundColor: color}}>
            <nav>
                <ul className="nav-links">
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                        <li 
                        className={(location === '/') ? "home active" : "home"}
                        onMouseEnter={() => {setColor('#25c5e7')}}
                        onMouseLeave={() => {setColor(defColor)}}><img src="/images/Pixel Icons/home.png" className="navIcon"/><p className="navTitle">HOME</p></li>
                    </Link>
                    <Link to='/blog' style={{ textDecoration: 'none', color: 'white' }}>
                        <li 
                        className={(location === '/blog') ? "news active" : "news"} 
                        onMouseEnter={() => {setColor('#e18fff')}}
                        onMouseLeave={() => {setColor(defColor)}}><img src="/images/Pixel Icons/chat.png" className="navIcon"/><p className="navTitle">NEWS</p></li>
                    </Link>
                    <Link to='/help' style={{ textDecoration: 'none', color: 'white' }}>
                        <li 
                        className={(location === '/help') ? "help active" : "help"} 
                        onMouseEnter={() => {setColor('#9cff8f')}}
                        onMouseLeave={() => {setColor(defColor)}}><img src="/images/Pixel Icons/heart.png" className="navIcon"/><p className="navTitle">HELP</p></li>
                    </Link>
                    <a href="https://shop.bobssmp.com/" style={{ textDecoration: 'none', color: 'white' }}>
                        <li 
                        className="shop"
                        onMouseEnter={() => {setColor('#ff4545')}}
                        onMouseLeave={() => {setColor(defColor)}}><img src="/images/Pixel Icons/basket.png" className="navIcon"/><p className="navTitle">SHOP</p></li>
                    </a>
                </ul>
            </nav>
        </div>
        </div>
    )
}

export default Navbar