import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Style/CSS/Carousel.css';
import ReviewImage from "../Style/Images/review.png";

function ReviewsCarousel() {
    const datas = [
        {
            id:1,
            title: "titre",
            text:'lorem ipsum'
        },
        {
            id:2,
            title: "titre",
            text:'lorem ipsum'
        },
        {
            id:3,
            title: "titre",
            text:'lorem ipsum'
        }
    ]
    return(
    <Carousel className='carousel' autoPlay interval={6000} infiniteLoop thumbWidth={120} showIndicators={false} showStatus={false}>
        {datas.map((slide) =>(
            <div key={slide.id}>
                <img src={ReviewImage} alt="review"/>
                <div className='overlay'>
                    <h2 className='overlay-title'>{slide.title}</h2>
                    <p className='overlay-text'>{slide.text}</p>
                </div>
                
            </div>
        ))}   

    </Carousel>)
}

export default ReviewsCarousel;