import React from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';


function Dashboard() {
    const {logOut, user} = useAuth();
    const navigate = useNavigate()

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate('/login');
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <Paper sx={{bgcolor:"primary.main", pl:{xs:'10%', sm:"30%", md:'30%'}}} elevation={0}>
            <Box elevation={0}>
                <Typography>
                    Bienvenue <Typography variant="subtitle2">Myriam</Typography>sur votre espace administrateur
                </Typography>
                <Typography> Connectée avec l'adresse mail : {user && user.email}</Typography>
            </Box>
            <Box height={250}></Box>
            <Box>
                <Button sx={{color:"primary.main", bgcolor:"secondary.light"}} onClick={handleLogOut} >Déconnexion</Button>
            </Box>
            <Box height={160}></Box>
        
        </Paper>
    )
}

export default Dashboard;