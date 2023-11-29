import React from 'react';
import AddPasswordModal from './AddPasswordModal.jsx';
import EditPasswordModal from './EditPasswordModal.jsx';
import RemoveModal from './RemovePasswordModal.jsx';

const modalWindows = {
  addPassword: AddPasswordModal,
  removePassword: RemoveModal,
  editPassword: EditPasswordModal,
  removePassword: RemoveModal,
};

const ModalWindow = ({ window }) => {
  const SelectedModal = modalWindows[window];
  return (
    window ? <SelectedModal /> : null
  );
};

export default ModalWindow;
