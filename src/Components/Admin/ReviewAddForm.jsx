import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ReviewAddForm() {
  const [values, setValues] = useState({
    name:"",
    content:"",
  })

  const navigate= useNavigate();

  const handleSubmit= (event)=>{
    event.preventDefault();
    axios.post('http://localhost/api_myriambaptiste/Controllers/Reviews/add.php', values)
      .then(response=> {
        console.log(response);
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
      onSubmit={handleSubmit}
    >
      <div className='formcontact'>
        <TextField
          id="outlined-helperText"
          label="Prénom"
          color="secondary"
          name="name"
          onChange={e=> setValues({...values, name: e.target.value })}
        />
        <TextField
          id="outlined-helperText"
          label="Contenu"
          multiline
          rows={10}
          color="secondary"
          name="content"
          onChange={e=> setValues({...values, content: e.target.value })}
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

export default ReviewAddForm;