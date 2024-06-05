import React, { useContext } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route>
      {user ? <Outlet /> : <Navigate to="/login" />}
    </Route>
  );
};

export default PrivateRoute;