import * as React from 'react';
import { useState } from 'react';
import Woman from '../../Style/Photos/woman.jpg';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import Alert from '@mui/material/Alert';

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {logIn} = useAuth();
  const navigate= useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate ("/admin/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

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
            {error && <Alert severity="warning">{error}</Alert>}
            <Box 
              component="form" 
              noValidate sx={{ mt: 1 }}
              onSubmit={handleSignIn}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{bgcolor:"primary.light", color:"primary.main", mt: 3, mb: 2, ml:0,
                '&:hover': {backgroundColor: 'secondary.main' }}}
                >
                Connexion
              </Button>
            </Box>
        </Box>
      </Container>
  );
}

export default LoginCard;