import "./LandingView.css"
import "../../font.css"
import React from "react";
import {Link} from 'react-router-dom';

export default function LandingView({headerText, captionText}) {

    return (
        <span>
            <div className="landingText">
                    <h1>{headerText}</h1>
                    <h2>{captionText}</h2>
            </div>

                <div className="container">
                    <div className="box">
                        <Link to="/">
                            <img id="topLeftLogo" className="logo" src="https://i.ibb.co/Bq5X8b0/ripple-logo.png" alt="ripple logo" border="0"/>
                        </Link>
                    </div>
                    <div className="box"/>
                    <div className="box"/>
                    <div className="box"/>
                    <div className="box"/>
                    <div className="box"/>
                    <div className="box"/>

                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box">
                            <img className="downArrow" src="https://i.ibb.co/jRG7b7r/down-Arrow.png" alt="down arrow" border="0"/>
                    </div>
                    <div className="box"></div>
                    <div className="box"></div>

                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>

                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>

                </div>
        </span>

    )

}