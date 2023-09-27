import React from 'react';
import './SlideshowNavigation.css';

function SlideshowNavigation({ currentSlide, totalSlides, onSlideChange }) {
    return (
        <div className="slideNav">
            <button className="arrowButton" onClick={() => onSlideChange(currentSlide - 1)}>&lt;</button>

            <div className="circleContainer">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                    <div key={idx} className={`circle ${currentSlide === idx ? 'active' : ''}`}></div>
                ))}
            </div>

            <button className="arrowButton" onClick={() => onSlideChange(currentSlide + 1)}>&gt;</button>
        </div>

    );
}

export default SlideshowNavigation;
