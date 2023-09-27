import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import SlideshowButton from "../slideshowButton/SlideshowButton";
import SlideshowNavigation from "../slideshowNavigation/SlideshowNavigation";

const section1Home = [
    {
        header: 'Work-Life Balance',
        text: 'We transform your work journey into a harmonious blend of achievement and exploration. Ripple is the Space where your success story meets serenity.',
        imageUrl: 'https://i.ibb.co/WFhGnHn/coffee.jpg',
    },
    {
        header: 'Work and Travel',
        text: 'Embrace the nomadic lifestyle at Ripple, where productivity meets travel adventures. We elevate your travel experience, providing a tailored haven workspace.',
        imageUrl: 'https://i.ibb.co/HxqH9FP/meeting.jpg',
    },
    {
        header: 'Mental Health',
        text: 'At Ripple your mental well-being is our priority. We foster a supportive environment that refreshes your mind, nurtures creativity, and empowers your journey.',
        imageUrl: 'https://i.ibb.co/sgL8xvQ/man-working.jpg',
    }
];

const section2Home = [
    {
        header: 'Fresh Drinks',
        text: 'Refresh your ideas with \n' +
            'Ripple of fresh drinks. \n' +
            'Our handcrafted beverages invigorate your senses and \n' +
            'fuel creativity into a wave \n' +
            'of inspiration.',
        imageUrl: 'https://i.ibb.co/WFhGnHn/coffee.jpg',
    },
    {
        header: 'Georgian Food',
        text: 'Refresh your ideas with \n' +
            'Ripple of fresh drinks. \n' +
            'Our handcrafted beverages invigorate your senses and \n' +
            'fuel creativity into a wave \n' +
            'of inspiration.',
        imageUrl: 'https://i.ibb.co/HxqH9FP/meeting.jpg',
    },
    {
        header: 'Delicious Coffee',
        text: 'Refresh your ideas with \n' +
            'Ripple of fresh drinks. \n' +
            'Our handcrafted beverages invigorate your senses and \n' +
            'fuel creativity into a wave \n' +
            'of inspiration.',
        imageUrl: 'https://i.ibb.co/sgL8xvQ/man-working.jpg',
    }
];

const section3Home = [
    {
        header: 'Events',
        text: 'Experience and host meaningful events at Ripple. We offer vibrant spaces for your gatherings and curate enriching events that spark connections and ignite ideas.',
        imageUrl: 'https://i.ibb.co/WFhGnHn/coffee.jpg',
    },
    {
        header: 'Workshops',
        text: 'Experience and host meaningful events at Ripple. We offer vibrant spaces for your gatherings and curate enriching events that spark connections and ignite ideas.',
        imageUrl: 'https://i.ibb.co/HxqH9FP/meeting.jpg',
    },
    {
        header: 'Trainings',
        text: 'Experience and host meaningful events at Ripple. We offer vibrant spaces for your gatherings and curate enriching events that spark connections and ignite ideas.',
        imageUrl: 'https://i.ibb.co/sgL8xvQ/man-working.jpg',
    }
];

const section1Vision = [
    {
        header: 'The Concept',
        text: "In the vast expanse of the world's thriving Entrepreneurial Landscape, Ripple is a beacon of harmony, a unique fusion of Work and Life, designed with the precision and offering you a home away from home.",
        imageUrl: 'https://i.ibb.co/sgL8xvQ/man-working.jpg',
    },
];

function SlideShow({page, section}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    var sectionSlides =[];
    var pictureOnRight = true;
    if (page === "home"){
        if (section === "1"){
            sectionSlides = section1Home;
        } else if (section === "2"){
            sectionSlides = section2Home;
            pictureOnRight = false;
        } else {
            sectionSlides = section3Home;
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % sectionSlides.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    if (pictureOnRight) {
        return (
            <div className="slideShow">
                <div className="caption">
                    <h1 className="header">{sectionSlides[currentSlide].header}</h1>
                    <h2 className="text">{sectionSlides[currentSlide].text}</h2>
                    <SlideshowButton page={page}/>
                    <SlideshowNavigation
                        currentSlide={currentSlide}
                        totalSlides={sectionSlides.length}
                        onSlideChange={(newSlide) => setCurrentSlide(((newSlide % sectionSlides.length) + sectionSlides.length) % sectionSlides.length)}
                    />
                </div>
                <img src={sectionSlides[currentSlide].imageUrl} alt={sectionSlides[currentSlide].caption}/>
            </div>
        );
    } else {
        return (
            <div className="slideShow">
                <img src={sectionSlides[currentSlide].imageUrl} alt={sectionSlides[currentSlide].caption}/>
                <div className="caption">
                    <h1 className="header">{sectionSlides[currentSlide].header}</h1>
                    <h2 className="text">{sectionSlides[currentSlide].text}</h2>
                    <SlideshowButton page={page}/>
                    <SlideshowNavigation
                        currentSlide={currentSlide}
                        totalSlides={sectionSlides.length}
                        onSlideChange={(newSlide) => setCurrentSlide(((newSlide % sectionSlides.length) + sectionSlides.length) % sectionSlides.length)}
                    />
                </div>
            </div>
        );
    }
}

export default SlideShow;