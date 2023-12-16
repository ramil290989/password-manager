import React from 'react';
import { useSelector } from 'react-redux';
import {
  Row,
  Col,
  Container,
} from 'react-bootstrap';
import { selectors as passwordsSelectors } from '../../slices/passwordsSlice.js';
import PasswordCard from './PaswordCard.jsx';
import ModalWindow from '../modals/ModalWindow.jsx';

const Passwords = () => {
  const passwords = useSelector(passwordsSelectors.selectAll);
  const modalWindow = useSelector((state) => state.modals.window);

  return (
    <Container className='mt-4'>
      <Row>
        {passwords.map((password) => (
          <Col xs='12' sm='6' md='4' lg='3' key={password.id} className='my-2'>
            <PasswordCard data={password} />
          </Col>
        ))}
      </Row>
      {modalWindow && <ModalWindow window={modalWindow} />}
    </Container>
  );
};

export default Passwords;
