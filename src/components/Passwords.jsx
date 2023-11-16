import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  Col,
  Row,
  Container,
  ButtonGroup,
  Button,
  DropdownButton,
  Dropdown,
  Stack
} from 'react-bootstrap';
import { selectors as passwordsSelectors } from '../slices/passwordsSlice.js';
import { ReactComponent as Eye } from '../svg/eye.svg';
import { ReactComponent as EyeSlash } from '../svg/eye-slash.svg';

const passwordHide = (password) => '●'.repeat(password.length);

const Passwords = () => {
  const passwords = useSelector(passwordsSelectors.selectAll);

  const hideButtonClick = (passwordObj) => {
    const { id, password } = passwordObj;
    const passwordEl = document.getElementById(`password-span-${id}`);
    const viewButton = document.getElementById(`view-btn-${id}`);
    const isHide = passwordEl.getAttribute('data-hide');
    switch (isHide) {
      case 'true':
        passwordEl.textContent = password;
        passwordEl.setAttribute('data-hide', 'false');
        viewButton.textContent = <EyeSlash />;
        return;
      case 'false':
        passwordEl.textContent = passwordHide(password);
        passwordEl.setAttribute('data-hide', 'true');
        return;
      default:
        return;
    };
  };

  return (
    <Container className='mt-4'>
      <Row>
        {passwords.map((passwordObj) => (
          <Col xs='12' sm='6' md='4' lg='3' key={passwordObj.id} className='my-2'>
            <Card className='h-100'>
              <Card.Header>
                <Card.Title>{passwordObj.header}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>{passwordObj.description}</Card.Text>
              </Card.Body>
              <Stack direction='horizontal' className='mx-3'>
                <div>Username:</div>
                <div className='mx-2'>{passwordObj.userName}</div>
              </Stack>
              <Stack direction='horizontal' className='mx-3'>
                <div>Password:</div>
                <div className='mx-2'>
                  <span id={`password-span-${passwordObj.id}`} data-hide='true'>
                    {passwordHide(passwordObj.password)}
                  </span>
                </div>
              </Stack>
                <ButtonGroup className='m-3'>
                  <Button
                    id={`view-btn-${passwordObj.id}`}
                    variant='primary'
                    onClick={() => hideButtonClick(passwordObj)}
                  >
                    <Eye fill='var(--bs-secondary-bg)' />
                  </Button>
                  <Button variant='primary' onClick={() => hideButtonClick(passwordObj)}>View</Button>
                  <DropdownButton as={ButtonGroup} title='Edit' id={`dropdown-${passwordObj.id}`}>
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
