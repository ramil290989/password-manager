import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import AuthContext from '../../context/AuthContext.jsx';
import { useTranslation } from 'react-i18next';
import { actions as modalsActions } from '../../slices/modalsSlice.js';

const NavbarControl = () => {
  const { authData, setAuthData } = useContext(AuthContext);
  const { username } = authData;
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const openAddPasswordModal = () => {
    dispatch(modalsActions.modalShow({ window: 'addPassword' }));
  };

  const logOut = () => {
    localStorage.removeItem('pasManUsername');
    localStorage.removeItem('pasManToken');
    setAuthData({});
  };

  return username
    ? (
        <>
          <Nav className='mx-md-2 mx-lg-4 mb-2 mb-md-0'>
            <Nav.Link className='text-dark' onClick={openAddPasswordModal}>{t('navbar.addPassword')}</Nav.Link>
            <Nav.Link className='text-dark' href=''>{t('navbar.settings')}</Nav.Link>
          </Nav>
          <Navbar.Text className='mx-md-2'>
            {t('navbar.userInf')}{username}
          </Navbar.Text>
          <div>
            <Button className='mt-1 mt-md-0' onClick={logOut}>{t('navbar.logoutBtn')}</Button>
          </div>
        </>
      )
    : null;
};

export default NavbarControl;
