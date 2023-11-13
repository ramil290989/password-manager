import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { authData } = useContext(AuthContext);
  const location = useLocation();
  console.log(authData);
  
  return (
    authData.token ? children : <Navigate to='login' state={{ from: location }} />
  );
};

export default PrivateRoute;
