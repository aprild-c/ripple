import "./Marquee.css"
import React from "react";

export default function Marquee({marqueeText}) {

    return (
        <div className="strip">
            <h1>
                {marqueeText} {marqueeText} {marqueeText} {marqueeText}
            </h1>
        </div>

    )

}