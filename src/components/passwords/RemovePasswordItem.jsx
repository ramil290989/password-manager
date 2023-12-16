/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Dropdown, Image } from 'react-bootstrap';
import { actions as modalsActions } from '../../slices/modalsSlice.js';
import icons from '../../svg/icons.js';

const RemovePasswordItem = ({ id }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const openRemovePasswordModal = () => {
    dispatch(modalsActions.modalShow({ window: 'removePassword', id }));
  };

  return (
    <Dropdown.Item
      eventKey='2'
      onClick={openRemovePasswordModal}
    >
      <Image
        className='mx-2'
        src={icons.remove()}
        alt={t('passwordCardBtns.remove')}
      />
      {t('passwordCardBtns.remove')}
    </Dropdown.Item>
  );
};

export default RemovePasswordItem;
