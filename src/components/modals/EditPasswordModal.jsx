import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { actions as modalsActions } from '../../slices/modalsSlice';
import { Button, Modal } from 'react-bootstrap';
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
        <Modal.Title>{t('modals.editPassword.head')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditPasswordForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>{t('modals.btns.cancel')}</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPasswordModal;
