import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import { passwordHide } from '../processings/hideBtnClick.js';
import PasswordCardBtns from './PasswordCardBtns.jsx';

const PasswordCard = (props) => {
  const { data } = props;
  const { id, header, description, userName, password } = data;
  return (
    <Card className='h-100'>
      <Card.Header>
        <Card.Title>{header}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Stack direction='horizontal' className='mx-3'>
        <div>Username:</div>
        <div className='mx-2'>{userName}</div>
      </Stack>
      <Stack direction='horizontal' className='mx-3'>
        <div>Password:</div>
        <div className='mx-2'>
          <span id={`password-span-${id}`} data-hide='true'>
            {passwordHide(password)}
          </span>
        </div>
      </Stack>
      <PasswordCardBtns data={{ id, password }} />        
    </Card>
  );
};

export default PasswordCard;
