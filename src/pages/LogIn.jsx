import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import LogInForm from '../components/forms/LogInForm.jsx';
import { ReactComponent as Lock } from '../svg/lock.svg';

const Login = () => {
  return (
    <Container>
      <Row className='mt-5 align-content-center justify-content-center'>
        <Col xs={12} md={8} xxl={6}>
          <Card className='p-3 shadow'>
            <Card.Body>
              <Row className='align-items-center'>
                <Col xs={3} md={6} className='mx-auto p-4'>
                  <Lock fill='var(--bs-gray-900)'/>
                </Col>
                <Col>
                  <LogInForm />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
