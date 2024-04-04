import React from "react";
import LoginCard from "../../Components/Auth/LoginCard.jsx";
import { Paper } from "@mui/material";

function Login(){
    return (
        <Paper sx={{bgcolor:"primary.main", pl:"20%", pr:"20%", pb:"10%"}}>
            <LoginCard ></LoginCard>
        </Paper>
    )
}

export default Login;