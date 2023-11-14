import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import LogInForm from '../components/forms/LogInForm.jsx';
import lock from '../svg/lock.svg';

const Login = () => {
  return (
    <Container>
      <Row className='mt-5 align-content-center justify-content-center'>
        <Col xs={12} md={8} xxl={6}>
          <Card className='p-3 shadow'>
            <Card.Body>
              <Row className='align-items-center'>
                <Col xs={3} md={6}>
                  <Image src={lock} className='w-100' fill="red"/>
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
