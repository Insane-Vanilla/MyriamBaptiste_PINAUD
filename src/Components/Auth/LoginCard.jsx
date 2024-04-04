import * as React from 'react';
import { useContext } from 'react';
import Woman from '../../Style/Photos/woman.jpg';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Avatar } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import app from "../../Firebase";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

function LoginCard() {

  const navigate= useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(app, email, password)
      .then((data) => {
        console.log(data);
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  const { currentUser} = useContext(AuthContext);
  if(currentUser) {
    return navigate("/");
  }

  return (
      <Container sx={{bgcolor:"primary.main"}} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar className='woman' src={Woman} alt="myriambaptiste"></Avatar>
          <Typography component="h1" variant="h5">
            Espace personnel
          </Typography>

            <Box 
              component="form" 
              noValidate sx={{ mt: 1 }}
              onSubmit={(e)=> handleSignIn(e)}
              >

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adresse email"
                name="email"
                autoComplete="email"
                autoFocus
                color="secondary"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                color="secondary"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{bgcolor:"primary.light", color:"primary.main", mt: 3, mb: 2, ml:0, '&:hover': {backgroundColor: 'secondary.main' }}}
                //onClick={handleSignIn}
                >
                Connexion
              </Button>
            </Box>
        </Box>
      </Container>
  );
}

export default LoginCard;