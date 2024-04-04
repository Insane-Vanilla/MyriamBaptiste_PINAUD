import React from "react";
import {Routes, Route} from "react-router-dom";
import {PublicLayout, About, Contact, Home, Services, Naturo} from './';


function PublicRouter() {
    return (
        <Routes>
          <Route element={<PublicLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='services' element={<Services/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='naturopathie' element={<Naturo/>}/>
          </Route>
        </Routes>
    )
}

export default PublicRouter;