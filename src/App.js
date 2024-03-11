import React from 'react';
import './App.css';
import logo from './Style/Images/logo.png';
import Theme from './Style/Palette'
import {ThemeProvider} from '@mui/material';
import {Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {About, Contact, Home, Services, Naturo, Login} from './Pages';
import Admin from './Admin/Pages/Admin';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <header className="App-header">
          <Link href="/">
            <img className="logo" alt="logo" src={logo}></img>
          </Link>
          <NavBar/>
        </header>
        <body>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/naturopathie' element={<Naturo/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
        </Routes>
        </body>
        <footer>
          <Footer/>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
