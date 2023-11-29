import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { actions as modalsActions } from '../../slices/modalsSlice.js';
import { actions as passwordsActions} from '../../slices/passwordsSlice.js';
import { actions as toastActions } from '../../slices/toastSlice.js';
import AuthContext from '../../context/AuthContext.jsx';
import apiRoutes from '../../apiRoutes.js';

const RemoveModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { authData, setAuthData } = useContext(AuthContext);

  const isShow = useSelector((state) => state.modals.window) === 'removePassword';
  const id = useSelector((state) => state.modals.id);

  
  const removePath = apiRoutes.removePassword();
  const removeData = { id };
  const { token } = authData;
  const authHeader = { headers: { Authorization: token }};

  const onHide = () => {
    dispatch(modalsActions.modalHide());
  };

  const resetAuth = () => {
    setAuthData({});
    localStorage.removeItem('pasManUsername');
    localStorage.removeItem('pasManToken');
    dispatch(passwordsActions.resetData());
  };

  const removePassword = () => {
    axios.post(removePath, removeData, authHeader)
      .then(({ status }) => status === 200 && dispatch(passwordsActions.removePassword(id)))
      .catch((e) => {
        const { status } = e.response;
        const head = t('other.error');
        const title = t(`errors.${status}`);
        dispatch(toastActions.toastShow({ head, title }));
        status === 403 && resetAuth();
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
        <Modal.Title>{t('modals.remove.head')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('modals.remove.title')}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>{t('modals.remove.cancelBtn')}</Button>
        <Button variant='danger' onClick={removePassword}>{t('modals.remove.removeBtn')}</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveModal;
