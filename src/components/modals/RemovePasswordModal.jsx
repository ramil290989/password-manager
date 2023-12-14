import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { actions as modalsActions } from '../../slices/modalsSlice.js';
import { actions as passwordsActions} from '../../slices/passwordsSlice.js';
import { actions as toastActions } from '../../slices/toastSlice.js';
import apiRoutes from '../../apiRoutes.js';
import useLogOut from '../../hooks/useLogOut.jsx';
import useAuthHeader from '../../hooks/useAuthHeader.jsx';

const RemoveModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const authHeader = useAuthHeader();

  const isShow = useSelector((state) => state.modals.window) === 'removePassword';
  const id = useSelector((state) => state.modals.id);

  
  const removePath = apiRoutes.removePassword();
  const removeData = { id };

  const onHide = () => {
    dispatch(modalsActions.modalHide());
  };

  const logOut = useLogOut();

  const removePassword = () => {
    axios.post(removePath, removeData, authHeader)
      .then(({ status }) => {
        status === 200 && dispatch(passwordsActions.removePassword(id));
        const title = 'toast.passwordRemoved';
        dispatch(toastActions.toastShowSuccess(title));
      })
      .catch((e) => {
        const { status } = e.response;
        dispatch(toastActions.toastShowError(status));
        status === 403 && logOut();
      })
      .finally(onHide());
  };

  return (
    <Modal
      show={isShow}
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.headers.removePassword')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('modals.titles.confirmRemove')}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>{t('modals.buttons.cancel')}</Button>
        <Button variant='danger' onClick={removePassword}>{t('modals.buttons.remove')}</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveModal;
