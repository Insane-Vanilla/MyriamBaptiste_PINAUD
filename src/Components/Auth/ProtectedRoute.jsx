import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const ProtectedRoute =({ children}) => {
    const {user} = useAuth();
    console.log("Vérifier si l'utitisateur est en privé:", user)
    if (!user) {
        return <Navigate to='/'/>;
    }

    return children;
};

export default ProtectedRoute;