import React from 'react'
import $ from 'jquery';
import './grt-youtube-popup.js'
import './grt-youtube-popup.css'
import './Player.css'
import { DiscordButton } from '../Buttons/Buttons.js';

class Player extends React.Component {
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.grtyoutube({theme: "dark"});
    }

    render() {
        return (
            <div className="playerContainerWrapper">
                <p className="bobTitle"><img src="/images/Pixel Icons/star.png" className="star"/>  Who are we?</p>
                <div className="playerContainer">
                <div className="text">
                    <p>Bob's SMP is a Minecraft survival multi-player (SMP) server, that aims to add new content that seems modded, but is 100% pure vanilla. It adds many custom attributes and new experiences to the server without ever needing to touch the player's client! (Except for the requirement of Optifine at the moment).</p>
                    <DiscordButton />
                </div>
                <div className="thumbnailContainer youtube-link" youtubeid="WcEstdB4giw" ref={el => this.el = el}>
                    <div className="playButton">
                        <i class="fas fa-play-circle"/>
                        <p style={{textShadow: '0px 1px 14px rgba(0,0,0,1)'}}>CLICK TO PLAY</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}

export default Player