import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import LogInForm from '../components/forms/LogInForm.jsx';

const Login = () => {
  return (
    <Container>
      <Row className='mt-5 align-content-center justify-content-center'>
        <Col xs='10' sm='8' md='6' xl='4'>
          <Card className='p-3 shadow'>
            <Card.Body>
              <LogInForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
