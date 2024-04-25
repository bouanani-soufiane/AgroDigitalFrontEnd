import React from 'react'
import { Navigate } from 'react-router-dom'



const ProtectedRoute = ({ component: Component, role }) => {
  const userConnected = JSON.parse(localStorage.getItem('user'));

  if (userConnected && userConnected.role === role) {
    return <Component />;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoute