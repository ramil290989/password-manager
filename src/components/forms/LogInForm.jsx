import React from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';

const LogInForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={ async () => {
        alert('submit')
      }}
    >
      {(formProps) => (
        <Form onSubmit={formProps.handleSubmit}>
          Login
          <Form.FloatingLabel className='mb-3' controlId='username' label='input username'>
            <Form.Control
              id='username'
              name='username'
              type='text'
              placeholder='please input username'
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              required
            />
          </Form.FloatingLabel>
          <Form.FloatingLabel className='mb-3' controlId='password' label='input password'>
            <Form.Control
              id='password'
              name='password'
              type='password'
              placeholder='please input password'
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              required
            />
          </Form.FloatingLabel>
          <Button type='submit' className='w-100 mb-3'>Auth</Button>
        </Form>
      )}
    </Formik>
  )
};

export default LogInForm;
