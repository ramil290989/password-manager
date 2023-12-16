import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Modal } from 'react-bootstrap';
import { actions as modalsActions } from '../../slices/modalsSlice.js';
import ChangeUserPasswordForm from '../forms/ChangeUserPasswordForm.jsx';

const ChangeUserPasswordModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const isShow = useSelector((state) => state.modals.window) === 'changeUserPassword';
  const onHide = () => {
    dispatch(modalsActions.modalHide());
  };

  return (
    <Modal
      show={isShow}
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.headers.changeUserPassword')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ChangeUserPasswordForm />
      </Modal.Body>
    </Modal>
  );
};

export default ChangeUserPasswordModal;
