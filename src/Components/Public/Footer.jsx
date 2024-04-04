import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Facebook from '../../Style/Icons/facebook.png';
import Instagram from '../../Style/Icons/instagram.png';
import Linkedin from '../../Style/Icons/linkedin.png';
import Fena from '../../Style/Icons/fena.png';
import Omnes from '../../Style/Icons/omnes.png';
import illu9 from '../../Style/Images/illu9.png';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
        <Paper elevation={0} sx={{bgcolor:"primary.main", color:"secondary.dark", marginTop: 'calc(10% +60px)', position: 'sticky', bottom: 0, width:'100%'}}>
            <img className="illu9" src={illu9} alt="illu9"></img>
            <Box sx={{justifyContent:"center", display: "flex"}}>
                <Typography sx={{color:"primary.dark"}} variant='h6'>Mes certifications</Typography>
            </Box>
            <Box sx={{justifyContent:"center", display: "flex", flexDirection:"row"}}>
                    <img className='fena' src={Fena} alt="fena" />
                    <img className='omnes' src={Omnes} alt="omnes"/>
            </Box>
            <Box sx={{justifyContent:"center", display: "flex", flexDirection:"row"}}>
                <Typography sx={{color:"primary.dark"}} variant='h6'>Me suivre</Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" >
                    <img src={Facebook} alt="facebook" className='rs' />
                    <img src={Instagram} alt="instagram" className='rs' />
                    <img src={Linkedin} alt="facebook" className='rs' />
            </Box>
            <br />
            <Typography display="flex" justifyContent="center" variant='h6'>​N°ADELI : 389504526</Typography>
            <br />
            <Box display="flex" justifyContent="center" alignItems="center" >
            <NavLink to="/login">
              <Button sx={{fontSize:"0.8rem",bgcolor:'primary.light','&:hover': {backgroundColor: 'primary.dark'}}} size="large" variant="contained">Espace personnel</Button>
            </NavLink>
            </Box>
            <br />
            <Box sx={{justifyContent:"center", display: "flex", mb:2}}>
                <Typography variant="caption" color="initial">
                    Copyright @2024 - Marlène PINAUD
                </Typography>
            </Box>
        </Paper>
    )
    
}

export default Footer; 