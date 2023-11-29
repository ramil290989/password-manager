import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Dropdown, Image } from 'react-bootstrap';
import { actions as modalsActions } from '../../slices/modalsSlice.js';
import icons from '../../svg/icons.js';

const EditPasswordItem = ({ id }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const openEditModal = () => {
    dispatch(modalsActions.modalShow({ window: 'editPassword', id }));
  };
  return (
    <Dropdown.Item eventKey='1' onClick={openEditModal}>
      <Image
        className='mx-2'
        src={icons.edit()}
        alt='edit'
      /> {t('passwordCardBtns.edit')}
    </Dropdown.Item>
  );
};

export default EditPasswordItem;
