import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectors as passwordsSelectors } from '../slices/passwordsSlice.js';
import { Card, Col, Row, Container, ButtonGroup, Button, DropdownButton, Dropdown, Placeholder, ListGroup, Stack } from 'react-bootstrap';

const Passwords = () => {
  const passwords = useSelector(passwordsSelectors.selectAll);
  const [hide, setHide] = useState(true);

  const hideButtonClick = () => {
    hide ? setHide(false) : setHide(true);
  };

  return (
    <Container className='mt-4'>
      <Row>
        {passwords.map((password) => (
          <Col xs='12' sm='6' md='4' lg='3' key={password.id}>
            <Card className='h-100'>
              <Card.Header>
                <Card.Title>{password.header}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>{password.description}</Card.Text>
              </Card.Body>
              <Stack direction="horizontal" gap={2} className='mx-2'>
                <div className="p-2">Username:</div>
                <div className="p-2">{password.userName}</div>
              </Stack>
              <Stack direction="horizontal" gap={2} className='mx-2'>
                <div className="p-2">Password:</div>
                <div className="p-2">{hide ? <Placeholder xs='4' /> : password.password}</div>
              </Stack>
                <ButtonGroup className='m-3'>
                  <Button variant='primary' className='w-50' onClick={hideButtonClick}>View</Button>
                  <DropdownButton className='w-50' as={ButtonGroup} title='Edit' id={`dropdown-${password.id}`}>
                    <Dropdown.Item eventKey='1'>Change</Dropdown.Item>
                    <Dropdown.Item eventKey='2'>Remove</Dropdown.Item>
                  </DropdownButton>
                </ButtonGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Passwords;
