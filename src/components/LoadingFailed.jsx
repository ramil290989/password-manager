import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LoadingFailed = () => {
  const { t } = useTranslation();

  return (
    <Container className='text-center'>
      <Spinner animation='grow' variant='danger mt-5' />
      <span className='fs-2 text-danger'> {t('other.error')}</span>
      <p className='fs-4'>{t('other.errorText')}</p>
    </Container>
  );
};

export default LoadingFailed;
