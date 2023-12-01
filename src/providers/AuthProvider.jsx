import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import AuthContext from '../context/AuthContext.jsx';
import apiRoutes from '../apiRoutes.js';
import { actions as passwordsActions } from '../slices/passwordsSlice.js';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const loginRoute = apiRoutes.login();

  const authEvents = {
    logIn: async (loginData, setError) => {
      try {
        const authData = await axios.post(loginRoute, loginData);
        const { token } = authData.data;
        localStorage.setItem('pasManUsername', loginData.username);
        localStorage.setItem('pasManToken', token);
      } catch (e) {
        setError(e.response.status);
      }
    },
    logOut: () => {
      localStorage.removeItem('pasManUsername');
      localStorage.removeItem('pasManToken');
      dispatch(passwordsActions.resetData());
    },
    authHeader: () => {
      const token = localStorage.getItem('pasManToken');
      return { headers: { Authorization: token }};
    }
  };
  
  return (
    <AuthContext.Provider value={authEvents}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
