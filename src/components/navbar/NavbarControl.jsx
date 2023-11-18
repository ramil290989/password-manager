import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import AuthContext from '../../context/AuthContext.jsx';
import { useTranslation } from 'react-i18next';

const NavbarControl = () => {
  const { authData, setAuthData } = useContext(AuthContext);
  const { username } = authData;

  const { t } = useTranslation();

  const logOut = () => {
    localStorage.removeItem('pasManUsername');
    localStorage.removeItem('pasManToken');
    setAuthData({});
  };

  return username
    ? (
        <>
          <Nav className='mx-md-4 mb-2 mb-md-0'>
            <Nav.Link className='text-dark' href=''>{t('navbar.addPassword')}</Nav.Link>
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
