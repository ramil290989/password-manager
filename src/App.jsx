import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AuthContext from './context/AuthContext.jsx';
import ToastContext from './context/ToastContext.jsx';
import HeaderNav from './components/navbar/Navbar.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Login from './pages/LogIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Main from './pages/Main.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import ToastMessage from './components/Toast.jsx';

const App = () => {
  const username = localStorage.getItem('pasManUsername');
  const token = localStorage.getItem('pasManToken');
  const [authData, setAuthData] = useState({ username, token });
  const [toastShow, setToastShow] = useState(false);
  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      <ToastContext.Provider value={{ toastShow, setToastShow}}>
        <ToastMessage />
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
      </ToastContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
