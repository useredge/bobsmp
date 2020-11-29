import React from "react";
import './Header.css';

const Header = (source) => {
    let dark = "bg";
    if (window.location.pathname.includes("/blog"))
        dark += " darkened"
        else dark = "bg"
    return(
            <div className={dark} style={{
                backgroundImage: 'url(' + source.link + ')', backgroundPosition: source.position
            }} />
    )
}

export default Header;