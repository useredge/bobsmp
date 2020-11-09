import React from 'react'
import $ from 'jquery';
import './grt-youtube-popup.js'
import './grt-youtube-popup.css'
import './Player.css'

class Player extends React.Component {
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.grtyoutube({theme: "dark"});
    }

    render() {
        return (
            <div className="container">
                <div className="text">
                    <h1 className="bobTitle">What is <span className="spanyellow">Bob</span><span className="spanblue">SMP</span>?</h1>
                    <p><span className="boldWrap">Bob's SMP</span> is a Minecraft survival multi-player (SMP) server, that aims to add new content that seems modded, but is 100% pure vanilla. It adds many custom attributes and new experiences to the server <span className="boldWrap"> without ever needing to touch the player's client!</span> (Except for the requirement of Optifine at the moment) This will start out as a <span className="boldWrap"> private event</span>, while simultaneously acting as a long-standing beta for players to enjoy, and for us testers to see what works or not. This is very much an <span className="boldWrap"> ongoing project.</span> It is a huge work in progress, but we have <span className="boldWrap">high standards and a clear vision</span> as to what we want this server to become. With your help and generous donations, we will create entirely new and refreshing gameplay for Minecraft!</p>
                </div>
                <div className="thumbnailContainer youtube-link" youtubeid="WcEstdB4giw" ref={el => this.el = el}>
                    <div className="playButton">
                        <i class="fas fa-play-circle"/>
                        <h3 style={{textShadow: '0px 1px 14px rgba(0,0,0,1)'}}>WATCH THE VIDEO</h3>
                    </div>
                </div>
            </div>
        )
    }

}

export default Player