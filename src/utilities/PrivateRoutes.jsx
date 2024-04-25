import React from 'react'
import { Navigate } from 'react-router-dom'



const ProtectedRoute = ({ Component, roles }) => {
  const userConnected = JSON.parse(localStorage.getItem('user'));

  if (userConnected && userConnected.role === roles) {

    return <Component />;

  }
  return <Navigate to="/login" />;
};

export default ProtectedRoute