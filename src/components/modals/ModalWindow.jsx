import React from 'react';
import AddPasswordModal from './AddPasswordModal.jsx';
import EditPasswordModal from './EditPasswordModal.jsx';

const modalWindows = {
  addPassword: AddPasswordModal,
  editPassword: EditPasswordModal,
};

const ModalWindow = ({ window }) => {
  const SelectedModal = modalWindows[window];
  return (
    window ? <SelectedModal /> : null
  );
};

export default ModalWindow;
