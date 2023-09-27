import "./Home.css"
import React from "react";
import NavBar from "../../components/navbar/NavBar";
import LandingView from "../../components/landingView/LandingView";
import Marquee from "../../components/marquee/Marquee";
import SlideShow from "../../components/slideshow/Slideshow";

export default function Home() {

    return (
        <>
            <NavBar/>
            <LandingView headerText="Welcome to the Batumi’s smartest community —" captionText="Designed with intentionality, creativity
and purpose. Curated to uplift those who choose it for working and exploration."/>
            <Marquee marqueeText="From a drop to an ocean."/>
            <div className="contentView">
                <SlideShow page="home" section="1"/>
                <SlideShow page="home" section="2"/>
                <SlideShow page="home" section="3"/>
            </div>
        </>
    )

}