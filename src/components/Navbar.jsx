import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import NavbarUserInfo from './NavbarUserInfo.jsx';

const HeaderNav = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand hrea='/'>Password Manager</Navbar.Brand>
        <NavbarUserInfo />
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
