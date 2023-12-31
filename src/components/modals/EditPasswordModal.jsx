import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Modal } from 'react-bootstrap';
import { actions as modalsActions } from '../../slices/modalsSlice.js';
import EditPasswordForm from '../forms/EditPasswordForm.jsx';

const EditPasswordModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const isShow = useSelector((state) => state.modals.window) === 'editPassword';
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
        <Modal.Title>{t('modals.headers.editPassword')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditPasswordForm />
      </Modal.Body>
    </Modal>
  );
};

export default EditPasswordModal;
