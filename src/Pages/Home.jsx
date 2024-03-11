import React from 'react';
import ReviewsCarousel from '../Components/ReviewsCarousel';
import { Paper,Typography } from '@mui/material';
import illu3 from "../Style/Images/illu3.png";

const Home = () => {
  return (
    <Paper elevation={0}>
      <Paper sx={{bgcolor:"primary.main", pl:"20%", pr:"20%", pb:"10%"}} elevation={0}>
      <Typography sx={{textAlign:"center"}} variant="h1">Bienvenue</Typography>
      
      <Typography sx={{textAlign:"center"}} variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas cum harum nam sed, enim labore, 
        asperiores adipisci eum eius, doloremque nihil deserunt quod ullam temporibus explicabo iusto similique non.
      </Typography>
      <img className="illu3" src={illu3} alt="illu3" width={100} height={100}></img>
      </Paper>
      <Paper elevation={0} sx={{bgcolor:"secondary.main"}}>
        <Typography sx={{textAlign:"center"}} variant="h2">Les avis de mes clients</Typography>
        <ReviewsCarousel/>
      </Paper>
    </Paper>
  )
}

export default Home;
