import React, { useContext } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import AuthContext from '../context/AuthContext';
import { actions as passwordActions } from '../slices/passwordsSlice';

const LoadingFailed = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.passwords.error);
  const { setAuthData } = useContext(AuthContext);
  if (error.includes('403')) {
    setAuthData({});
    localStorage.removeItem('pasManUsername');
    localStorage.removeItem('pasManToken');
    dispatch(passwordActions.resetData());
  }

  return (
    <Container className='text-center'>
      <Spinner animation='grow' variant='danger mt-5' />
      <span className='fs-2 text-danger'> {t('other.error')}</span>
      <p className='fs-4'>{t('other.errorText')}</p>
    </Container>
  );
};

export default LoadingFailed;
