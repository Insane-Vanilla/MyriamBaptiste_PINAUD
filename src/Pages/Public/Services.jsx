import React from 'react';
import Paper from '@mui/material/Paper';
import NaturoCard from '../../Components/Public/NaturoCard';
import { Box, Typography} from '@mui/material';
import illu7 from '../../Style/Images/illu7.png';
import rando from '../../Style/Photos/rando.jpg';
import PaymentMethods from '../../Components/Public/PaymentMethods';

const Services = () => {
  
  return (
    <Box>
      <Paper sx={{bgcolor:"primary.main", pl:"15%", pr:"15%", pb:"10%"}}>
        <Typography sx={{textAlign:"center", color:"secondary.dark"}} variant="h1">Mes accompagnements</Typography>
        <br />
        <Box sx={{display:'flex', flexDirection:"row"}}>
          <NaturoCard/>
        </Box>
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


