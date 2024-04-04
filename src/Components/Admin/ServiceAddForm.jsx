import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function ServiceAddForm() {
  const [data, setData] = useState({
    category:"",
    title:"",
    subtitle:"",
    description:"",
    price:""
  })

  const navigate= useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post('http://localhost/api_myriambaptiste/Controllers/Services/add.php', data)
    .then(response=> {
      console.log(response);
      navigate('/admin/services')
    })
    .catch(err =>alert(err))
  }

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        display:"flex",
        flexDirection:"column"
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className='formcontact'>
        <TextField
          id="outlined-helperText"
          label="Catégorie"
          color="secondary"
          name="category"
          onChange={e=> setData({...data, category: e.target.value })}
        />
        <TextField
          id="outlined-helperText"
          label="Titre"
          color="secondary"
          name="title"
          onChange={e=> setData({...data, title: e.target.value })}
        />
        <TextField
          id="outlined-helperText"
          label="Sous-titre"
          multiline
          rows={3}
          color="secondary"
          name="subtitle"
          onChange={e=> setData({...data, subtitle: e.target.value })}
        />
        <TextField
          id="outlined-helperText"
          label="Description"
          multiline
          rows={10}
          color="secondary"
          name="description"
          onChange={e=> setData({...data, description: e.target.value })}
        />

        <TextField
          id="outlined-helperText"
          label="Prix"
          color="secondary"
          name="price"
          onChange={e=> setData({...data, price: e.target.value })}
        />
        </div>

        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
        <VisuallyHiddenInput type="file" />
        </Button>
        <br />
        <Button 
          sx={{m:'auto',bgcolor:'primary.light','&:hover': {backgroundColor: 'primary.main'}}} 
          size="large" 
          variant="contained" 
          name="submit"
          type="submit"   
          >
          Ajouter
        </Button>
    </Box>
  );
}

export default ServiceAddForm;