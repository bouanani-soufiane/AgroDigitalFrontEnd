import React from 'react'
import { Navigate } from 'react-router-dom'



const ProtectedRoute = ({ component: Component, roles }) => {
  const userConnected = JSON.parse(localStorage.getItem('user'));

  if (userConnected && roles.includes(userConnected.role)) {
    // console.log(roles.includes(userConnected.role));
    return <Component />;

  }
  return <Navigate to="/login" />;
};



export default ProtectedRoute