import React, {useState} from "react";
import './Team.css'
import Members from "./Members";
import { AnimateOnChange } from 'react-animation'
import { HideUntilLoaded } from 'react-animation'

const Team = () => {

    let [which, setWhich] = useState(0);

    const renderList = [];

    const checkActive = (element) => {
        return (element == which ? 'iconSelected' : 'icon')
    }

    for(let i=0; i<=Members.length - 1; i++) {
        renderList.push(
            <img key={Members[i].value}
            src={Members[i].icon}
            alt={Members[i].name}
            className={checkActive(Members[i].value)}
            onClick={() => {
                setWhich(i)
            }}/>
        )
    }

    return (

        <div className="teamComponent">
            <div className="titleWrapper">
                <h1 className="meet">Meet the Team!</h1>
                <p className="subtitle">These are the volunteers who helped make this possible!</p>
            </div>
                <div className="centerer" style={{backgroundColor: '#0d0e0f'}}>
                    <div className="select">
                        <i class="fas fa-arrow-left arrowsDesktop icon" onClick={() => {
                            if(which === 0) {
                                setWhich(Members.length - 1)
                            }
                            else
                            {
                                setWhich(which - 1)
                            }
                        }
                            }/>

                            {renderList}

                        <i class="fas fa-arrow-right arrowsDesktop icon" onClick={() => {
                            if(which === Members.length - 1) {
                                setWhich(0)
                            }
                            else
                            {
                                setWhich(which + 1)
                            }
                            }}/>
                    </div>
                </div>

            <div className="widgetContainer">
                <div className="widget">
                    <div className="teamText">
                        <AnimateOnChange
                            animationIn="fadeInUp"
                            animationOut="fadeOut"
                            durationOut={1000}
                        >
                        <h2 className="personName" style={{color: Members[which].color}}>&#8291;	&#8291;	&#8291;{Members[which].name} - {Members[which].role}</h2>
                        <p className="personDescription">{Members[which].description}</p>
                        </AnimateOnChange>
                    </div>
                    <div className="render">
                            <AnimateOnChange
                            animationIn="fadeInUp"
                            animationOut="fadeOut"
                            durationOut={1000}
                            >
                                <HideUntilLoaded
                                imageToLoad={Members[which].image}
                                >
                                    <img src={Members[which].image} alt="Skin" className="skin"/>
                                </HideUntilLoaded>
                            </AnimateOnChange>
                            <div className="mobileArrows">
                        <i class="fas fa-arrow-left arrowsMobile icon" style={{marginLeft: '3vw'}} onClick={() => {
                            if(which === 0) {
                                setWhich(Members.length - 1)
                            }
                            else
                            {
                                setWhich(which - 1)
                            }
                        }
                            }/>
                        <i class="fas fa-arrow-right arrowsMobile icon" style={{marginRight: '3vw'}} onClick={() => {
                            if(which === Members.length - 1) {
                                setWhich(0)
                            }
                            else
                            {
                                setWhich(which + 1)
                            }
                            }}/>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team