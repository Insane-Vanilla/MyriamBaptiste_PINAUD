import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Link, Button } from "@mui/material";
import { useEffect, useState } from "react";
import MailsCheckBoxYes from "./MailsCheckBoxYes";
import MailsCheckBoxNo from "./MailsCheckBoxNo";


function MailsTable(){
    const [mails, setMails] = useState([]);

    useEffect(() => {
      fetch("http://localhost/api_myriambaptiste/Controllers/Mails/get.php")
        .then(res => res.json())
        .then((result) => {setMails(result)})
        .catch(error => alert(error))
    },[])

    //const deleteService = (serviceId) =>{
    //    service.deleteService(serviceId)
    //    .then (result=> {setServices((current) => current.filter(service => service.id !== serviceId))})
    //}

    return (
        <TableContainer component={Paper} sx={{bgcolor:"primary.main", pb:'5%'}} elevation={0}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow >
                <TableCell sx={{color:"primary.dark"}}>ID</TableCell>
                <TableCell sx={{color:"primary.dark"}}align="left">Nom</TableCell>
                <TableCell sx={{color:"primary.dark"}}align="left">Prénom</TableCell>
                <TableCell sx={{color:"primary.dark"}}align="left">Téléphone</TableCell>
                <TableCell sx={{color:"primary.dark"}}align="left">Email</TableCell>
                <TableCell sx={{color:"primary.dark"}}align="left">Message</TableCell>
                <TableCell sx={{color:"primary.dark"}}align="left">Traité</TableCell>
                <TableCell sx={{color:"primary.dark"}}align="left"></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>

            {mails.map((mail) => (
                <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {mail.id}
                    </TableCell>
                    <TableCell align="justify" sx={{fontSize:"0.8rem"}} width={100}>{mail.lastname}</TableCell>
                    <TableCell align="justify" sx={{fontSize:"0.8rem"}} width={100}>{mail.firstname}</TableCell>
                    <TableCell align="justify" sx={{fontSize:"0.8rem"}} width={100}>{mail.phone}</TableCell>
                    <TableCell align="justify" sx={{fontSize:"0.8rem"}} width={100}>{mail.email}</TableCell>
                    <TableCell align="justify" sx={{fontSize:"0.8rem"}} width={400}>{mail.message}</TableCell>

                    <TableCell align="justify" sx={{fontSize:"0.8rem"}}>
                        <MailsCheckBoxNo/>Non
                        <br />
                        <MailsCheckBoxYes/>Oui
                    </TableCell>

                    <TableCell align="justify">
                        <Link>
                        <Button sx={{bgcolor:"primary.dark", '&:hover':{bgcolor:"primary.main", color:"primary.dark"}}}>Supprimer</Button>
                        </Link>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
    }

export default MailsTable;