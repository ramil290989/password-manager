import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AuthContext from '../context/AuthContext.jsx';
import { getPasswords, selectors } from '../slices/passwordsSlice.js';

const Main = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.passwords.loadingStatus);
  const { authData } = useContext(AuthContext);
  const { token } = authData;
  const passwords = useSelector(selectors.selectAll);

  useEffect(() => {
    if (loadingStatus === 'loading') {
      dispatch(getPasswords(token));
    }
  }, [token, dispatch, loadingStatus]);

  switch (loadingStatus) {
    case 'loading':
      return (
        <Container className='text-center'>
          <Spinner animation='border' variant='primary' className='m-5' />
        </Container>
      );
    case 'idle':
      console.log(passwords);
      return (
        null
      );
    default:
      return null;
  };
};

export default Main;
