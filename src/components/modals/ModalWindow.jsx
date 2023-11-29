import React from 'react';
import AddPasswordModal from './AddPasswordModal.jsx';
import RemoveModal from './RemovePasswordModal.jsx';
import Edi

const modalWindows = {
  addPassword: AddPasswordModal,
  removePassword: RemoveModal,
  editPassword: EditPasswordModal,
};

const ModalWindow = ({ window }) => {
  const SelectedModal = modalWindows[window];
  return (
    window ? <SelectedModal /> : null
  );
};

export default ModalWindow;
