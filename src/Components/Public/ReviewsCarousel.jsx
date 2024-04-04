import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReviewImage from "../../Style/Images/review.png";
import { Typography, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from "axios";

function ReviewsCarousel() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/api_myriambaptiste/Controllers/Reviews/get.php")
            .then(res=> setData(res.data))
            .catch(err=> alert(err))
    },[])
    
    return(
        <Box sx={{bgcolor:'secondary.main'}}>
            <Typography variant="h1" sx={{color:'secondary.light', textAlign:'center'}}>Un mot de mes client.e.s </Typography>
            <br/>
            <Carousel sx={{m:'auto', ml:"10%", mr:"10%"}}  className='carousel' autoPlay interval={6000} infiniteLoop thumbWidth={120} showIndicators={false} showStatus={false}>
                
                {data.map((d) =>(
                <Box>
                        <img src={ReviewImage} alt="review" className="review-image"/>

                    <Box sx={{mr:'10%'}} className='overlay'>
                        <Typography sx={{color:'primary.main', textAlign:'center'}} variant="h2" className='overlay-title'>{d.name}</Typography> 
                        <br/>
                        <Typography sx={{color:'primary.main', textAlign:'center'}} variant="body1" className='overlay-text'>{d.content}</Typography> 
                    </Box>
                
                </Box>
                ))}   

            </Carousel>
        </Box>
    )
}

export default ReviewsCarousel;