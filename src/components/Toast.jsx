import React, { useContext, useEffect, useState } from 'react';
import { ProgressBar, Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actions as toastActions } from '../slices/toastSlice';

const ToastMessage = () => {
  const dispatch = useDispatch();

  const toastDelay = 3000;
  const progressDecrement = 10;
  const progressTimeout = 300;
  const progressMin = 0;
  const progressMax = 100;

  const isShow = useSelector((state) => state.toast.show);
  const head = useSelector((state) => state.toast.head);
  const title = useSelector((state) => state.toast.title);
  const [progress, setProgress] = useState(progressMax);
  
  useEffect(() => {
    if (isShow) {
      setTimeout(() => { dispatch(toastActions.toastHide()) }, toastDelay);
      setTimeout(() => { setProgress(progress - progressDecrement)}, progressTimeout);
    } else {
      setTimeout(() => { setProgress(progressMax)}, progressTimeout);
    }
  }, [isShow, progress]);

  return (
    <ToastContainer position='top-center' className='p-5'>
      <Toast
        show={isShow}
        onClose={() => dispatch(toastActions.toastHide())}
      >
        <Toast.Header>
          <strong className="me-auto">{head}</strong>
        </Toast.Header>
        <Toast.Body>
          {title}
          <ProgressBar variant='danger' min={progressMin} max={progressMax}
            now={progress} />
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default ToastMessage;
