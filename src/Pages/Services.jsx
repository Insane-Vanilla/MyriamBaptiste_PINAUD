import React from 'react';
import Paper from '@mui/material/Paper';
import NaturoCard from '../Components/Card';

const Services = () => {
  return (
    <Paper elevation={0} display='grid'>
      <h1>Mes accompagnements</h1>
      <NaturoCard></NaturoCard>
      <NaturoCard></NaturoCard>
      <NaturoCard></NaturoCard>
      <NaturoCard></NaturoCard>
    </Paper>
  )
}

export default Services;


