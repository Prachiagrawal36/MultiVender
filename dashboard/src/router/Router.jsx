
// src/router/Router.jsx
import React from 'react';
import { useRoutes } from 'react-router-dom';

const Router = ({allRoutes}) => {
// The useRoutes hook takes the array and returns a renderable element
    const routes = useRoutes([...allRoutes])
    return routes;
     
};

export default Router;