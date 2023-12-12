import React from 'react';
import AddPasswordModal from './AddPasswordModal.jsx';
import EditPasswordModal from './EditPasswordModal.jsx';
import RemoveModal from './RemovePasswordModal.jsx';
import ChangeUserPasswordModal from './ChangeUserPasswordModal.jsx';

const modalWindows = {
  addPassword: AddPasswordModal,
  removePassword: RemoveModal,
  editPassword: EditPasswordModal,
  changeUserPassword: ChangeUserPasswordModal,
};

const ModalWindow = ({ window }) => {
  const SelectedModal = modalWindows[window];
  return (
    window ? <SelectedModal /> : null
  );
};

export default ModalWindow;
