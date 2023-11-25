import React, { useState } from 'react';
import {
  ButtonGroup,
  Button,
  DropdownButton,
  Dropdown,
  Image,
  Toast,
  Row,
  Col
} from 'react-bootstrap';
import icons from '../../svg/icons.js';
import { hideBtnClick } from '../processings/hideBtnClick.js';
import clipboardWrite from '../processings/clipboardWrite.js';

const PasswordCardBtns = (props) => {
  const { data } = props;
  const { id, password } = data;
  const [show, setShow] = useState(false);
  return (
    <>
<Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} className='position-fixed bottom-0 end-0 p-3' autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </Col>
    </Row>
    <ButtonGroup className='m-3'>
      <Button
        variant='primary'
        className='w-50'
        onClick={() => hideBtnClick({ id, password })}
      >
        <Image
          id={`view-btn-ico-${id}`}
          src={icons.view()}
          alt='view'
        />
      </Button>
      <Button
        variant='primary'
        className='w-50'
        onClick={() => clipboardWrite(password)}
      >
        <Image src={icons.copy()} alt='copy' />
      </Button>
      <DropdownButton
        as={ButtonGroup}
        id={`dropdown-${id}`}
        className='w-50'
        title={<Image src={icons.menu()} alt='menu' />}
      >
        <Dropdown.Item eventKey='1'>
          <Image
            className='mx-2'
            src={icons.edit()}
            alt='edit'
          /> change
        </Dropdown.Item>
        <Dropdown.Item eventKey='2'>
          <Image
            className='mx-2'
            src={icons.remove()}
            alt='remove'
          /> remove
        </Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
    </>
  );
};

export default PasswordCardBtns;
