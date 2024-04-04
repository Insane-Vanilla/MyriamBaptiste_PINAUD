import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function ReviewUpdateForm() {
  const {id}= useParams();
  const [values, setValues] = useState({
    name:"",
    content:""
  })

  const navigate= useNavigate();

  useEffect(()=>{
    axios.get('http://localhost/api_myriambaptiste/Controllers/Review/get.php/'+ id)
    .then(res=> setValues(res.data))
    .catch(err => alert(err))
  }, [])  
  
  const handleUpdate=(event)=>{
    event.preventDefault();
    axios.put('http://localhost/api_myriambaptiste/Controllers/Review/update.php/'+ id)
    .then(response=> {
      console.log(response);
      alert('L\'avis a bien été modifié')
      navigate('/admin/reviews')
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
          label="Prénom"
          color="secondary"
          name="name"
          defaultValue={values.name}
          onChange={e=> setValues({...values, name: e.target.value })}
        />
        <TextField
          id="outlined-helperText"
          label="Contenu"
          multiline
          rows={10}
          color="secondary"
          name="content"
          value={values.content}
          onChange={e=> setValues({...values, content: e.target.value })}
        />
        <Button 
          sx={{m:'auto',bgcolor:'primary.light','&:hover': {backgroundColor: 'primary.main'}}} 
          size="large" 
          variant="contained" 
          name="submit"
          type="submit"   
          >
          Ajouter
        </Button>
    </div>
    </Box>
  );
}

export default ReviewUpdateForm;