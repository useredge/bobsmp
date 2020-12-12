import React, {useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import TextTransition from 'react-text-transition'
import { AnimateOnChange } from 'react-animation'
import './Footer.css'

const Footer = () => {

    const [value, setValue] = useState("BOBSSMP.COM");
    const [title, setTitle] = useState("CLICK TO COPY");

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
                        <div className="footerButton" onClick={() => {
                            setTitle("COPIED TO CLIPBOARD")
                            setTimeout(() => setTitle("CLICK TO COPY"), 5000)
                            }}>
                            <div className="fIp">
                                <p>BOBSSMP.COM</p>
                            </div>
                            <AnimateOnChange
                                animationIn="fadeIn"
                                animationOut="fadeOut"
                                durationOut={200}
                                >
                                    <div className="copy">
                                        {title}
                                    </div>   
                            </AnimateOnChange>
                                
                        </div>
                    </CopyToClipboard>
                </div>
                <div className="socialWrapper">
                    <p style={{padding: '1vh', borderBottom: '2px solid #c69848'}}>Follow our socials</p>
                <div className="socials">
                    <a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCn5rWdZ2ypG6-BZLWRpHUZg"><i className="fab fa-youtube"/></a>
                    <a rel="noreferrer" target="_blank" href="https://twitter.com/bob_smp"><i className="fab fa-twitter"/></a>
                    <a rel="noreferrer" target="_blank" href="https://discord.gg/Vk7zQ7V"><i className="fab fa-discord"></i></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer