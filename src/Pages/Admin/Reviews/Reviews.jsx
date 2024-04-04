import React from "react";
import { Paper, Typography } from "@mui/material";
import ReviewsTable from "../../../Components/Admin/ReviewsTable";

function Reviews(){
  
    return (

        <Paper sx={{bgcolor:"primary.main", pl:'18%'}} elevation={0}>

            <Typography variant="h1" sx={{color:"secondary.dark"}}>Liste des avis</Typography>
            <br />
            <ReviewsTable/>
            
        </Paper>
    )
}

export default Reviews;