import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import app from "../../Firebase";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Dashboard() {

    const navigate = useNavigate()

    const handleSignOut = () => {
    signOut(app)
        .then(value=> {
            console.log(value)
            navigate('/login')})
        .catch(error => alert(error));
    }

    return (
        <Paper sx={{bgcolor:"primary.main", pl:'18%', pb:'auto'}} elevation={0}>
            <Typography>
                Bienvenue <Typography variant="subtitle2">Myriam</Typography>sur votre espace administrateur
            </Typography>

            <Button sx={{color:"primary.light"}} onClick={handleSignOut} >Déconnexion</Button>
        </Paper>
    )
}

export default Dashboard;