import React from "react";
import './Header.css';

const Header = (source) => {
    let dark = "bg";
    if (window.location.pathname.includes("/blog/"))
        dark += " darkened"
        else dark = "bg"
    return(
            <div className={dark} style={{
                backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(0,0,0,1) 100%), url(' + source.link + ')'
            }} />
    )
}

export default Header;