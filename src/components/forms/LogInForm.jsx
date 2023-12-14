import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import apiRoutes from '../../apiRoutes.js';
import AuthContext from '../../context/AuthContext.jsx';

const LogInForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState('');
  const { setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={ async ({ username, password }) => {
        setIsDisabled(true);
        setError('');
        const loginRoute = apiRoutes.login();
        const loginData = { username, password };
        try {
          const authData = await axios.post(loginRoute, loginData);
          const { token } = authData.data;
          localStorage.setItem('pasManUsername', username);
          localStorage.setItem('pasManToken', token);
          setAuthData({ username, token });
          navigate('/');
        } catch (e) {
          setError(e.response.status);
        } finally {
          setIsDisabled(false);
        }

      }}
    >
      {(formProps) => (
        <Form onSubmit={formProps.handleSubmit}>
          <h1 className='mb-4'>{t('forms.headers.login')}</h1>
          <Form.FloatingLabel className='mb-3' label={t('forms.inputs.username')}>
            <Form.Control
              id='username'
              name='username'
              type='text'
              className={error ? 'is-invalid' : null}
              placeholder={t('forms.inputs.username')}
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              disabled={isDisabled}
              required
            />
          </Form.FloatingLabel>
          <Form.FloatingLabel className='mb-5' label={t('forms.inputs.password')}>
            <Form.Control
              id='password'
              name='password'
              type='password'
              className={error ? 'is-invalid' : null}
              placeholder={t('forms.inputs.password')}
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              disabled={isDisabled}
              required
            />
            {error ? (
              <div className='invalid-tooltip'>{t(`errors.${error}`)}</div>
              ) : null}          
          </Form.FloatingLabel>
          <Button type='submit' className='w-100 mb-3' disabled={isDisabled}>{t('forms.buttons.login')}</Button>
        </Form>
      )}
    </Formik>
  )
};

export default LogInForm;