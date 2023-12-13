import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import NavbarControl from './NavbarControl.jsx';

const HeaderNav = () => (
  <Navbar expand='md' className='bg-body-secondary'>
    <Container>
      <Navbar.Brand href='/'>Password Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls='navbar' />
      <Navbar.Collapse id='navbar' className='justify-content-end'>
        <NavbarControl />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default HeaderNav;
