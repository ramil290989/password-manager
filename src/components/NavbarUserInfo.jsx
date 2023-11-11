import React, { useContext } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';

const NavbarUserInfo = () => {
  const { authData } = useContext(AuthContext);
  const { username } = authData;

  return (
    username ? (
      <div className="justify-content-end">
        <Navbar.Text>
          Signed in: {username}
        </Navbar.Text>
        <Button className='mx-4'>Log out</Button>
      </div>
    )
    : null
  );
};

export default NavbarUserInfo;
