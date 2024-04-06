import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ServicesTable() {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost/api_myriambaptiste/Controllers/Services/get.php")
        .then(res => setData(res.data))
        .catch(err => alert(err))
    },[])
    
    const handleDelete = (id) => {
      const confirm = window.confirm("Etes-vous sûre de vouloir supprimer ce service ?")
      if (confirm) {
        axios.delete('http://localhost/api_myriambaptiste/Controllers/Services/get.php/'+ id)
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
            <TableCell sx={{color:"primary.dark"}}align="left">Catégorie</TableCell>
            <TableCell sx={{color:"primary.dark"}}align="left">Titre</TableCell>
            <TableCell sx={{color:"primary.dark"}}align="left">Sous-Titre</TableCell>
            <TableCell sx={{color:"primary.dark"}}align="left">Description</TableCell>
            <TableCell sx={{color:"primary.dark"}}align="left">Prix</TableCell>
            <TableCell sx={{color:"primary.dark"}}align="left"></TableCell>
            <TableCell sx={{color:"primary.dark"}}align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {data.map((d) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={d.id}
            >
                <TableCell component="th" scope="row">{d.id}</TableCell>
                <TableCell align="justify" sx={{fontSize:"1rem"}}>{d.category}</TableCell>
                <TableCell align="justify" sx={{fontSize:"0.8rem"}} width={100}>{d.title}</TableCell>
                <TableCell align="justify" sx={{fontSize:"0.8rem"}}>{d.subtitle}</TableCell>
                <TableCell align="justify" sx={{fontSize:"0.8rem"}}>{d.description}</TableCell>
                <TableCell align="justify" sx={{fontSize:"0.8rem"}} width={100}>{d.price},00 €</TableCell>
                <TableCell align="justify">
                    <Link to={`./update/${d.id}`}>
                        <Button sx={{bgcolor:"primary.light", '&:hover':{bgcolor:"primary.main", color:"primary.light"}}}>Modifier</Button>
                    </Link>
                </TableCell>

                <TableCell align="justify">
                    <Button onClick={e => handleDelete(d.id)} sx={{bgcolor:"primary.dark", '&:hover':{bgcolor:"primary.main", color:"primary.dark"}}}>Supprimer</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

  
}
export default ServicesTable;



    
