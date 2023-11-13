import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import apiRoutes from '../../apiRoutes.js';
import AuthContext from '../../context/AuthContext.jsx';

const LogInForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={ async ({ username, password }) => {
        setIsDisabled(true);
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
          alert(e);
        } finally {
          setIsDisabled(false);
        }

      }}
    >
      {(formProps) => (
        <Form onSubmit={formProps.handleSubmit}>
          <h1 className='mb-3'>Authorization</h1>
          <Form.FloatingLabel className='mb-3' label='input username'>
            <Form.Control
              id='username'
              name='username'
              type='text'
              placeholder='please input username'
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              disabled={isDisabled}
              required
            />
          </Form.FloatingLabel>
          <Form.FloatingLabel className='mb-3' label='input password'>
            <Form.Control
              id='password'
              name='password'
              type='password'
              placeholder='please input password'
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              disabled={isDisabled}
              required
            />
          </Form.FloatingLabel>
          <Button type='submit' className='w-100 mb-3' disabled={isDisabled}>Auth</Button>
        </Form>
      )}
    </Formik>
  )
};

export default LogInForm;
