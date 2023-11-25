import React, { useRef, useState } from 'react';
import {
  ButtonGroup,
  Button,
  DropdownButton,
  Dropdown,
  Image
} from 'react-bootstrap';
import icons from '../../svg/icons.js';
import { hideBtnClick } from '../processings/hideBtnClick.js';
import clipboard from '../processings/clipboardWrite.js'
import clipboardWrite from '../processings/clipboardWrite.js';

const PasswordCardBtns = (props) => {
  const { data } = props;
  const { id, password } = data;
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <>
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
