import React, {useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import TextTransition from 'react-text-transition'
import { AnimateOnChange } from 'react-animation'
import './Footer.css'

const Footer = () => {

    const [value, setValue] = useState("BOBSSMP.COM");
    const [title, setTitle] = useState("");

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
                            setTimeout(() => setTitle(""), 5000)
                            }}>
                            <div className="fIp">
                                <h2>BOBSSMP.COM</h2>
                            </div>
                            <div className="fComing">
                                <h2>COMING SOON</h2>
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