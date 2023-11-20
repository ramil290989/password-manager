import React from 'react';
import AddPasswordModal from './AddPasswordModal.jsx';

const modalWindows = {
  addPassword: AddPasswordModal,
};

const ModalWindow = ({ window }) => {
  const SelectedModal = modalWindows[window];
  return (
    window ? <SelectedModal /> : null
  );
};

export default ModalWindow;
