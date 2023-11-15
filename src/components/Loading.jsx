import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loading = () => (
  <Container className='text-center'>
    <Spinner animation='border' variant='primary' className='m-5' />
  </Container>
);

export default Loading;
