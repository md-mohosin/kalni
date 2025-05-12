import React from 'react';
import UseAuth from '../hooks/UseAuth';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user,loading } = UseAuth()
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>

};

export default PrivetRoute;