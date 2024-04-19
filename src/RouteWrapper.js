import React from 'react';
import { Route, useLocation, Navigate } from 'react-router-dom';

const RouteWrapper = ({ element: Component, path, ...rest }) => {
    const location = useLocation();

    // Check if the pathname ends with a slash and if it's more than just the root '/'
    if (location.pathname !== '/' && location.pathname.endsWith('/')) {
        const newPath = location.pathname.slice(0, -1);
        // Redirect to the path without the trailing slash
        return <Navigate to={newPath} replace />;
    }

    // Render the component for the given path
    return <Route path={path} element={<Component />} {...rest} />;
};

export default RouteWrapper;
