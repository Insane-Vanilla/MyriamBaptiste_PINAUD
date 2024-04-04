import React from 'react';
import FormContact from '../../Components/Public/Formcontact';
import { Box, Paper, Typography } from '@mui/material';
import zen from '../../Style/Photos/zen.jpg';
import illu8 from '../../Style/Images/illu8.png';

const Contact = () => {
  return (
    <Box>
      <Paper sx={{bgcolor:"primary.main", pl:"20%", pr:"20%", pb:"10%"}}>
        <Typography sx={{textAlign:"center", color:"secondary.dark"}}variant="h1">Me contacter</Typography>
        <br />
        <Typography sx={{textAlign:"center", color:"secondary.dark"}}variant="body1">Pour toute information, ou prise de rendez-vous, n'hésitez pas à me contacter !</Typography>
        <Typography sx={{textAlign:"center", fontWeight:"bold", color:"primary.dark"}} variant="body1">Je vous réponds et vous accueille avec plaisir.</Typography>
        <br />
        <Typography sx={{textAlign:"center", color:"primary.light"}} variant="h3">M'appeler</Typography>
        <Typography sx={{textAlign:"center", fontWeight:'bold', color:"secondary.dark"}}variant="body1">06 20 08 53 20</Typography>
        <br />
        <Typography sx={{textAlign:"center", color:"primary.light"}} variant="h3">M'écrire</Typography>
        <FormContact sx={{textAlign:"center"}}></FormContact>
        <br />
        <img className="illu8" src={illu8} alt="illu8"></img>
        <br />
        <Typography sx={{textAlign:"center", color:"primary.light"}} variant="h3">Venir au cabinet</Typography>
        <br />
        <Typography sx={{textAlign:"center", fontWeight:'bold', color:"secondary.dark"}} variant="body1">12 avenue Marie Reynoard</Typography>
        <Typography sx={{textAlign:"center", fontWeight:'bold', color:"secondary.dark"}} variant="body1">38100 GRENOBLE</Typography>
        <br />
        <img className="zen" src={zen} alt="zen" />
        <br />
        <Typography sx={{textAlign:"center", color:"secondary.dark"}} variant="subtitle1">A très vite</Typography>
        <Typography sx={{textAlign:"center", color:"secondary.dark"}} variant="subtitle2">Myriam</Typography>
      </Paper>
    </Box>
  )
}

export default Contact;
