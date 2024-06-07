import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
// import Navbar from './Navbar';

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <>
        {/* <Navbar /> */}
        <Navigate to="/register" replace />
      </>
    );
  }

  return <Outlet />;
};

export default PrivateRoute;