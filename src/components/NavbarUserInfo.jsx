import React, { useContext } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';

const NavbarUserInfo = () => {
  const { authData, setAuthData } = useContext(AuthContext);
  const { username } = authData;

  const onClick = () => {
    localStorage.removeItem('pasManUsername');
    localStorage.removeItem('pasManToken');
    setAuthData({});
  };

  return (
    username ? (
      <div className="justify-content-end">
        <Navbar.Text>
          Signed in: {username}
        </Navbar.Text>
        <Button className='mx-4' onClick={onClick}>Log out</Button>
      </div>
    )
    : null
  );
};

export default NavbarUserInfo;
