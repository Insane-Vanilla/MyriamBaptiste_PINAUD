import React from 'react';
import Woman from '../../Style/Photos/woman.jpg';
import Paper from '@mui/material/Paper';
import {Avatar, Typography } from '@mui/material';
import Accordions from "../../Components/Public/Accordion";
import Box from '@mui/material/Box';
import illu5 from "../../Style/Images/illu5.png";

const About = () => {
  return (
    <Box>
      <Paper sx={{bgcolor:"primary.main", pl:"15%", pr:"15%", pb:"10%"}} elevation={0}>
        <Typography sx={{textAlign:"center", color:"secondary.dark"}} variant="h1">Qui suis-je ?</Typography>
        <br />
        <Avatar className='woman' src={Woman} alt="myriambaptiste" sx={{width:300, height:300}} />
        <br />
        <Typography sx={{textAlign:"justify", color:"secondary.dark"}} variant="body1">
          Passionnée par la nature, la santé et la nutrition, je suis diplômée de Naturopathie depuis 2023. 
          Je me définis comme une <span class="bold">accompagnante de votre santé</span> : je vous guide, et vous invite
          à mettre du sens, de la conscience dans votre quotidien. 
          J'ai à coeur de vous apporter plus de <span class="bold">sérénité</span> dans vos mouvements, votre 
          assiette, et ce grâce à des <span class="bold">méthodes naturelles</span> . Nos rencontres auront pour but de vous donner tous les outils nécessaires pour devenir
          acteur.rice de votre bien-être de façon durable et autonome. 
          Complémentaires et essentielles, les <span class="bold">techniques manuelles</span> permettent à votre
          corps de faire circuler les énergies, et à votre esprit de s'apaiser.
          </Typography>
          <br />
           <Typography sx={{textAlign:"center", color:"secondary.dark"}} variant="subtitle1">Dans l'attente de prendre soin de votre santé</Typography>
           <Typography sx={{textAlign:"center", color:"secondary.dark"}} variant="subtitle2">Myriam</Typography>
           <br />
           <img className="illu5" src={illu5} alt="illu5"></img>
           <br />
           <Typography sx={{textAlign:"center", color:"primary.light"}} variant="h5">Pour en savoir plus</Typography>
           <Paper sx={{mt:'5%'}}>
              <Accordions/>
            </Paper>
            <br />
      </Paper>
    </Box>
  )
}

export default About;
