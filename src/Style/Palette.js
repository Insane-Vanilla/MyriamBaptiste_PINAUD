import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#f7f1e5',
      main: '#de9b17',
      dark: '#cc6200',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c6b672',
      main: '#867c2a',
      dark: '#4c4b16',
      contrastText: '#000',
    },
  },
});

export default theme; 
