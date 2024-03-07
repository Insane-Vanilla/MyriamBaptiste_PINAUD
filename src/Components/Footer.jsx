import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Facebook from '../Style/Icons/facebook.png';
import Instagram from '../Style/Icons/instagram.png';
import Linkedin from '../Style/Icons/linkedin.png';
import Fena from '../Style/Icons/fena.png';
import Omnes from '../Style/Icons/omnes.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Paper sx={{marginTop: 'calc(10% +60px)', position: 'sticky', bottom: 0, width:'100%'}} component="footer">
            <Container maxWidth="lg">
                <Box sx={{flexGrow:1, justifyContent:"center", display: "flex", my:1}}>
                    <Typography>
                        Mes certifications
                    </Typography>
                </Box>
                <Box sx={{flexGrow:1, justifyContent:"center", display: "flex", my:1}}>
                    <Link href="https://lafena.fr/">
                        <img src={Fena} alt="fena" width={150} height={150}/>
                    </Link>
                    <Link href="https://www.omnes.fr/">
                        <img src={Omnes} alt="omnes" width={150} height={150}/>
                    </Link>
                </Box>
                <Box sx={{flexGrow:1, justifyContent:"center", display: "flex", my:1}}>
                    <Typography>Me suivre</Typography>
                </Box>
                <Box sx={{flexGrow:1, justifyContent:"center", display: "flex", my:1}}>
                        <Link href="www.facebook.com/myriambaptistenaturo">
                            <img src={Facebook} alt="facebook" width={30} height={30} />
                        </Link>
                        <Link href="www.instagram.com/myriambaptistenaturo">
                            <img src={Instagram} alt="instagram" width={30} height={30} />
                        </Link>
                        <Link href="www.linkedin.com/myriambaptistenaturo">
                            <img src={Linkedin} alt="facebook" width={30} height={30} />
                        </Link>
                </Box>
                <Box sx={{flexGrow:1, justifyContent:"center", display: "flex", mb:2}}>
                    <Typography variant="caption" color="initial">
                        Copyright @2024 - Marlène PINAUD
                    </Typography>
                </Box>
            </Container>
        </Paper>
    )
    
}

export default Footer; 