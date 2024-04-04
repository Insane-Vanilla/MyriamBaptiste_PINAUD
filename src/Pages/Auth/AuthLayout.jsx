import React from "react";
import { Outlet, Link } from "react-router-dom";
import {ThemeProvider} from '@mui/material';
import Theme from '../../Style/MyTheme';
import logo from '../../Style/Images/logo.png';

function AuthLayout () {
    return (
        <ThemeProvider theme={Theme}>
            <div className="AuthLayout">
                <header className="Auth-header">
                    <Link to="/">
                    <img className="logo" alt="logo" src={logo}></img>
                    </Link>
                </header>
                <body>
                    <Outlet/>
                </body>
            </div>
        </ThemeProvider>
    );
};

export default AuthLayout;