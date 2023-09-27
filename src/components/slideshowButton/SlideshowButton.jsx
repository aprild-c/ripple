import React from "react";
import './SlideshowButton.css';

export default function SlideshowButton({page}){

    if (page === "home"){
        return (
            <div className="slideButton"><a href="#topLeftLogo">Order Space</a></div>
        )
    } else if (page === "services"){
        return (
            <div className="slideButton"><a href="#topLeftLogo">Book Service</a></div>
        )
    } else {
        return
    }

}
