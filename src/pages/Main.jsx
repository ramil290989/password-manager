import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthContext from '../context/AuthContext.jsx';
import { getPasswords } from '../slices/passwordsSlice.js';
import Loading from '../components/Loading.jsx';
import LoadingFailed from '../components/LoadingFailed.jsx';
import Passwords from '../components/passwords/Passwords.jsx';

const Main = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.passwords.loadingStatus);
  const { authData } = useContext(AuthContext);
  const { token } = authData;

  useEffect(() => {
    if (loadingStatus === 'loading') {
      dispatch(getPasswords(token));
    }
  }, [token, dispatch, loadingStatus]);

  switch (loadingStatus) {
    case 'loading':
      return (
        <Loading />
      );
    case 'idle':
      return (
        <Passwords />
      );
    case 'failed':
      return (
        <LoadingFailed />
      );
    default:
      return null;
  };
};

export default Main;
