import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import apiRoutes from '../../apiRoutes.js';
import AuthContext from '../../context/AuthContext.jsx';
import { validationSchemaSignUp } from '../../validationSchemas.js';

const SignUpForm = () => {
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
        confirmPassword: '',
      }}
      onSubmit={ async ({ username, password }) => {
        setIsDisabled(true);
        setError('');
        const loginRoute = apiRoutes.signup();
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
      validationSchema={validationSchemaSignUp(t)}
    >
      {(formProps) => (
        <Form onSubmit={formProps.handleSubmit}>
          <h1 className='mb-4'>{t('forms.signUp')}</h1>
          <Form.FloatingLabel className='mb-4' label={t('forms.usernameInput')}>
            <Form.Control
              id='username'
              name='username'
              type='text'
              className={formProps.errors.username && formProps.touched.username || error ? 'is-invalid' : null}
              placeholder={t('forms.usernameInput')}
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              disabled={isDisabled}
              required
            />            
            {formProps.errors.username && formProps.touched.username ? (
              <div className='invalid-tooltip'>{formProps.errors.username}</div>
              ) : null}
          </Form.FloatingLabel>
          <Form.FloatingLabel className='mb-4' label={t('forms.passwordInput')}>
            <Form.Control
              id='password'
              name='password'
              type='password'
              className={formProps.errors.password && formProps.touched.password || error ? 'is-invalid' : null}
              placeholder={t('forms.passwordInput')}
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              disabled={isDisabled}
              required
            />
            {formProps.errors.password && formProps.touched.password ? (
              <div className='invalid-tooltip'>{formProps.errors.password}</div>
              ) : null}
          </Form.FloatingLabel>
          <Form.FloatingLabel className='mb-4' label={t('forms.passwordConfirmInput')}>
            <Form.Control
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              className={formProps.errors.confirmPassword && formProps.touched.confirmPassword || error ? 'is-invalid' : null}
              placeholder={t('forms.passwordConfirmInput')}
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              disabled={isDisabled}
              required
            />
            {formProps.errors.confirmPassword && formProps.touched.confirmPassword || error ? (
              <div className='invalid-tooltip'>{formProps.errors.confirmPassword ?? t(`errors.${error}`)}</div>
              ) : null}          
          </Form.FloatingLabel>
          <Button type='submit' className='w-100 mb-3' disabled={isDisabled}>{t('forms.signUpBtn')}</Button>
        </Form>
      )}
    </Formik>
  )
};

export default SignUpForm;
