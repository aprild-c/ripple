import "./Vision.css"
import React from "react";
import NavBar from "../../components/navbar/NavBar";
import LandingView from "../../components/landingView/LandingView";
import Marquee from "../../components/marquee/Marquee";

export default function Vision() {

    return (
        <>
            <NavBar/>
            <LandingView headerText="In the heart of Batumi's scenic embrace, discover Ripple -" captionText="a realm beyond the ordinary, where work-life balance is not just a concept but a lived reality."/>
            <Marquee marqueeText="From a drop to an ocean."/>
            <div className="contentView">
                yo
            </div>
        </>
    )

}