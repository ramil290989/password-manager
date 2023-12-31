/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import {
  ButtonGroup,
  Button,
  DropdownButton,
  Image,
  Overlay,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import icons from '../../svg/icons.js';
import { hideBtnClick } from '../processings/hideBtnClick.js';
import clipboardWrite from '../processings/clipboardWrite.js';
import RemovePasswordItem from './RemovePasswordItem.jsx';
import EditPasswordItem from './EditPasswordItem.jsx';

const PasswordCardBtns = (props) => {
  const { t } = useTranslation();
  const { data } = props;
  const { id, password } = data;
  const [overlayShow, setOverlayShow] = useState(false);
  const [isDisabled, setIsDisabled] = useState('disabled');
  const target = useRef(null);
  return (
    <ButtonGroup className='m-3'>
      <Button
        variant='primary'
        className='w-50'
        onClick={() => hideBtnClick({ id, password, setIsDisabled })}
      >
        <Image
          id={`view-btn-ico-${id}`}
          src={icons.view()}
          alt='view'
        />
      </Button>
      <Button
        id={`copyBtn-${id}`}
        ref={target}
        variant='primary'
        className='w-50'
        disabled={isDisabled}
        onClick={() => clipboardWrite(id, setOverlayShow)}
      >
        <Image src={icons.copy()} alt='copy' />
      </Button>
      <Overlay target={target.current} show={overlayShow} placement='top'>
        {(overlayProps) => (
          <div {...overlayProps} className='bg-light m-2 p-1 pb-2 rounded-2 shadow'>
            {t('passwordCardBtns.overlayCopyOk')}
          </div>
        )}
      </Overlay>
      <DropdownButton
        as={ButtonGroup}
        id={`dropdown-${id}`}
        className='w-50'
        title={<Image src={icons.menu()} alt='menu' />}
      >
        <EditPasswordItem id={id} />
        <RemovePasswordItem id={id} />
      </DropdownButton>
    </ButtonGroup>
  );
};

export default PasswordCardBtns;
