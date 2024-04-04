import React from 'react';
import {ThemeProvider} from '@mui/material';
import MyTheme from './Style/MyTheme';
import './App.css';
import PublicRouter from "./Pages/Public/PublicRouter";
import AdminRouter from './Pages/Admin/AdminRouter';
import AuthRouter from './Pages/Auth/AuthRouter';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import PrivateRoute from "./Components/Auth/PrivateRoute";


function App() {

  return (
      <div className="App">
        <ThemeProvider theme={MyTheme}>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<PublicRouter/>}/>
              <Route path="/login" element={<AuthRouter/>}/>
              <Route path="/admin/*" element={<AdminRouter/>}>
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
  );
}

export default App;
