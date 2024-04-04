import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Link, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';


function ReviewsTable(){
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost/api_myriambaptiste/Controllers/Reviews/get.php")
      .then(res => setData(res.data))
      .catch(err => alert(err))
    },[])

    const handleDelete = (id) => {
    const confirm = window.confirm("Etes-vous sûre de vouloir supprimer cet avis ?")
    if (confirm) {
      axios.delete('http://localhost/api_myriambaptiste/Controllers/Reviews/get.php/'+ id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        }
    }
    

    return (
        <TableContainer component={Paper} sx={{bgcolor:"primary.main", pb:'5%'}} elevation={0}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow >
                <TableCell sx={{color:"primary.dark"}}>ID</TableCell>
                <TableCell sx={{color:"primary.dark"}}align="left">Nom</TableCell>
                <TableCell sx={{color:"primary.dark"}}align="left">Contenu</TableCell>
                <TableCell sx={{color:"primary.dark"}}align="left"></TableCell>
                <TableCell sx={{color:"primary.dark"}}align="left"></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((d) => (
                <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {d.id}
                    </TableCell>
                    <TableCell align="justify" sx={{fontSize:"0.8rem"}}>{d.name}</TableCell>
                    <TableCell align="justify" sx={{fontSize:"0.8rem"}}>{d.content}</TableCell>
                    <TableCell align="justify">
                        <Link to={`./update/${d.id}`}>
                            <Button sx={{bgcolor:"primary.light", '&:hover':{bgcolor:"primary.main", color:"primary.light"}}}>Modifier</Button>
                        </Link>
                    </TableCell>

                    <TableCell align="justify">
                        <Link>
                        <Button onClick={e => handleDelete(d.id)} sx={{bgcolor:"primary.dark", '&:hover':{bgcolor:"primary.main", color:"primary.dark"}}}>Supprimer</Button>
                        </Link>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
    }

export default ReviewsTable;