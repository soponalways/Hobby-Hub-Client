import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import Loading from '../Pages/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = use(AuthContext);
    console.log(loading);
    console.log(user)
    if (loading) {
        return <Loading></Loading>
    }; 

    if (user) {
        return children
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoute;