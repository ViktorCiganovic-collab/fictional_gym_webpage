
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../Styles/Navbar.scss';

function Menu() {
  return (
    <Navbar className='nav d-flex justify-content-sm-between' variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" className='logo'><img id="brandLogo" src="https://marketplace.canva.com/EAGN0V9vKTI/1/0/1600w/canva-white-red-simple-flat-fitness-gym-logo-Fm7VAyJzv0o.jpg"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="links">
          <Nav.Link as={Link} to="/" className='nav-link'>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className='nav-link'>About</Nav.Link>
          <Nav.Link as={Link} to="/shop" className='nav-link shopLink'>Shop</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;