import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as modalsActions } from '../../slices/modalsSlice';
import { Modal } from 'react-bootstrap';

const AddPasswordModal = () => {
  const dispatch = useDispatch();

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
        <Modal.Title>Добавить пароль</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      </Modal.Body>
    </Modal>
  );
};

export default AddPasswordModal;
