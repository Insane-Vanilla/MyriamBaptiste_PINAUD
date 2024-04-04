import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function ServiceUpdateForm() {
  const {id}= useParams();
  const [values, setValues] = useState({
    category:"",
    title:"",
    subtitle:"",
    description:"",
    price:""
  })

  const navigate= useNavigate();

  useEffect(()=>{
    axios.get('http://localhost/api_myriambaptiste/Controllers/Services/get.php/'+ id)
    .then(res=> setValues(res.data))
    .catch(err => alert(err))
  }, [])  
  
  const handleUpdate=(event)=>{
    event.preventDefault();
    axios.put('http://localhost/api_myriambaptiste/Controllers/Services/update.php/'+ id)
    .then(response=> {
      console.log(response);
      alert('Le service a bien été modifié')
      navigate('/admin/services')
    })
    .catch(err =>alert(err))
  }


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
      onSubmit={handleUpdate}
    >
      <div className='formcontact'>
        <TextField
          id="outlined-helperText"
          label="Catégorie"
          color="secondary"
          name="category"
          defaultValue={values.category}
          onChange={e=> setValues({...values, category: e.target.value })}
        />
        <TextField
          id="outlined-helperText"
          label="Titre"
          color="secondary"
          name="title"
          value={values.title}
          onChange={e=> setValues({...values, title: e.target.value })}
        />
        <TextField
          id="outlined-helperText"
          label="Sous-titre"
          multiline
          rows={3}
          color="secondary"
          name="subtitle"
          value={values.subtitle}
          onChange={e=> setValues({...values, subtitle: e.target.value })}
        />
        <TextField
          id="outlined-helperText"
          label="Description"
          multiline
          rows={10}
          color="secondary"
          name="description"
          value={values.description}
          onChange={e=> setValues({...values, description: e.target.value })}
        />

        <TextField
          id="outlined-helperText"
          label="Prix"
          color="secondary"
          name="price"
          value={values.price}
          onChange={e=> setValues({...values, price: e.target.value })}
        />
        </div>

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

export default ServiceUpdateForm;