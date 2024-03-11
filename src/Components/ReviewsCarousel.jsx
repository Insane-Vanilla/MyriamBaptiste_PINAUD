import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Style/CSS/Carousel.css';
import ReviewImage from "../Style/Images/review.png";
import { Typography } from '@mui/material';

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

                <Typography className='overlay'></Typography> 

                <div className='overlay'>
                    <Typography sx={{textAlign:"right"}}className='overlay-title'>{slide.title}</Typography> 
                    <Typography sx={{textAlign:"right"}}className='overlay-text'>{slide.text}</Typography> 
                </div>
                
            </div>
        ))}   

    </Carousel>)
}

export default ReviewsCarousel;