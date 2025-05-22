import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import Loading from '../Pages/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user } = use(AuthContext);
    if (user) {
        return children
    } else {
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }

};

export default PrivateRoute;