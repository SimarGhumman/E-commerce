// ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    const location = useLocation();
    
    if (!user) {
        // Redirect to login if there is no user
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Component {...rest} />;
};

export default ProtectedRoute;