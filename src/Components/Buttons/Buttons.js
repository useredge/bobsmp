import React, {useState} from "react";
import './Buttons.css'
import {CopyToClipboard} from "react-copy-to-clipboard";
import TextTransition, { presets } from "react-text-transition";
import { nodeName } from "jquery";

const Buttons = () => {

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
                        <h2><i class="fas fa-external-link-square-alt"/> BOBSSMP.COM</h2>
                    </div>
                    <TextTransition text={title} className="swap" direction="down">
                    </TextTransition>
                </div>
            </CopyToClipboard>


                <div className="discordButton">
                    <div className="outline">
                        <a style={{textDecoration: 'none', color: 'white'}}rel="noreferrer" target="_blank" href="https://discord.gg/Vk7zQ7V"><h2 className="discord"><i className="fab fa-discord"></i> OUR DISCORD</h2></a>
                    </div>
                    <h2 className="join">JOIN OUR DISCORD SERVER!</h2>
                </div>
            </div>
        </div>
    )
}

export default Buttons;