import React, { useContext, useEffect } from 'react';
import ToastContext from '../context/ToastContext.jsx';
import { ProgressBar, Toast, ToastContainer } from 'react-bootstrap';

const ToastMessage = () => {
  const { toastShow, setToastShow } = useContext(ToastContext);
  const toastDelay = 3000;
  

  useEffect(() => {
    if (toastShow) {
      const id = setTimeout(() => {setToastShow(!toastShow)}, toastDelay);
      console.log(id)
    }
  }, [toastShow, setToastShow]);

  return (
    <ToastContainer position='top-center' className='p-5'>
      <Toast
        show={toastShow}
        onClose={() => setToastShow(false)}
      >
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>
          <ProgressBar variant='warning' min={0} max={toastDelay}
            now={1} />
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default ToastMessage;
