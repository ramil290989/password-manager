import React, { useContext } from 'react';
import { Navbar, Nav, Button, Dropdown, DropdownHeader, DropdownMenu, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import AuthContext from '../../context/AuthContext.jsx';
import { useTranslation } from 'react-i18next';
import { actions as modalsActions } from '../../slices/modalsSlice.js';
import useLogOut from '../../hooks/useLogOut.jsx';

const NavbarControl = () => {
  const { authData } = useContext(AuthContext);
  const { username } = authData;
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();
  const logOut = useLogOut();

  const openAddPasswordModal = () => {
    dispatch(modalsActions.modalShow({ window: 'addPassword' }));
  };
  const openChangeUserPasswordModal = () => {
    dispatch(modalsActions.modalShow({ window: 'changeUserPassword'}));
  };
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return username
    ? (
        <>
          <Nav className='mx-md-2 mx-lg-4 mb-2 mb-md-0'>
            <Nav.Link className='text-dark' onClick={openAddPasswordModal}>{t('navbar.addPassword')}</Nav.Link>
            <NavDropdown title={t('navbar.settings')}>
              <NavDropdown.Item onClick={() => changeLanguage('ru')}>Русский</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={openChangeUserPasswordModal}>{t('navbar.changeUserPassword')}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Text className='mx-md-2'>
            {t('navbar.userInf')}{username}
          </Navbar.Text>
          <div>
            <Button className='mt-1 mt-md-0' onClick={() => logOut()}>{t('navbar.logoutBtn')}</Button>
          </div>
        </>
      )
    : (
        <Nav className='mx-md-2 mx-lg-4 mb-2 mb-md-0'>
          <NavDropdown title={t('navbar.settings')}>
            <NavDropdown.Item onClick={() => changeLanguage('ru')}>Русский</NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      );
};

export default NavbarControl;
