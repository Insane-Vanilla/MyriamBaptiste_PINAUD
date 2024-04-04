import React from 'react';
import { Paper, Typography } from '@mui/material';
import ServiceUpdateForm from '../../../Components/Admin/ServiceUpdateForm';
import { useParams } from 'react-router-dom';

function ServiceUpdate() {
  const {id}= useParams();

  return (
    <Paper sx={{bgcolor:"primary.main", pl:'18%'}}>
        <Typography variant="h1" sx={{color:"secondary.dark"}}>
          Modifier un service
        </Typography>
        <Typography>
          Service ID #{id}
        </Typography>
        <br />
        <ServiceUpdateForm></ServiceUpdateForm> 
    </Paper>
  )
}

export default ServiceUpdate;