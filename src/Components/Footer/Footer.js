import React, {useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import './Footer.css'

const Footer = () => {

    const [value, setValue] = useState("BOBSMP.COM");

    return (
        <div className="footer">
            <div className="flex">
                <div>
                    <input style={{display: "none"}}
                       value={value}
                       onChange={({target: {value}}) => {
                           setValue(value)
                       }
                       } />

                    <CopyToClipboard text={value}>

                        <div className="footerButton">
                        <div className="fIp">
                            <h2>BOBSMP.COM</h2>
                        </div>
                        <div className="fComing">
                            <h2>COMING SOON</h2>
                        </div>
                        </div>
                    </CopyToClipboard>
                </div>
                <div className="socials">
                    <a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCn5rWdZ2ypG6-BZLWRpHUZg"><i className="fab fa-youtube"/></a>
                    <a rel="noreferrer" target="_blank" href="https://twitter.com/bob_smp"><i className="fab fa-twitter"/></a>
                    <a rel="noreferrer" target="_blank" href="https://discord.gg/Vk7zQ7V"><i className="fab fa-discord"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer