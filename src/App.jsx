import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from './context/AuthContext.jsx';
import HeaderNav from './components/Navbar.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Login from './pages/LogIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Main from './pages/Main.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

const App = () => {
  const username = localStorage.getItem('pasManUsername');
  const token = localStorage.getItem('pasManToken');
  const [authData, setAuthData] = useState({ username, token });
  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      <HeaderNav />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<PageNotFound />}/>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            } />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
