import { createTheme} from '@mui/material';
import '../App.css';

const MyTheme = createTheme({
  palette: {
    primary: {
      light: '#de9b17',
      main: '#f7f1e5',
      dark: '#cc6200',
      contrastText: '#4c4b16',
    },
    secondary: {
      light: '#c6b672',
      main: '#867c2a',
      dark: '#4c4b16',
      contrastText: '#000',
    }
  },
  typography : {
    fontFamily: [
      "Alata",
      "EB Garamond",
      "Blacker Sans Pro",
      "Blessed Signature",
    ].join(','),
    h1:{
      fontFamily: "Alata",
      fontSize:"2rem" 
    },
    h2: {
      fontFamily:"Alata",
      fontSize:"1.5rem"
    },
    h3:{
      fontFamily:"Alata",
      fontSize:"1.4rem",
    },
    h4:{
      fontFamily:"Alata",
      fontSize:"1.3rem",
    },
    body1: {
      fontFamily: "EB Garamond",
      fontSize:"1.2rem"
    },
    body2: {
      fontFamily: "EB Garamond",
      fontSize:"1.4rem"
    },
    subtitle1: {
      fontFamily:"Blessed Signature",
      fontSize:"2rem"
    },
    subtitle2: {
      fontFamily:"Blessed Signature",
      fontSize:"3rem",
      fontWeight:600,
    },
    button: {
      fontFamily:"Alata"
    }
    },
})

export default MyTheme;