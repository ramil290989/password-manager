import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthProvider from './providers/AuthProvider.jsx';
import HeaderNav from './components/navbar/Navbar.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Login from './pages/LogIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Main from './pages/Main.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import ToastMessage from './components/Toast.jsx';

const App = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
