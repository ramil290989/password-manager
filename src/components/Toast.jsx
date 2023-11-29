import React, { useContext } from 'react';
import ToastContext from '../context/ToastContext.jsx';
import { Toast } from 'react-bootstrap';

const ToastMessage = () => {
  const { toastShow, setToastShow } = useContext(ToastContext);

  return (
    <Toast onClose={() => setToastShow(false)} show={toastShow} delay={3000} autohide>
      <Toast.Header>ошибка</Toast.Header>
      <Toast.Body>Ошибка</Toast.Body>
    </Toast>
  )
}

export default ToastMessage;
