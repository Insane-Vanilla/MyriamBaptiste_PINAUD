import React from 'react';
import He from '../../Style/Photos/he.jpg';
import Healthy from '../../Style/Photos/healthy.jpg';
import { Typography, Box, Paper } from '@mui/material';
import illu6 from "../../Style/Images/illu6.png";
import { Helmet } from 'react-helmet-async';

const Naturo = () => {
  return (
    <Box>

      <Helmet>
        <title>La naturopathie, ou comment prendre soin de vous autrement</title>
        <meta name="description" content="La naturopathie comme médecine douce comprend 5 fondements 
        et il existe 10 techniques naturopathiques organisées après le bilan de vitalité."/>
        <link rel="canonical" href="/naturopathie"/>
      </Helmet>

      <Paper sx={{bgcolor:"primary.main", pl:{xs:"5%", md:"15%"}, pr:{xs:"5%", md:"15%"}, pb:{xs:"5%", md:"10%"}}} elevation={0}>
        <Typography sx={{textAlign:"center", color:"secondary.dark"}} variant="h1">
            La naturopathie, ou comment prendre soin de vous autrement
        </Typography>
        <br />
        <Typography sx={{textAlign:"justify", color:"secondary.dark"}} variant="body1">
            Educative et préventive, la naturopathie est reconnue comme médecine 
            non traditionnelle par l'Organisation Mondiale de la Santé aux côtés des médecines chinoises et ayurvédiques.</Typography>
          <br />
        <img src={He} alt="he" className='he'/>
          <br />
          <br />
        <Typography sx={{textAlign:"center", color:"primary.light"}} variant="h2">
          Les 5 fondements de la naturopathie
        </Typography>
        <Typography sx={{textAlign:"justify", color:"secondary.dark", mr:"5%"}} variant="body1"> 
          <ul class="list">
            <li><span class="bold">Le causalisme</span> : rechercher la cause première des troubles, dont les symptômes ne sont que la conséquence.</li>
            <li><span class="bold">Le vitalisme</span> : s'appuyer sur la force de vie qui anime le vivant et confère à l'être humain sa capacité à retrouver le chemin de l'équilibre.</li>
            <li><span class="bold">Le humorisme</span> : rechercher l'équilibre homéostatique et la qualité des humeurs (sang, lymphe ...).</li>
            <li><span class="bold">L'hygiénisme</span> : intégrer des habitudes bénéfiques à la santé (alimentation saine, exercices physiques, sommeil qualitatif, bonne gestion du stress, contacts réguliers avec l'environnement naturel)</li>
            <li><span class="bold">L'holisme</span> : prendre en compte l'être humain dans sa globalité et dans toutes ses dimensions.</li>
          </ul>
        </Typography>
          <br />
        <img className="illu6" src={illu6} alt="illu6"></img>
          <br />
        <Typography sx={{textAlign:"justify", color:"secondary.dark"}} variant="body1"> 
          Par son approche holistique individualisée, la naturopathie appréhende l'être humain dans son unité, et ses interactions avec son environnement. Ainsi, le naturopathe adapte et individualise 
          son accompagnement et ses conseils à partir du bilan de vitalité et de terrain qu'il a établi.
        </Typography>
          <br />
          <br />
        <Typography sx={{textAlign:"center", color:"primary.light"}} variant="h2">
          Les 10 techniques naturopathiques organisées après le bilan de vitalité
        </Typography>
        <Typography sx={{textAlign:"justify", color:"secondary.dark", mr:"5%"}} variant="body1"> 
          <ul class="list">
            <li><span class="bold"> 1 - L'alimentation</span> : nutrition, cures saisionnières...</li>
            <li><span class="bold"> 2 - Les exercices physiques</span> : gymnastique douce, yoga, danse, arts martiaux, natation...</li>
            <li><span class="bold"> 3 - La psychologie</span> : relaxation, gestion du stress, hygiène relationnelle...</li>
            <li><span class="bold"> 4 - L'hydrologie</span> : utilisation de l'eau chaude, tiède, froide avec application locale, interne, externe ...</li>
            <li><span class="bold"> 5 - Les techniques manuelles</span> : massage californien, coréen ...</li>
            <li><span class="bold"> 6 - Les techniques réflexes</span> ou réflexologie.</li>
            <li><span class="bold"> 7 - Les techniques respiratoires</span> : empruntées au yoga, méthodes de Plent et de Jacquier ...</li>
            <li><span class="bold"> 8 - La phytologie</span> : les plantes revitalisantes, drainantes, adaptogènes, les huiles essentielles...</li>
            <li><span class="bold"> 9 - Les techniques énergétiques</span></li>
            <li><span class="bold">10 - Les techniques vibratoires</span> : utilisation des couleurs, des sons ...</li>
          </ul>
          </Typography><br />
          <img src={Healthy} alt="healty" className='healthy'/>
          <br />
          <br />
          <Box sx={{border:1, borderColor:"primary.light", borderRadius:2}}>
            <Typography sx={{textAlign:"justify", color:"primary.dark", mx:"5%", my:"5%"}} variant="h4"> 
              Une alimentation saine et équilibrée, une activité physique adaptée, une bonne gestion du stress et des émotions, la qualité et de l'environnement
              sont des bases essentielles de la santé. Par mes conseils individualisés en hygiène de vie et par mon accompagnement, je vous invite à trouver votre équilibre
              et à respecter votre vitalité.
          </Typography>
          </Box>
      </Paper>
    </Box>
  )
}

export default Naturo;
