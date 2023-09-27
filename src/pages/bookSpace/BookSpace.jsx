import "./BookSpace.css"
import React from "react";
import NavBar from "../../components/navbar/NavBar";
import LandingView from "../../components/landingView/LandingView";
import Marquee from "../../components/marquee/Marquee";

export default function BookSpace() {

    return (
        <>
            <NavBar/>
            <LandingView headerText="Ripple - your friendly Companion on your creative Journey" captionText="We believe our lives are enhanced when lived with Creativity, Connection, and Intent. Ripple is the place for that."/>
            <Marquee marqueeText="Positively impact the world we share."/>
            <div className="contentView">
                yo
            </div>
        </>
    )

}