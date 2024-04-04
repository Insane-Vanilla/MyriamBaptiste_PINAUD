import React from "react";
import {Routes, Route} from "react-router-dom";
import {AuthLayout, Login} from './';

function AuthRouter() {
    return (
        <Routes>
          <Route element={<AuthLayout/>}>
            <Route path='/' element={<Login/>}/>
          </Route>
        </Routes>
    )
}

export default AuthRouter;