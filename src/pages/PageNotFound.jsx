import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PageNotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className='h100 my-auto'>
      <p className='fs-1 text-center'>{t('other.404')}</p>
      <p className='fs-2 text-center'>{t('other.pageNotFound')}</p>
      <div className='text-center'>
        <Button onClick={() => navigate('/')}>{t('other.toMainPageButton')}</Button>
      </div>
    </div>
  );
};

export default PageNotFound;
