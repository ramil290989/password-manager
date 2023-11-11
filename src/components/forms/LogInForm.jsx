import React from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';

const LogInForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={ async () => {

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
        </Form>
      )}
    </Formik>
  )
};

export default LogInForm;
