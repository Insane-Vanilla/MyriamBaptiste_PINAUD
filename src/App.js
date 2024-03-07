import React from 'react';
import './App.css';
import logo from './Style/Images/logo.png';
import {Routes, Route} from 'react-router-dom';
import {About, Contact, Home, Services, Naturo} from './Pages';
import DrawerAppBar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img className="logo" alt="logo" src={logo}></img>
          <DrawerAppBar/>
        </header>
        <body>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/naturopathie' element={<Naturo/>}></Route>
        </Routes>
        </body>
        <footer>
          <Footer/>
        </footer>
      </div>
  );
}

export default App;
