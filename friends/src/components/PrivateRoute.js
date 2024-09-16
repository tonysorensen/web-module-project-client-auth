import React from 'react';
import { Redirect, Route } from 'react-router-dom';

/**
 * 1. mimic the Route component (same api / the same interface)
 * 2. check to see if we have an auth token
 * 3. if we have an auth token, render a Route component with the proper props
 * 4. if we don't have an auth token, redirect to /login
 */

const ProtectedRoute = ({ component: Component, ...theRest }) => {
  // const Component = component;
  return <Route {...theRest} render={() => {
    if (localStorage.getItem("token") === null) {
      // redirect to /login
      return <Redirect to="/login" />
    }
    return <Component />
  }} />
}

export default ProtectedRoute;