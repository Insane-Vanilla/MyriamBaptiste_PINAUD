import React from 'react';
import { Paper,Typography, Box } from '@mui/material';
import illu3 from "../../Style/Images/illu3.png";
import harmony from "../../Style/Photos/harmony.jpg"
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <Box>
      <Helmet>
        <title>Bienvenue sur mon site Myriam Baptiste Naturopathe</title>
        <meta name="description" content="Naturopathe engagée et passionnée, j'aurai à coeur de vous guider vers une nouvelle vitalité, 
          un équilibre durable, et un bien-être retrouvé."/>
        <link rel="canonical" href="/"/>
      </Helmet>

      <Paper sx={{bgcolor:"primary.main", pl:{xs:"5%", md:"15%"}, pr:{xs:"5%", md:"15%"}, pb:{xs:"5%", md:"10%"}}}  elevation={0}>
        <Box sx={{mx:"10%"}}>
        <Typography sx={{textAlign:"center", color:"secondary.dark"}} variant="h1">Bienvenue</Typography>
        <br />
        <Typography sx={{textAlign:"center", color:"primary.light"}} variant="h2">Je vous souhaite la bienvenue sur mon site internet.</Typography>
        <br />
        <Typography sx={{textAlign:"center", color:"secondary.dark"}} variant="body2" >
          Naturopathe <span class="bold">engagée</span> et <span class="bold">passionnée</span>, j'aurai à coeur de vous guider vers une <span class="colored">nouvelle vitalité</span>, 
          un <span class="colored">équilibre durable</span>, et un <span class="colored">bien-être retrouvé</span>.
          <br /> 
          Vous trouverez sur cet espace toutes les informations utiles : <span class="bold">ma présentation</span>, des informations sur <span class="bold">la naturopathie</span>, et également <span class="bold">les accompagnements</span> que je vous propose.
          <br /> 
          L'onglet <span class="bold">Contact</span> vous permet de prendre attache avec moi, n'hésitez pas à m'écrire ou m'appeler pour toute information complémentaire ou prise de rendez-vous,
          <span class="colored"> je me tiens à votre disposition pour répondre à vos questions et vous rencontrer.</span>
        </Typography>
        </Box>
        <br />
        <img className="illu3" src={illu3} alt="illu3"></img>
        <br />
        <Typography sx={{textAlign:"center", color:"primary.light"}} variant="h2">La nature comme thérapie</Typography>
        <br />
        <Typography sx={{textAlign:"center", color:"secondary.dark"}} variant="body2">
          <span>Inspirez</span>. Goûtez. Marchez. Aimez. Touchez. Mangez. Dansez. Sentez. Buvez. Bougez. Admirez. Etirez. Nagez. <span>Expirez</span>.
        </Typography>
        <br />
        <Typography sx={{textAlign:"center", color:"primary.dark"}} variant="body2">
          <span class="bold">Je vous invite à vous (re)connecter à la nature, à votre nature, et à (re)trouver votre vitalité originelle.</span>
        </Typography>
        <br />
        <Typography sx={{textAlign:"center", color:"secondary.dark"}} variant="subtitle1">Bonne visite sur mon site !</Typography>
        <Typography sx={{textAlign:"center", color:"secondary.dark"}} variant="subtitle2">Myriam</Typography>
        <br />
        <img src={harmony} alt="harmony" className='harmony' />
      </Paper>
    </Box>
  )
}

export default Home;
