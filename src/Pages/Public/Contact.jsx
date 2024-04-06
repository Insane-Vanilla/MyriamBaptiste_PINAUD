import React from 'react';
import FormContact from '../../Components/Public/Formcontact';
import { Box, Paper, Typography } from '@mui/material';
import zen from '../../Style/Photos/zen.jpg';
import illu8 from '../../Style/Images/illu8.png';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <Box>
      <Helmet>
        <title>Contactez-moi</title>
        <meta name="description" content="Téléphone: 0620085320, Adresse de mon cabinet: 12 avenue Marie Reynoard
        38100 GRENOBLE."/>
        <link rel="canonical" href="/contact"/>
      </Helmet>

      <Paper sx={{bgcolor:"primary.main", pl:{xs:"5%", md:"15%"}, pr:{xs:"5%", md:"15%"}, pb:{xs:"5%", md:"10%"}}} elevation={0}>
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
