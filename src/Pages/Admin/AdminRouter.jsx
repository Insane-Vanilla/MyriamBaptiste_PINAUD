import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminLayout, Dashboard} from "./";
import { Mails} from './Mails';
import { Reviews, ReviewAdd, ReviewUpdate} from './Reviews';
import { Services, ServiceAdd, ServiceUpdate} from './Services';

function AdminRouter() {
    return (
        <Routes>
            <Route element={<AdminLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="mails" element={<Mails/>}/>
                <Route path="reviews" element={<Reviews/>}/>
                <Route path="reviews/add/" element={<ReviewAdd/>}/>
                <Route path="reviews/update/:id" element={<ReviewUpdate/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="services/add/" element={<ServiceAdd/>}/>
                <Route path="services/update/:id" element={<ServiceUpdate/>}/>
            </Route>
        </Routes>
    )
}

export default AdminRouter;