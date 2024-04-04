import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

function FormContact() {
  const [values, setValues] = useState({
    lastname:"",
    firstname:"",
    phone:"",
    email:"",
    message:""
  })

  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost/api_myriambaptiste/Controllers/Mails/add.php', values)
      .then(response=> {
        console.log(response);
        alert ('Merci pour votre message, je vous réponds rapidement ! Belle journée')})
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
          label="Nom"
          color="secondary"
          name="lastname"
          onChange={e=> setValues({...values, lastname: e.target.value })}
        />
        <TextField
          id="outlined-helperText"
          label="Prénom"
          color="secondary"
          name="firstname"
          onChange={e=> setValues({...values, firstname: e.target.value })}
        />
        <TextField
          id="outlined-helperText"
          label="Téléphone"
          color="secondary"
          name="phone"
          onChange={e=> setValues({...values, phone: e.target.value })}
        />
        <TextField
          id="outlined-helperText"
          label="Email"
          color="secondary"
          name="email"
          onChange={e=> setValues({...values, email: e.target.value })}
        />
        <TextField
          id="outlined-helperText"
          label="Message"
          multiline
          rows={10}
          color="secondary"
          name="message"
          onChange={e=> setValues({...values, message: e.target.value })}
        />
        </div>

        <Button 
          sx={{m:'auto',bgcolor:'primary.light','&:hover': {backgroundColor: 'primary.main'}}} 
          size="large" 
          variant="contained" 
          name="submit"
          type="submit"   
          >
          Envoyer
        </Button>
    </Box>
  );
}

export default FormContact;