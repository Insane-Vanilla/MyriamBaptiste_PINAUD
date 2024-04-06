import React from 'react';
import Paper from '@mui/material/Paper';
import NaturoCard from '../../Components/Public/NaturoCard';
import { Box, Typography, Container} from '@mui/material';
import illu7 from '../../Style/Images/illu7.png';
import rando from '../../Style/Photos/rando.jpg';
import PaymentMethods from '../../Components/Public/PaymentMethods';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  
  return (
    <Box>
      <Helmet>
        <title>Mes accompagnements</title>
        <meta name="description" content="Bilan naturopathie, bilan vitalité, équilibre global, nutrition
        techniques manuelles, réflexologie plantaire."/>
        <link rel="canonical" href="/services"/>
      </Helmet>

      <Paper sx={{bgcolor:"primary.main", pl:{xs:"5%", md:"15%"}, pr:{xs:"5%", md:"15%"}, pb:{xs:"5%", md:"10%"}}} elevation={0}>
        <Typography sx={{textAlign:"center", color:"secondary.dark"}} variant="h1">Mes accompagnements</Typography>
        <br />
        <Container>
          <NaturoCard/>
        </Container>
        <br />
        <Box sx={{border:1, borderColor:"primary.light", borderRadius:2}}>
            <Typography sx={{textAlign:"justify", color:"primary.dark", mx:"2%", my:"2%"}} variant="h6"> 
            Durant les consultations il n'est fait aucun diagnostic, aucune prescription médicale, les conseils dispensés ne se substituent en aucun cas à un suivi ou un traitement médical.
            Les massages proposés n'ont aucune visée thérapeutique et ne se substituent en aucun cas aux massages dispensés dans un cadre médical.</Typography>
          </Box>
        <br />
        <img className="illu7" src={illu7} alt="illu7"></img>
        <br />
        <PaymentMethods/>
        <br />
        <img className="rando" src={rando} alt="randonnée"></img>
      </Paper>
    </Box>
  )
}

export default Services;


