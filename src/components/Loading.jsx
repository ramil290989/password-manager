import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Loading = () => {
  const { t } = useTranslation();

  return (
    <Container className='text-center'>
      <Spinner animation='border' variant='primary mt-5' />
      <span className='fs-2 text-primary'> {t('other.loading')}</span>
      <p className='fs-4'>{t('other.loadingText')}</p>
    </Container>
  );
};

export default Loading;
