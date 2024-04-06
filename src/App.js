import React from 'react';
import {ThemeProvider} from '@mui/material';
import MyTheme from './Style/MyTheme';
import './App.css';
import PublicRouter from "./Pages/Public/PublicRouter";
import AdminRouter from './Pages/Admin/AdminRouter';
import AuthRouter from './Pages/Auth/AuthRouter';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import { AuthContextProvider } from './Context/AuthContext';


function App() {

  return (
      <div className="App">
        <ThemeProvider theme={MyTheme}>
          <BrowserRouter>
            <AuthContextProvider>
              <Routes>
                <Route path="/*" element={<PublicRouter/>}/>
                <Route path="/login/*" element={<AuthRouter/>}/>
                <Route path="/admin/*" element={
                  <ProtectedRoute>
                    <AdminRouter/>
                  </ProtectedRoute>}>
                </Route>
              </Routes>
              </AuthContextProvider>
          </BrowserRouter>
        </ThemeProvider>
      </div>
  );
}

export default App;
