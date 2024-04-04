import React from "react";
import { Paper, Typography } from "@mui/material";
import ServicesTable from "../../../Components/Admin/ServicesTable";

function Services(){
  

    return (

        <Paper sx={{bgcolor:"primary.main", pl:'18%'}}>

            <Typography variant="h1" sx={{color:"secondary.dark"}}>Liste des services</Typography>
            <br />
            <ServicesTable></ServicesTable>

            
        </Paper>
    )
}

export default Services;