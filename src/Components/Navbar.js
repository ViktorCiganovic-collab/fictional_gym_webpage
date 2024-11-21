
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../Styles/Navbar.scss';

function Menu() {
  return (
    <Navbar className='nav' variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" className='logo'>Gym App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="links">
          <Nav.Link as={Link} to="/" className='nav-link'>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className='nav-link'>About</Nav.Link>
          <Nav.Link as={Link} to="/shop" className='nav-link'>Shop</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;