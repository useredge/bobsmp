import React, {useState} from "react";
import './Buttons.css'
import {CopyToClipboard} from "react-copy-to-clipboard";
import { AnimateOnChange } from 'react-animation'
import TextTransition, { presets } from "react-text-transition";
import { nodeName } from "jquery";

export const IpButton = () => {

    const [value, setValue] = useState("BOBSSMP.COM");
    const [title, setTitle] = useState("CLICK TO COPY");

    return(
        <div>
            <input style={{display: "none"}}
                   value={value}
                   onChange={({target: {value}}) => {
                       setValue(value)
                   }
                   } />

            <div className="buttonsContainer">
            <CopyToClipboard text={value}>

                <div className="ipButton" onClick={() => {
                    setTitle("COPIED TO CLIPBOARD")
                    setTimeout(() => setTitle("CLICK TO COPY"), 5000)
                }}>
                    <div className="ip">
                        <p>BOBSSMP.COM</p>
                    </div>
                    <AnimateOnChange
                        className="swap"
                        animationIn="fadeIn"
                        animationOut="fadeOut"
                        durationOut={1000}>
                        {title}
                    </AnimateOnChange>
                </div>
            </CopyToClipboard>
            </div>
        </div>
    )
}

export const DiscordButton = () => {
    return (
        <div className="discordButton">
                <a style={{textDecoration: 'none', color: 'white'}} rel="noreferrer" target="_blank" href="https://discord.gg/Vk7zQ7V"><p className="discord"><img src="/images/Pixel Icons/discordfiltered.png" className="discordIcon"/>JOIN OUR DISCORD</p></a>
            <p className="join">JOIN OUR DISCORD SERVER!</p>
        </div>
    )
}