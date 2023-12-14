import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import SignUpForm from '../components/forms/SignUpForm.jsx';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Row className='mt-5 align-content-center justify-content-center'>
        <Col xs='10' sm='8' md='6' xl='4'>
          <Card className='m-3 shadow'>
            <Card.Body>
              <SignUpForm />
            </Card.Body>
            <Card.Footer>
              <Card.Link href='/login'>{t('forms.buttons.login')}</Card.Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
