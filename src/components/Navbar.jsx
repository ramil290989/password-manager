import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext.jsx';

const HeaderNav = () => {
  const { authData, setAuthData } = useContext(AuthContext);
  const { username } = authData;

  const logOut = () => {
    localStorage.removeItem('pasManUsername');
    localStorage.removeItem('pasManToken');
    setAuthData({});
  };

  return (
    <Navbar expand='md' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='/'>Password Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse id='navbar' className='justify-content-end'>
          <Nav className='mx-md-3'>
            <Nav.Link className='text-dark' href=''>add password</Nav.Link>
            <Nav.Link className='text-dark' href=''>settings</Nav.Link>
          </Nav>
          <Navbar.Text className='my-md-3 mx-md-3'>
            sign in as {username}
          </Navbar.Text>
          <div>
            <Button onClick={logOut}>LogOut</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
