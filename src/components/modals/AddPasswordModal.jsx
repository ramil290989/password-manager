import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Modal } from 'react-bootstrap';
import { actions as modalsActions } from '../../slices/modalsSlice.js';
import AddPasswordForm from '../forms/AddPasswordForm.jsx';

const AddPasswordModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const isShow = useSelector((state) => state.modals.window) === 'addPassword';
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
        <Modal.Title>{t('modals.headers.addPassword')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddPasswordForm />
      </Modal.Body>
    </Modal>
  );
};

export default AddPasswordModal;
