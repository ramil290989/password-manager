import React from 'react';
import AddPasswordModal from './AddPasswordModal.jsx';
import RemoveModal from './RemovePasswordModal.jsx';
import EditPasswordModal from './EditPasswordModal.jsx'

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
