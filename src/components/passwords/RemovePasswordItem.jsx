import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Dropdown, Image } from 'react-bootstrap';
import AuthContext from '../../context/AuthContext.jsx';
import { actions as passwordsActions } from '../../slices/passwordsSlice.js';
import apiRoutes from '../../apiRoutes.js';
import icons from '../../svg/icons.js';


const RemovePasswordItem = ({ id }) => {
  const { t } = useTranslation();
  const { authData } = useContext(AuthContext);
  const dispatch = useDispatch();
  const path = apiRoutes.removePassword();

  const removePassword = async () => {
    const removeData = { id };
    const { token } = authData;
    const authHeader = { headers: { Authorization: token }};
    const removedPasswordData = await axios.post(path, removeData, authHeader);
    const { removedPasswordId } = removedPasswordData.data;
    dispatch(passwordsActions.removePassword(removedPasswordId));
  }

  return (
    <Dropdown.Item
      eventKey='2'
      onClick={() => removePassword()}
    >
      <Image
        className='mx-2'
        src={icons.remove()}
        alt={t('passwordCardBtns.remove')}
      /> {t('passwordCardBtns.remove')}
    </Dropdown.Item>
  );
};

export default RemovePasswordItem;
