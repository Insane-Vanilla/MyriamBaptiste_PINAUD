import React from "react";
import { Paper, Typography } from "@mui/material";
import ReviewAddForm from "../../../Components/Admin/ReviewAddForm";

function ReviewAdd(){
  
    return (

        <Paper sx={{bgcolor:"primary.main", pl:'18%'}} elevation={0}>

            <Typography variant="h1" sx={{color:"secondary.dark"}}>Ajouter un avis</Typography>
            <br />
            <ReviewAddForm sx={{ml:0}}/>
            
        </Paper>
    )
}

export default ReviewAdd;