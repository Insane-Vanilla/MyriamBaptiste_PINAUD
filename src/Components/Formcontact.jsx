import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function FormContact() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Nom"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Prénom"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Numéro de téléphone"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Adresse mail"
        />
         <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue="Votre message"
        />
        </div>
        <Button size="large" variant="contained">Connexion</Button>
    </Box>
  );
}

export default FormContact;