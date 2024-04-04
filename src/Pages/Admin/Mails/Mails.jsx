import React from "react";
import {Paper, Typography } from "@mui/material";
import MailsTable from "../../../Components/Admin/MailsTable";

function Mails(){
    
    return (
        <Paper sx={{bgcolor:"primary.main", pl:'18%'}} elevation={0}>

            <Typography variant="h1" sx={{color:"secondary.dark"}}>Liste des messages</Typography>
            <br />
            <MailsTable/>
            
        </Paper>
    )
}

export default Mails;