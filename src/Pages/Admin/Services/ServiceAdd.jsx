import React from "react";
import { Paper, Typography } from "@mui/material";
import ServiceAddForm from "../../../Components/Admin/ServiceAddForm";

function ServiceAdd(){
  
    return (

        <Paper sx={{bgcolor:"primary.main", pl:'18%'}} elevation={0}>

            <Typography variant="h1" sx={{color:"secondary.dark"}}>Ajouter un service</Typography>
            <br />
            <ServiceAddForm sx={{ml:0}}/>
            
        </Paper>
    )
}

export default ServiceAdd; 