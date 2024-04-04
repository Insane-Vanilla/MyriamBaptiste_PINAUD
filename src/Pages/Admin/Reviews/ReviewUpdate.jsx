import React from 'react';
import { Paper, Typography } from '@mui/material';
import ReviewUpdateForm from '../../../Components/Admin/ReviewUpdateForm';
import { useParams } from 'react-router-dom';

function ServiceUpdate() {
  const {id}= useParams();

  return (
    <Paper sx={{bgcolor:"primary.main", pl:'18%'}}>
        <Typography variant="h1" sx={{color:"secondary.dark"}}>
          Modifier un avis
        </Typography>
        <Typography>
          Service ID #{id}
        </Typography>
        <br />
        <ReviewUpdateForm></ReviewUpdateForm> 
    </Paper>
  )
}

export default ServiceUpdate;